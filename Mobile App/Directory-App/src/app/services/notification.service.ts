import {Injectable} from '@angular/core';
import {Env} from './env';
import {AudioService} from './audio.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Network} from '@ionic-native/network/ngx';


@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    notificationsData: any;
    notification: any;
    notificationCount = 0;
    isNewNotification = false;

    constructor(public env: Env, public audioService: AudioService, public firestore: AngularFirestore, public network: Network) {
        this.notificationsData = this.getNotifications();
        this.sortNotifications(this.notificationsData);
        this.notificationCount = this.countUnread();
        if (this.network.type !== network.Connection.NONE) {
            this.syncNotifications();
        }
        this.network.onConnect().subscribe(() => {
            this.syncNotifications();
        });
    }

    syncNotifications() {
        this.firestore.collection('notifications').valueChanges().subscribe((data) => {
            this.sortNotifications(data);
            // tslint:disable-next-line:max-line-length
            const received = data.slice(0, this.env.maxNotificationCount + 1).map((notification) => this.notificationToLocalFormat(notification));
            if (this.notificationsData.length < received.length) {
                // tslint:disable-next-line:prefer-for-of
                for (let i = this.notificationsData.length; i < received.length; i++) {
                        this.notificationsData.push(received[i]);
                        this.saveToLocalStorage(received[i]);
                }
            }
            this.notificationCount = this.countUnread();
        });
    }

    addNotification(notificationData) {
        // read : 1, unread :0
        const notificationDataforView = {
            title: notificationData.title,
            description: notificationData.body,
            datetime: notificationData.datetime,
            sentBy: notificationData.sentBy,
            icon: notificationData.icon,
            read: 0,
            id: notificationData.id
        };
        this.saveToLocalStorage(notificationDataforView);
    }

    getNotifications(): Array<object> {
        const notifications = JSON.parse(localStorage.getItem('notifications'));
        if (notifications === null) {
            return [];
        } else {
            return notifications;
        }

    }

    notificationToLocalFormat(notification) {
        return {
            title: notification.title,
            description: notification.body,
            datetime: notification.datetime,
            icon: notification.icon,
            read: 0,
            id: notification.id,
            sentBy: notification.sentBy
        };
    }

    saveToLocalStorage(notification) {
        // save the notification into localStorage
        this.notificationsData = this.getNotifications();
        if (!this.isNotificationStored(notification, this.notificationsData)) {
            this.isNewNotification = true;
            this.audioService.playFromUrl(this.env.notificationSound);

            this.notificationsData.unshift(notification);
            if (this.notificationsData.length > this.env.maxNotificationCount) {
                this.notificationsData.pop();
            }

            localStorage.setItem('notifications', JSON.stringify(this.notificationsData));
            this.notificationCount = this.countUnread();

            setTimeout(() => {
                this.isNewNotification = false;
                this.audioService.stop();
            }, 1000);
        }
    }

    countUnread(): number {
        if (this.notificationsData) {
            let count = 0;
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.notificationsData.length; i++) {
                if (this.notificationsData[i].read === 0) {
                    count += 1;
                }
            }
            return count;
        } else {
            return 0;
        }
    }

    markAsRead(notificationID) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.notificationsData.length; i++) {
            if (this.notificationsData[i].id === notificationID) {
                this.notificationsData[i].read = 1;
                break;
            }
        }
        this.notificationCount = this.countUnread();
        localStorage.setItem('notifications', JSON.stringify(this.notificationsData));
    }

    markAllAsRead() {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.notificationsData.length; i++) {
            this.notificationsData[i].read = 1;
        }
        this.notificationCount = 0;
        localStorage.setItem('notifications', JSON.stringify(this.notificationsData));
    }

    GetSortOrder(prop) {
        // tslint:disable-next-line:only-arrow-functions
        return function(a, b) {
            return Date.parse(a[prop]) < Date.parse(b[prop]) ? 1 : Date.parse(a[prop]) > Date.parse((b[prop])) ? -1 : 0;
        };
    }

    sortNotifications(notifications) {
        notifications.sort(this.GetSortOrder('datetime'));
    }

    isNotificationStored(notification, notificationList) {
        return notificationList.find((not) => {
            return (notification.id === not.id);
        });
    }

}


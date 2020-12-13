import {EventEmitter, Injectable} from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {Env} from './env';
import {AudioService} from './audio.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {element} from 'protractor';


@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    notificationsData: any;
    notification: any;
    notificaionCount = 0;
    isNewNotification = false;
    syncedNotificationsEvent = new EventEmitter();
    constructor(public env: Env, public audioService: AudioService, private firestore: AngularFirestore) {
        this.notificationsData = this.getNotifications();
        this.notificaionCount = this.countUnread();
        this.syncNotifications();
    }

    syncNotifications() {
        this.firestore.collection('notifications').valueChanges().subscribe((data) => {
            this.sortNotificaions(data);
            // tslint:disable-next-line:max-line-length
            const received = data.slice(0, this.env.maxNotificationCount + 1).map((notification) => this.notificationToLocalFormat(notification));
            let synced = this.notificationsData;
            if (synced.length === 0) {
                synced = received;
            } else {
                // tslint:disable-next-line:no-unused-expression prefer-for-of
                for (let i = 0; i < received.length; i++) {
                    // tslint:disable-next-line:prefer-for-of
                    for (let j = 0; j < synced.length; j++) {
                        if (received[i].datetime === synced[j].datetime) {
                            continue;
                        }
                        synced.push(received[i]);
                    }
                }
            }
            this.sortNotificaions(synced);
            localStorage.setItem('notifications', JSON.stringify(synced));
        });
    }

    addNotification(notificationData) {
        // read : 1, unread :0
        this.isNewNotification = true;
        this.audioService.playFromUrl(this.env.notificationSound);
        const notificationDataforView = {
            title: notificationData.title,
            description: notificationData.body,
            datetime: new Date(),
            icon:  notificationData.icon,
            read: 0,
            id: undefined
        };
        notificationDataforView.id = Md5.hashStr(JSON.stringify(notificationDataforView));
        this.saveToLocalStorage(notificationDataforView);

        setTimeout(() => {
            this.isNewNotification = false;
            this.audioService.stop();
        }, 1000);
    }

    getNotifications(): Array<object> {
        const notifications = JSON.parse(localStorage.getItem('notifications'));
        if (notifications === null ) {
            return [];
        } else {
            return notifications;
        }

    }

    notificationToLocalFormat(notification) {
        const notificationDataforView = {
            title: notification.title,
            description: notification.body,
            datetime: notification.timeCreated,
            icon:  notification.icon,
            read: 0,
            id: undefined
        };
        notificationDataforView.id = Md5.hashStr(JSON.stringify(notificationDataforView));
        return notificationDataforView;
    }

    saveToLocalStorage(notification) {
        // save the notification into localStorage
        this.notificationsData = JSON.parse(localStorage.getItem('notifications'));
        if (this.notificationsData === null) {
            this.notificationsData = [];
        }
        this.notificationsData.unshift(notification);
        if (this.notificationsData.length > this.env.maxNotificationCount ) {
            this.notificationsData.pop();
        }
        localStorage.setItem('notifications', JSON.stringify(this.notificationsData));
        this.notificaionCount = this.countUnread();
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
        this.notificaionCount = this.countUnread();
        localStorage.setItem('notifications', JSON.stringify(this.notificationsData));
    }

    markAllAsRead() {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.notificationsData.length; i++) {
            this.notificationsData[i].read = 1;
        }
        this.notificaionCount = 0;
        localStorage.setItem('notifications', JSON.stringify(this.notificationsData));
    }

    GetSortOrder(prop) {
        // tslint:disable-next-line:only-arrow-functions
        return function(a, b) {
            if (Date.parse(a[prop]) > Date.parse(b[prop])) {
                return 1;
            } else if (a[prop] > b[prop]) {
                return -1;
            }
            return 0;
        };
    }

    sortNotificaions(notifications) {
        notifications.sort(this.GetSortOrder('datetime'));
    }

}


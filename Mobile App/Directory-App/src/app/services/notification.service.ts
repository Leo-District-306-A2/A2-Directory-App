import {Injectable} from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {Env} from './env';


@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    notificationsData: any;
    notification: any;
    notificaionCount = 0;

    constructor(public env: Env) {
        this.notificationsData = this.getNotifications();
        this.notificaionCount = this.countUnread();
        this.addNotification({title: 'test', body: 'asasa'});
    }


    addNotification(notificationData) {
        // read : 1, unread :0
        const notificationDataforView = {
            title: notificationData.title,
            description: notificationData.body,
            datetime: new Date(),
            read: 0,
            id: undefined
        };
        notificationDataforView.id = Md5.hashStr(JSON.stringify(notificationDataforView));
        this.saveToLocalStorage(notificationDataforView);
    }

    getNotifications(): Array<object> {
        // return notifications array in localStorage
        const notifications = JSON.parse(localStorage.getItem('notifications'));
        if (notifications === null) {
            return [];
        } else {
            return notifications;
        }

    }

    saveToLocalStorage(notification) {
        // save the notification into localStorage
        let currentNotifications = JSON.parse(localStorage.getItem('notifications'));
        if (currentNotifications === null) {
            currentNotifications = [];
        }
        currentNotifications.unshift(notification);

        if (currentNotifications.length > this.env.maxNotificationCount ) {
            currentNotifications.pop();
        }
        localStorage.setItem('notifications', JSON.stringify(currentNotifications));
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
}

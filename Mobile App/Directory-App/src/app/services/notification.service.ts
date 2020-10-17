import {Injectable} from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {Env} from './env';
import {Observable, Observer} from 'rxjs';
import {FileHandlerService} from './file-handler.service';


@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    notificationsData: any;
    notification: any;
    notificaionCount = 0;
    isNewNotification = false;
    constructor(public env: Env, public fileHandlerService: FileHandlerService) {
        this.notificationsData = this.getNotifications();
        this.notificaionCount = this.countUnread();
    }


    addNotification(notificationData) {
        // read : 1, unread :0
        this.isNewNotification = true;
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
        }, 1500);
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
        this.notificationsData = JSON.parse(localStorage.getItem('notifications'));
        if (this.notificationsData === null) {
            this.notificationsData = [];
        }
        this.notificationsData.unshift(notification);
        console.log(this.notificationsData);
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
}

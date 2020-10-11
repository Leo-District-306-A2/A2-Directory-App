import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationsData: any;
  constructor() {
    // Mock data for notification / read:  0 - unread | 1 - read
    this.notificationsData = [
      {title: 'Unread Notification Test', description: 'test description', datetime: new Date(), read : 0},
      {title: 'Unread Notification Test', description: 'test description', datetime: new Date(), read : 0},
      {title: 'Read Notification Test', description: 'test description', datetime: new Date(), read : 1},
      {title: 'Unread Notification Test', description: 'test description', datetime: new Date(), read : 0},
      {title: 'Unread Notification Test', description: 'test description', datetime: new Date(), read : 0},
      {title: 'Read Notification Test', description: 'test description', datetime: new Date(), read : 1},
      {title: 'Unread Notification Test', description: 'test description', datetime: new Date(), read : 0},
      {title: 'Unread Notification Test', description: 'test description', datetime: new Date(), read : 0},
      {title: 'Read Notification Test', description: 'test description', datetime: new Date(), read : 1},
      {title: 'Unread Notification Test', description: 'test description', datetime: new Date(), read : 0},
      {title: 'Unread Notification Test', description: 'test description', datetime: new Date(), read : 0},
      {title: 'Read Notification Test', description: 'test description', datetime: new Date(), read : 1},
      {title: 'Unread Notification Test', description: 'test description', datetime: new Date(), read : 0},

    ];
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
}

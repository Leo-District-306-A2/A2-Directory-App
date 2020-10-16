import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationsData: any;
  notification: any;
  constructor() {    
    this.notificationsData = this.getNotifications();
  }


addNotification(notificationData){  
  // read : 1, unread :0
  var notificationDataforView = {
    title: notificationData.title,
    description: notificationData.body,
    datetime: new Date(),
    read : 0
  }
  this.saveToLocalStorage(notificationDataforView);
}

getNotifications(): Array<object>{
  // return notifications array in localStorage
  var notifications = JSON.parse(localStorage.getItem("notifications"));
  if (notifications === null){
    return [];
  }else{
    return notifications
  }

}
saveToLocalStorage(notification){
  //save the notification into localStorage
  var currentNotifications = JSON.parse(localStorage.getItem("notifications"));
  if (currentNotifications === null){
    currentNotifications = []
  }
  currentNotifications.unshift(notification);
  localStorage.setItem("notifications", JSON.stringify(currentNotifications));
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

import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';




@Injectable()
export class NotificationEndpoint {

  private demoNotifications = [
    {
      "id": 1,
      "header": "Register your email to get more features",
      "body": "Register your email to get more features.",
      "isRead": false,
      "isPinned": true,
      "date": "2017-05-30T11:13:42.4144502"
    }
  ];



  getNotificationEndpoint<T>(notificationId: number): Observable<T> {

    let notification = this.demoNotifications.find(val => val.id == notificationId);
    let response: HttpResponse<T>;

    if (notification) {
      response = this.createResponse<T>(notification, 200);
    }
    else {
      response = this.createResponse<T>(null, 404);
    }

    return of(response.body);
  }



  getNotificationsEndpoint<T>(page: number, pageSize: number): Observable<T> {

    let notifications = this.demoNotifications;
    let response = this.createResponse<T>(this.demoNotifications, 200);

    return of(response.body);
  }



  getUnreadNotificationsEndpoint<T>(userId?: string): Observable<T> {

    let unreadNotifications = this.demoNotifications.filter(val => !val.isRead);
    let response = this.createResponse<T>(unreadNotifications, 200);

    return of(response.body);
  }



  getNewNotificationsEndpoint<T>(lastNotificationDate?: Date): Observable<T> {

    let unreadNotifications = this.demoNotifications;
    let response = this.createResponse<T>(unreadNotifications, 200);

    return of(response.body);
  }



  getPinUnpinNotificationEndpoint<T>(notificationId: number, isPinned?: boolean, ): Observable<T> {

    let notification = this.demoNotifications.find(val => val.id == notificationId);
    let response: HttpResponse<T>;

    if (notification) {
      response = this.createResponse<T>(null, 204);

      if (isPinned == null)
        isPinned = !notification.isPinned;

      notification.isPinned = isPinned;
      notification.isRead = true;
    }
    else {
      response = this.createResponse<T>(null, 404);
    }


    return of(response.body);
  }



  getReadUnreadNotificationEndpoint<T>(notificationIds: number[], isRead: boolean, ): Observable<T> {

    for (let notificationId of notificationIds) {

      let notification = this.demoNotifications.find(val => val.id == notificationId);

      if (notification) {
        notification.isRead = isRead;
      }
    }

    let response = this.createResponse<T>(null, 204);
    return of(response.body);
  }



  getDeleteNotificationEndpoint<T>(notificationId: number): Observable<T> {

    let notification = this.demoNotifications.find(val => val.id == notificationId);
    let response: HttpResponse<T>;

    if (notification) {
      this.demoNotifications = this.demoNotifications.filter(val => val.id != notificationId)
      response = this.createResponse<T>(notification, 200);
    }
    else {
      response = this.createResponse<T>(null, 404);
    }

    return of(response.body);
  }



  private createResponse<T>(body, status: number) {
    return new HttpResponse<T>({ body: body, status: status });
  }
}

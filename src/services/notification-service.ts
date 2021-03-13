import notification from 'src/helpers/notification';
import {Page} from 'src/types/Page';

export class NotificationService {
  protected createNotification = (
    options: chrome.notifications.NotificationOptions,
    onClick?: () => any,
  ) => {
    chrome.notifications.create(options, (notificationId: string) => {
      if (typeof onClick === 'function') {
        chrome.notifications.onClicked.addListener(
          (clickedNotificationId: string) => {
            if (clickedNotificationId === notificationId) {
              onClick();
            }
          },
        );
      }
    });
  };

  public createSignInNotification() {
    this.createNotification(
      {
        type: 'basic',
        title: 'Please sign-in',
        message: 'Please sign in to your Google account to use this extension',
        iconUrl: chrome.extension.getURL('icons/ed-128x128.png'),
        isClickable: true,
      },
      () => {
        chrome.tabs.create({
          url: 'chrome://settings/syncSetup',
        });
      },
    );
  }

  public createLicenseNotification() {
    this.createNotification(
      {
        type: 'basic',
        title: 'License not registered',
        message: 'Please contact admin to acquire a license',
        iconUrl: chrome.extension.getURL('icons/ed-128x128.png'),
        isClickable: true,
      },
      () => {
        chrome.tabs.create({
          url: chrome.extension.getURL(Page.Options),
        });
      },
    );
  }

  public webInvalidLicense() {
    notification.error({
      message: 'You don’t have any valid license',
    });
  }
}

export const notificationService = new NotificationService();

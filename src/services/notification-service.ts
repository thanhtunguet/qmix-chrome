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
        title: 'Bạn chưa đăng nhập',
        message: 'Vui lòng đăng nhập bằng tài khoản Google để sử dụng phần mềm',
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
        title: 'Phần mềm chưa được đăng ký',
        message:
          'Vui lòng liên hệ với admin để được hướng dẫn đăng ký sử dụng phần mềm',
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
      message: 'Phần mềm chưa đăng ký',
      description:
        'Phần mềm bạn đang dùng chưa được đăng ký nên không thể sử dụng các tính năng của QMix',
    });
  }
}

export const notificationService = new NotificationService();

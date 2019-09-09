import {notification} from 'antd';
import {ArgsProps, ConfigProps, NotificationApi} from 'antd/lib/notification';
import React from 'react';
import {ring} from './audio';

notification.config({
  placement: 'bottomRight',
});

export class Notification implements NotificationApi {

  public close(key: string): void {
    notification.close(key);
  }

  public config(options: ConfigProps): void {
    notification.config(options);
  }

  public destroy(): void {
    notification.destroy();
  }

  public error(args: ArgsProps): void {
    notification.error(args);
  }

  public info(args: ArgsProps): void {
    notification.info(args);
  }

  public open(args: ArgsProps): void {
    notification.open(args);
  }

  public async success(args: ArgsProps): Promise<void> {
    notification.success(args);
    await ring();
  }

  public warn(args: ArgsProps): void {
    notification.warn(args);
  }

  public warning(args: ArgsProps): void {
    notification.warning(args);
  }
}

export default new Notification();

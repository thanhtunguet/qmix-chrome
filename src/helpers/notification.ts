import type {ArgsProps, NotificationApi} from 'antd/lib/notification';
import notification from 'antd/lib/notification';
import {ring} from 'src/helpers/audio';

notification.config({
  placement: 'bottomRight',
});

export class Notification implements Partial<NotificationApi> {
  public async success(args: ArgsProps) {
    notification.success(args);
    await ring();
  }
}

export default new Notification();

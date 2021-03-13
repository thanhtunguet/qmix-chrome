import type {ArgsProps, NotificationApi} from 'antd/lib/notification';
import notification from 'antd/lib/notification';
import {ring} from 'src/helpers/audio';

export class Notification implements Partial<NotificationApi> {
  public async success(args: ArgsProps) {
    notification.success(args);
    await ring();
  }

  public error(args: ArgsProps) {
    notification.error(args);
  }

  public warning(args: ArgsProps) {
    notification.warning(args);
  }

  public info(args: ArgsProps) {
    notification.info(args);
  }
}

export default new Notification();

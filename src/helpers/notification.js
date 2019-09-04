// @flow

import notification from 'antd/lib/notification';
import {audioHelper} from 'helpers';

notification.config({
  placement: 'bottom-right',
});

notification.copiedNotify = function (text: string) {
  audioHelper.ring();
  notification.success({
    message: 'Text copied!',
    description: `Copied "${text}" to clipboard. Ready to paste.`,
  });
};

export default notification;

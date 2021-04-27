import copyToClipboard from 'copy-to-clipboard';
import notification from 'src/helpers/notification';

export async function copy(text: string) {
  copyToClipboard(text);
  await notification.success({
    message: 'Đã copy nội dung vào clipboard',
    description: text,
  });
}

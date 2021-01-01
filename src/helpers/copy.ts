import copyToClipboard from 'copy-to-clipboard';
import notification from 'src/helpers/notification';

export async function copy(text: string) {
  copyToClipboard(text);
  await notification.success({
    message: 'Text copied',
    description: text,
  });
}

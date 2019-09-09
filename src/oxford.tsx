import * as copy from 'copy-to-clipboard';
import notification from './helpers/notification';
import './scss/oxford.scss';

document
  .querySelectorAll('.h,.def,.x,.phon')
  .forEach((element: HTMLSpanElement) => {
    element.addEventListener('click', function () {
      const text: string = this.innerText;
      copy(text);
      return notification.success({
        message: 'Text copied',
        description: `Copied ${text} to clipboard. Ready to paste`,
      });
    });
  });

document
  .querySelectorAll('.icon-audio.sound.audio_play_button')
  .forEach((ipaButton: HTMLSpanElement) => {
    const url: string = ipaButton.getAttribute('data-src-mp3');
    const a: HTMLAnchorElement = document.createElement('a');
    a.setAttribute('role', 'button');
    a.href = url;
    a.download = url
      .split('/')
      .splice(-1)[0];
    a.className = 'mx-1';
    const text: Text = document.createTextNode('download mp3');
    a.appendChild(text);
    ipaButton.parentElement.appendChild(a);
  });

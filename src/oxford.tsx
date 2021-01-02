import {CloudDownloadOutlined} from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import {copy} from 'src/helpers/copy';
import 'src/scss/oxford.scss';

// eslint-disable-next-line no-console
console.clear();

document
  .querySelectorAll('.h,.def,.x,.phon')
  .forEach((element: HTMLSpanElement) => {
    element.addEventListener('click', async function () {
      const text: string = this.innerText;
      await copy(text);
    });
  });

document
  .querySelectorAll('.icon-audio.sound.audio_play_button')
  .forEach((ipaButton: HTMLSpanElement) => {
    const url: string = ipaButton.getAttribute('data-src-mp3');

    const anchor: HTMLAnchorElement = document.createElement('a');

    anchor.setAttribute('role', 'button');
    anchor.href = url;
    anchor.download = url.split('/').splice(-1)[0];
    anchor.className = 'mx-2';

    ipaButton.parentElement.appendChild(anchor);

    ReactDOM.render(<CloudDownloadOutlined />, anchor);
  });

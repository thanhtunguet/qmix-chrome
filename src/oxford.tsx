import {CloudDownloadOutlined} from '@ant-design/icons';
import React from 'react';
import {render} from 'react-dom';
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

    const a: HTMLAnchorElement = document.createElement('a');

    a.setAttribute('role', 'button');
    a.href = url;
    a.download = url.split('/').splice(-1)[0];
    a.className = 'mx-1';

    ipaButton.parentElement.appendChild(a);

    render(<CloudDownloadOutlined />, a);
  });

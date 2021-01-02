import {CloudDownloadOutlined} from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import {copy} from 'src/helpers/copy';
import 'src/scss/cambridge.scss';

// eslint-disable-next-line no-console
console.clear();

document.querySelectorAll('.ipa').forEach((ipa: HTMLSpanElement) => {
  ipa.addEventListener('click', async function () {
    const text: string = `/${this.innerText}/`;
    await copy(text);
  });
});

document.querySelectorAll('.hw').forEach((headWord: HTMLSpanElement) => {
  headWord.addEventListener('click', async function () {
    const text: string = this.innerText;
    await copy(text);
  });
});

document.querySelectorAll('.eg').forEach((example: HTMLSpanElement) => {
  const button: HTMLButtonElement = document.createElement('button');

  button.type = 'button';
  button.className = 'ant-btn ant-btn-sm ant-btn-primary ml-2';
  button.innerText = 'Copy';

  button.addEventListener('click', async function () {
    const text: string = example.innerText;
    await copy(text);
  });
  example.parentElement.appendChild(button);
});

document.querySelectorAll('.def').forEach((definition: HTMLSpanElement) => {
  const button: HTMLButtonElement = document.createElement('button');
  button.type = 'button';
  button.className = 'ant-btn ant-btn-sm ant-btn-primary ml-2';
  button.innerText = 'Copy';
  button.addEventListener('click', async function () {
    const text: string = definition.innerText.replace(':', '');
    await copy(text);
  });
  definition.parentElement.appendChild(button);
});

const audioElements: HTMLAudioElement[] = Object.values(
  document.getElementsByTagName('audio'),
);

for (const audioElement of audioElements) {
  const mp3Source: HTMLSourceElement = audioElement
    .children[0] as HTMLSourceElement;
  const url: string = `${mp3Source.src}`;
  const a: HTMLAnchorElement = document.createElement('a');

  a.setAttribute('role', 'button');
  a.className = 'mx-1';
  a.href = url;
  a.download = url.split('/').splice(-1)[0];
  audioElement.parentElement.parentElement.appendChild(a);

  ReactDOM.render(<CloudDownloadOutlined />, a);
}

import * as copy from 'copy-to-clipboard';
import React from 'react';
import notification from './helpers/notification';
import './scss/cambridge.scss';

document
  .querySelectorAll('.ipa')
  .forEach((ipa: HTMLSpanElement) => {
    ipa.addEventListener('click', function () {
      const text: string = `/${this.innerText}/`;
      copy(text);
      return notification.success({
        message: 'Text copied',
        description: `Copied ${text} to clipboard. Ready to paste`,
      });
    });
  });

document
  .querySelectorAll('.hw')
  .forEach((headWord: HTMLSpanElement) => {
    headWord.addEventListener('click', function () {
      const text: string = this.innerText;
      copy(text);
      return notification.success({
        message: 'Text copied',
        description: `Copied ${text} to clipboard. Ready to paste`,
      });
    });
  });

document
  .querySelectorAll('.eg')
  .forEach((example: HTMLSpanElement) => {
    const button: HTMLButtonElement = document.createElement('button');
    button.type = 'button';
    button.className = 'ant-btn ant-btn-sm ant-btn-primary ml-2';
    button.innerText = 'Copy';
    button.addEventListener('click', function () {
      const text: string = example.innerText;
      copy(text);
      return notification.success({
        message: 'Text copied',
        description: `Copied ${text} to clipboard. Ready to paste`,
      });
    });
    example.parentElement.appendChild(button);
  });

document
  .querySelectorAll('.def')
  .forEach((definition: HTMLSpanElement) => {
    const button: HTMLButtonElement = document.createElement('button');
    button.type = 'button';
    button.className = 'ant-btn ant-btn-sm ant-btn-primary ml-2';
    button.innerText = 'Copy';
    button.addEventListener('click', function () {
      const text: string = definition.innerText.replace(':', '');
      copy(text);
      return notification.success({
        message: 'Text copied',
        description: `Copied ${text} to clipboard. Ready to paste`,
      });
    });
    definition.parentElement.appendChild(button);
  });

document
  .querySelectorAll('.circle.circle-btn.sound.audio_play_button')
  .forEach((ipaButton: HTMLSpanElement) => {
    const url: string = `https://dictionary.cambridge.org${ipaButton.getAttribute('data-src-mp3')}`;
    const a: HTMLAnchorElement = document.createElement('a');
    a.setAttribute('role', 'button');
    a.className = 'circle circle-btn ml-1';
    a.href = url;
    a.download = url
      .split('/')
      .splice(-1)[0];
    const icon: HTMLElement = document.createElement('i');
    icon.className = 'fcdo fcdo-arrow-down';
    a.appendChild(icon);
    ipaButton.parentElement.appendChild(a);
  });

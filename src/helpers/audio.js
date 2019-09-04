// @flow

import $ from 'jquery';
import {AUDIO_ALERT_TONE_ID} from 'consts';

function addAlertTone() {
  const url = chrome.extension.getURL('audio/iphone_sms_original.mp3');
  const audio = document.createElement('audio');
  audio.id = AUDIO_ALERT_TONE_ID;
  $(audio).append(`<source src="${url}">`);
  document.body.appendChild(audio);
}

function ring() {
  const audio = document.getElementById(AUDIO_ALERT_TONE_ID);
  audio.play();
}

export default {
  addAlertTone,
  ring,
};

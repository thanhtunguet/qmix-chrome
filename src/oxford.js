// @flow

import 'scss/oxford.scss';
import $ from 'jquery';
import copyToClipboard from 'copy-to-clipboard';
import {audioHelper, notificationHelper} from 'helpers';

function copy(text: string) {
  copyToClipboard(text);
  notificationHelper.copiedNotify(text);
}

function selfCopy() {
  $('.phon').on('click', function () {
    const text = `/${this.firstChild.nextSibling.nextSibling.nextSibling.data}/`;
    copyToClipboard(text);
    notificationHelper.copiedNotify(text);
  });
  $('.x,.cf,.def,h2.h').on('click', function () {
    const text = $(this).text().trim();
    copy(text);
  });
}

function addDownloadIPAButtons() {
  $('.sound.audio_play_button.icon-audio').each(function () {
    const elementWrapper = $(this);
    const path: string = elementWrapper.attr('data-src-mp3');
    const filename: string = path.split('/').splice(-1)[0];
    elementWrapper.after(`<a class="ml-2" href="${path}" download="${filename}">
        download mp3
    </a>`);
  });
}

$(document).ready(function () {
  audioHelper.addAlertTone();
  addDownloadIPAButtons();
  selfCopy();
});

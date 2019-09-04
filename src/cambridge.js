// @flow

import 'scss/cambridge.scss';
import $ from 'jquery';
import copyToClipboard from 'copy-to-clipboard';
import {audioHelper, notificationHelper} from 'helpers';

function copy(text: string) {
  copyToClipboard(text);
  notificationHelper.copiedNotify(text);
}

function selfCopy() {
  $('.hw').on('click', function () {
    const text = $(this).text();
    copyToClipboard(text);
    notificationHelper.copiedNotify(text);
  });
  $('.ipa').on('click', function () {
    const text = `/${$(this).text()}/`;
    copy(text);
  });
}

function addDownloadIPAButtons() {
  $('.audio_play_button').each(function () {
    const elementWrapper = $(this);
    const path = elementWrapper.attr('data-src-mp3');
    const filename = path.split('/').splice(-1)[0];
    elementWrapper.after(
      `<a href="${path}" title="Download mp3" class="circle circle-btn sound text-white ml-1" download="${filename}">
        <i class="fcdo fcdo-arrow-down"> </i>
      </a>`,
    );
  });
}

function copyExample(e) {
  const text = $(e.target).prev().text();
  copy(text);
}

function copyDefinition(e) {
  const text = $(e.target).prev().text().replace(/(\s+):$/, '');
  copy(text);
}

function addCopyExampleEvents() {
  $('.eg').each(function () {
    const elementWrapper = $(this);
    const copyButton = $('<button class="ant-btn ant-btn-primary ant-btn-sm ml-2"> Copy </button>');
    $(copyButton).on('click', copyExample);
    elementWrapper.after(copyButton);
  });
}

function addCopyDefinitionEvents() {
  $('.def').each(function () {
    const elementWrapper = $(this);
    const copyButton = $('<button class="ant-btn ant-btn-primary ant-btn-sm ml-2"> Copy </button>');
    $(copyButton).on('click', copyDefinition);
    elementWrapper.after(copyButton);
  });
}

$(document).ready(function () {
  audioHelper.addAlertTone();
  selfCopy();
  addDownloadIPAButtons();
  addCopyExampleEvents();
  addCopyDefinitionEvents();
});

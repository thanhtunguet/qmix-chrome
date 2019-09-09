const alertTone: HTMLAudioElement = document.createElement('audio');

const source: HTMLSourceElement = document.createElement('source');
source.src = chrome.extension.getURL('audio/iphone_sms_original.mp3');

alertTone.appendChild(source);
document.body.appendChild(alertTone);

export function ring(): void {
  alertTone.play()
    .then(() => {
    });
}

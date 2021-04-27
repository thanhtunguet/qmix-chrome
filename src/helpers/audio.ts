const alertTone: HTMLAudioElement = document.createElement('audio');

const source: HTMLSourceElement = document.createElement('source');
source.type = 'audio/mpeg';
source.src = chrome.extension.getURL('audio/iphone_sms_original.mp3');
source.id = 'alert-tone';

alertTone.appendChild(source);
document.body.append(alertTone);

export async function ring(): Promise<void> {
  await alertTone.play();
}

export function injectRingtone() {
  const alertTone: HTMLAudioElement = document.createElement('audio');

  const source: HTMLSourceElement = document.createElement('source');
  source.type = 'audio/mpeg';
  source.src = chrome.runtime.getURL('src/audio/iphone_sms_original.mp3');
  source.id = 'alert-tone';

  alertTone.appendChild(source);
  document.body.append(alertTone);
}

export async function ring(): Promise<void> {
  const alertTone: HTMLAudioElement = document.createElement('audio');
  await alertTone.play();
}

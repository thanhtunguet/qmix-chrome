import {Dictionary} from 'src/core/Dictionary';

export class CambridgeDictionary extends Dictionary {
  public findIpaUrl(audioElement: HTMLAudioElement) {
    const mp3Source: HTMLSourceElement = audioElement
      .children[0] as HTMLSourceElement;
    return mp3Source.src;
  }

  public createCopyButton(): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement('button');

    button.type = 'button';
    button.className = 'ant-btn ant-btn-sm ant-btn-primary ml-2';
    button.innerText = 'Copy';

    return button;
  }
}
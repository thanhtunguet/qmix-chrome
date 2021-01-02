import {Dictionary} from 'src/core/Dictionary';

export class OxfordDictionary extends Dictionary {
  public findIpaUrl(ipaButton: HTMLSpanElement) {
    return ipaButton.getAttribute('data-src-mp3');
  }
}

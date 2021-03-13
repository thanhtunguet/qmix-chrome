import {AbstractDictionary} from 'src/core/AbstractDictionary';

export class OxfordDictionary extends AbstractDictionary {
  public findIpaUrl(ipaButton: HTMLSpanElement) {
    return ipaButton.getAttribute('data-src-mp3');
  }
}

import {OxfordDictionary} from 'src/core/OxfordDictionary';
import {copy} from 'src/helpers/copy';
import 'src/scss/oxford.scss';
import {injectRingtone} from 'src/helpers/audio';

document.onreadystatechange = () => {
  const oxfordDictionary: OxfordDictionary = new OxfordDictionary();

  /**
   * Add copy button for headwords, IPAs, definitions and examples
   */
  document
    .querySelectorAll('.h,.headword,.def,.x,.phon')
    .forEach((element: Element) => {
      element.addEventListener('click', async function () {
        const text: string = this.innerText;
        await copy(text);
      });
    });

  /**
   * Add download buttons for IPA
   */
  document
    .querySelectorAll('.icon-audio.sound.audio_play_button')
    .forEach((ipaButton: Element) => {
      oxfordDictionary.createIpaDownloadLink(
        oxfordDictionary.findIpaUrl(ipaButton),
        null,
        ipaButton.parentElement,
      );
    });

  oxfordDictionary.initializeTour();
  injectRingtone();
};

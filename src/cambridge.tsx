import './scss/cambridge.scss';
import {CambridgeDictionary} from 'src/core/CambridgeDictionary';
import {copy} from 'src/helpers/copy';
import 'antd/lib/button';
import 'antd/lib/notification';
import {injectRingtone} from 'src/helpers/audio';

document.addEventListener('readystatechange', () => {
  const cambridgeDictionary: CambridgeDictionary = new CambridgeDictionary();

  injectRingtone();

  /**
   * Add download buttons for IPA
   */
  Object.values(document.getElementsByTagName('audio')).forEach(
    (audioElement: HTMLAudioElement) => {
      const url = cambridgeDictionary.findIpaUrl(audioElement);
      cambridgeDictionary.createIpaDownloadLink(
        url,
        null,
        audioElement.parentElement.parentElement,
      );
    },
  );
  /**
   * Add copy event handler for IPA
   */
  document.querySelectorAll('.ipa').forEach((element: Element) => {
    element.addEventListener('click', async function () {
      const text: string = `/${this.innerText}/`;
      await copy(text);
    });
  });

  /**
   * Add copy event handler for headwords
   */
  document.querySelectorAll('.hw').forEach((element: Element) => {
    element.addEventListener('click', async function () {
      const text: string = this.innerText;
      await copy(text);
    });
  });

  /**
   * Add copy button for definitions and examples
   */
  document.querySelectorAll('.eg, .def').forEach((element: Element) => {
    const button: HTMLButtonElement = cambridgeDictionary.createCopyButton();

    button.addEventListener('click', async function () {
      const text: string = (element as HTMLElement).innerText?.replace(
        /:$/,
        '',
      );
      await copy(text);
    });

    button.classList.add('btn-copy');

    element.parentElement.appendChild(button);
  });

  cambridgeDictionary.initializeTour();
});

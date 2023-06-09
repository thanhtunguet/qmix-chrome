import {CambridgeDictionary} from 'src/core/CambridgeDictionary';
import {copy} from 'src/helpers/copy';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
import 'src/scss/cambridge.scss';

const cambridgeDictionary: CambridgeDictionary = new CambridgeDictionary();

/**
 * Add download buttons for IPA
 */
Object.values(document.getElementsByTagName('audio')).forEach(
  (audioElement: HTMLAudioElement) => {
    debugger;
    cambridgeDictionary.createIpaDownloadLink(
      cambridgeDictionary.findIpaUrl(audioElement),
      null,
      audioElement.parentElement.parentElement,
    );
  },
);
/**
 * Add copy event handler for IPA
 */
document.querySelectorAll('.ipa').forEach((element: HTMLSpanElement) => {
  element.addEventListener('click', async function () {
    const text: string = `/${this.innerText}/`;
    await copy(text);
  });
});

/**
 * Add copy event handler for headwords
 */
document.querySelectorAll('.hw').forEach((element: HTMLSpanElement) => {
  element.addEventListener('click', async function () {
    const text: string = this.innerText;
    await copy(text);
  });
});

/**
 * Add copy button for definitions and examples
 */
document.querySelectorAll('.eg, .def').forEach((element: HTMLSpanElement) => {
  const button: HTMLButtonElement = cambridgeDictionary.createCopyButton();

  button.addEventListener('click', async function () {
    const text: string = element.innerText?.replace(/:$/, '');
    await copy(text);
  });

  button.classList.add('btn-copy');

  element.parentElement.appendChild(button);
});
// cambridgeDictionary.initializeTour();

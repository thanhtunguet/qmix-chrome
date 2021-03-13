import {CambridgeDictionary} from 'src/core/CambridgeDictionary';
import {copy} from 'src/helpers/copy';
import 'src/scss/cambridge.scss';
import {licenseService} from 'src/services/license-service';
import {notificationService} from 'src/services/notification-service';

const cambridgeDictionary: CambridgeDictionary = new CambridgeDictionary();

document.addEventListener('readystatechange', () => {
  licenseService
    .checkLicenseStatus()
    .then(() => {
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
      document
        .querySelectorAll('.eg, .def')
        .forEach((element: HTMLSpanElement) => {
          const button: HTMLButtonElement = cambridgeDictionary.createCopyButton();

          button.addEventListener('click', async function () {
            const text: string = element.innerText?.replace(/:$/, '');
            await copy(text);
          });

          element.parentElement.appendChild(button);
        });

      /**
       * Add download buttons for IPA
       */
      Object.values(document.getElementsByTagName('audio')).forEach(
        (audioElement: HTMLAudioElement) => {
          cambridgeDictionary.createIpaDownloadLink(
            cambridgeDictionary.findIpaUrl(audioElement),
            null,
            audioElement.parentElement.parentElement,
          );
        },
      );
    })
    .catch(() => {
      notificationService.webInvalidLicense();
    });
});

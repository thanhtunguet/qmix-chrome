import {CambridgeDictionary} from 'src/core/CambridgeDictionary';
import {copy} from 'src/helpers/copy';
import {licenseService} from 'src/services/license-service';
import {notificationService} from 'src/services/notification-service';
import * as $ from 'jquery';
import 'src/scss/cambridge.scss';

const cambridgeDictionary: CambridgeDictionary = new CambridgeDictionary();

$(document).ready(function () {
  licenseService
    .checkLicenseStatus()
    .then(() => {
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

          button.classList.add('btn-copy');

          element.parentElement.appendChild(button);
        });
      cambridgeDictionary.initializeTour();
    })
    .catch(() => {
      notificationService.webInvalidLicense();
    });
});

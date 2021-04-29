import {OxfordDictionary} from 'src/core/OxfordDictionary';
import {copy} from 'src/helpers/copy';
import {licenseService} from 'src/services/license-service';
import {notificationService} from 'src/services/notification-service';
import 'src/scss/oxford.scss';

const oxfordDictionary: OxfordDictionary = new OxfordDictionary();

document.addEventListener('readystatechange', () => {
  licenseService
    .checkLicenseStatus()
    .then(() => {
      /**
       * Add copy button for headwords, IPAs, definitions and examples
       */
      document
        .querySelectorAll('.h,.headword,.def,.x,.phon')
        .forEach((element: HTMLSpanElement) => {
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
        .forEach((ipaButton: HTMLSpanElement) => {
          oxfordDictionary.createIpaDownloadLink(
            oxfordDictionary.findIpaUrl(ipaButton),
            null,
            ipaButton.parentElement,
          );
        });
      setTimeout(() => {
        oxfordDictionary.initializeTour();
      }, 300);
    })
    .catch(() => {
      notificationService.webInvalidLicense();
    });
});

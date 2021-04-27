// background script

import {installNotice} from 'src/helpers/install-notice';
import {localRepository} from 'src/repositories/local-repository';
import {globalState} from 'src/services/global-state';
import {licenseService} from 'src/services/license-service';
import {notificationService} from 'src/services/notification-service';
import nameof from 'ts-nameof.macro';

installNotice();

(async () => {
  await Promise.all([
    globalState.initialize(),
    localRepository.setItem(nameof(localRepository.isValid), undefined),
  ]);

  chrome.tabs.onCreated.addListener(async () => {
    const isValid = await licenseService.getLicenseStatus();
    await localRepository.setItem(nameof(localRepository.isValid), isValid);
    if (!isValid) {
      notificationService.createLicenseNotification();
    }
  });
})();

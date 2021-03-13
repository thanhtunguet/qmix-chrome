// background script

import {installNotice} from 'src/helpers/install-notice';
import {licenseService} from 'src/services/license-service';
import {notificationService} from 'src/services/notification-service';
import {localRepository} from 'src/repositories/local-repository';
import {globalState} from 'src/services/global-state';

installNotice();

(async () => {
  await Promise.all([
    globalState.initialize(),
    localRepository.setItem(nameof(localRepository.isValid), undefined),
  ]);
  const isValid = await licenseService.getLicenseStatus();
  await localRepository.setItem(nameof(localRepository.isValid), isValid);
  if (!isValid) {
    notificationService.createLicenseNotification();
  }
})();

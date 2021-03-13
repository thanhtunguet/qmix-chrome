import firebase from 'src/config/firebase';
import {localRepository} from 'src/repositories/local-repository';
import {browserService} from 'src/services/browser-service';
import {identityService} from 'src/services/identity-service';

export class LicenseService {
  public async getLicenseStatus(): Promise<boolean> {
    return new Promise<boolean>(async (resolve) => {
      const [fingerprint, {id}] = await Promise.all([
        browserService.getFingerprint(),
        identityService.getUserInfo(),
      ]);
      const result = await firebase
        .database()
        .ref(`/users/${id}/licenses/`)
        .get();
      const licenses: {
        [key: number]: string;
      } = JSON.parse(JSON.stringify(result));
      const isValidLicense: boolean = Object.values(licenses).includes(
        fingerprint,
      );
      await localRepository.setItem(
        nameof(localRepository.isValid),
        isValidLicense,
      );
      resolve(isValidLicense);
    });
  }

  public async checkLicenseStatus(): Promise<void> {
    const isValid = await localRepository.isValid;
    if (isValid) {
      return;
    }
    throw new Error('Invalid license');
  }
}

export const licenseService: LicenseService = new LicenseService();

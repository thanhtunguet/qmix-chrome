import type {License} from '@english-extension/models';
import firebase from 'src/config/firebase';
import {localRepository} from 'src/repositories/local-repository';
import {browserService} from 'src/services/browser-service';
import {identityService} from 'src/services/identity-service';
import nameof from 'ts-nameof.macro';

export class LicenseService {
  public async getLicense(): Promise<License> {
    return new Promise<License>(async (resolve) => {
      const [fingerprint, {id}] = await Promise.all([
        browserService.getFingerprint(),
        identityService.getUserInfo(),
      ]);
      const result = await firebase
        .database()
        .ref(`/licenses/${id}/${fingerprint}/`)
        .get();
      const license: License = JSON.parse(JSON.stringify(result));
      resolve(license);
    });
  }

  public async getLicenseStatus(): Promise<boolean> {
    return new Promise<boolean>(async (resolve) => {
      const [fingerprint, {id}] = await Promise.all([
        browserService.getFingerprint(),
        identityService.getUserInfo(),
      ]);
      const result = await firebase
        .database()
        .ref(`/licenses/${id}/${fingerprint}/`)
        .get();
      const license: License = JSON.parse(JSON.stringify(result));
      const isValidLicense: boolean =
        typeof license === 'object' &&
        license !== null &&
        typeof license?.expiredAt === 'number' &&
        license.expiredAt > new Date().getTime();
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

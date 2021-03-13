import React from 'reactn';
import {identityService} from 'src/services/identity-service';
import {browserService} from 'src/services/browser-service';

export class GlobalState {
  public get fingerprint(): string {
    return React.getGlobal<GlobalState>().fingerprint;
  }

  public get userInfo(): chrome.identity.UserInfo {
    return React.getGlobal<GlobalState>().userInfo;
  }

  public async initialize(): Promise<Partial<GlobalState>> {
    await React.setGlobal<GlobalState>({});
    const [fingerprint, userInfo] = await Promise.all<
      string,
      chrome.identity.UserInfo
    >([browserService.getFingerprint(), identityService.getUserInfo()]);
    const newGlobalState: Partial<GlobalState> = {
      fingerprint,
      userInfo,
    };
    await React.setGlobal<GlobalState>(newGlobalState);
    return newGlobalState;
  }
}

export const globalState: GlobalState = new GlobalState();

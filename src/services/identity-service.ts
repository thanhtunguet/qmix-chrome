export class IdentityService {
  public async getUserInfo(): Promise<chrome.identity.UserInfo> {
    return new Promise((resolve) => {
      chrome.identity.getProfileUserInfo(
        async (userInfo: chrome.identity.UserInfo) => {
          resolve(userInfo);
        },
      );
    });
  }
}

export const identityService: IdentityService = new IdentityService();

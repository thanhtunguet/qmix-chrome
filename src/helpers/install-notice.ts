import {Page} from 'src/types/Page';

const INSTALL_TIME: string = 'INSTALL_TIME';

export function installNotice(): void {
  chrome.storage.local.get(INSTALL_TIME, (items) => {
    if (items[INSTALL_TIME]) {
      return;
    }
    const now: number = new Date().getTime();
    chrome.storage.local.set(
      {
        INSTALL_TIME: now,
      },
      () => {
        chrome.tabs.create({url: Page.Options});
      },
    );
  });
}

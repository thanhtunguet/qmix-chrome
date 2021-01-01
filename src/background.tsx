// Background script

import {ExtensionData} from 'src/types/ExtensionData';

chrome.storage.local.get((data: ExtensionData) => {
  if (
    typeof data?.numberOfDownloads !== 'number' ||
    typeof data.numberOfClicks !== 'number'
  ) {
    const initializeData: ExtensionData = {
      numberOfClicks: 0,
      numberOfDownloads: 0,
    };
    chrome.storage.local.set(initializeData);
  }
});

// background script

// installNotice();

// (async () => {
//   await Promise.all([
//     globalState.initialize(),
//     localRepository.setItem(nameof(localRepository.isValid), undefined),
//   ]);

//   chrome.tabs.onCreated.addListener(async () => {
//     const isValid = await licenseService.getLicenseStatus();
//     await localRepository.setItem(nameof(localRepository.isValid), isValid);
//     if (!isValid) {
//       notificationService.createLicenseNotification();
//     }
//   });
// })();

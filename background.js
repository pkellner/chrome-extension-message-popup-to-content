chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({
    testSyncValue: "testSyncValue999"
  });
});

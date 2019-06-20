chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(`background.js onMessage called. request:${request}`);
  chrome.tabs.sendMessage(activeTabId, { data: request }, function(response) {
    console.log(`background.js:message sent succesfully. return:${response}`);
    sendResponse(
      `background.js sending back to popup because done now.  synchronous response from message sent to context.js:${response}`
    );
  });
});

// bug fix for dec tools problem below
// https://stackoverflow.com/questions/28786723/why-doesnt-chrome-tabs-query-return-the-tabs-url-when-called-using-requirejs
let activeTabId;

chrome.tabs.onActivated.addListener(function(activeInfo) {
  activeTabId = activeInfo.tabId;
});

function getActiveTab(callback) {
  chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    var tab = tabs[0];

    if (tab) {
      callback(tab);
    } else {
      chrome.tabs.get(activeTabId, function(tab) {
        if (tab) {
          callback(tab);
        } else {
          console.log("No active tab identified.");
        }
      });
    }
  });
}

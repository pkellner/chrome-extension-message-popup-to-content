window.onload = function() {
  const sendMessageUsingGetCurrentTab = () => {
    chrome.storage.sync.get(["testSyncValue"], result => {
      chrome.tabs.getCurrent(tab => {
        var data = `popup.js:testSyncValue:${result.testSyncValue}`;
        if (tab) {
          chrome.tabs.sendMessage(tab.id, { data: data }, () => {
            sendResponse(`popup.js sending to content.js:${data}`);
          });
        } else {
          alert(
            `popup.js calling chrome.tabs.getCurrent and getting undefined`
          );
        }
      });
    });
  };

  const timeNow = document.getElementById("timeNowId");
  timeNow.innerText = new Date().toLocaleTimeString();
  var resultsButton = document.getElementById("buttonId");
  resultsButton.onclick = sendMessageUsingGetCurrentTab;
};

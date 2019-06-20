window.onload = function() {





  console.log(`popup.js:window.onload`);
  const timeNow = document.getElementById("timeNowId");
  timeNow.innerText = new Date().toLocaleTimeString();
  var resultsButton = document.getElementById("buttonId");
  resultsButton.onclick = () => {

    chrome.storage.sync.get(["testSyncValue"], result => {
      request = `popup.js:testSyncValue:${result.testSyncValue}`;
      chrome.tabs.sendMessage(activeTabId, { data: request }, function(response) {
        sendResponse(
          `background.js sending back to popup because done now.  synchronous response from message sent to context.js:${response}`
        );
      });
    });


    // chrome.runtime.sendMessage(
    //   "FromPopupToBackground:" + timeNow.innerText,
    //   function(response) {
    //     response === undefined
    //       ? alert("popup.js:return from sendMessage:undefined")
    //       : alert("popup.js:return from sendMessage:", response);
    //   }
    // );
  };
};

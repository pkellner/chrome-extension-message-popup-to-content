window.onload = function() {
  console.log(`popup.js:window.onload`);
  const timeNow = document.getElementById("timeNowId");
  timeNow.innerText = new Date().toLocaleTimeString();
  var resultsButton = document.getElementById("buttonId");
  resultsButton.onclick = () => {
    chrome.runtime.sendMessage(
      "FromPopupToBackground:" + timeNow.innerText,
      function(response) {
        console.log("popup.js:response:", response);
      }
    );
  };
};

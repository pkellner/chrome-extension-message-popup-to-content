window.onload = function() {
  console.log(`popup.js:window.onload`);
  const timeNow = document.getElementById("timeNowId");
  timeNow.innerText = new Date().toLocaleTimeString();
  var resultsButton = document.getElementById("buttonId");
  resultsButton.onclick = () => {
    chrome.runtime.sendMessage(
      "FromPopupToBackground:" + timeNow.innerText,
      function(response) {
        response === undefined
          ? alert("popup.js:return from sendMessage:undefined")
          : alert("popup.js:return from sendMessage:", response);
      }
    );
  };
};

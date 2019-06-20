console.log("content.js top...");
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  document.body.innerText = "INSERTED BY content.js to body..." + request.data;
  sendResponse(`sendResponseBackFromContent.js:${request.data}`);
});

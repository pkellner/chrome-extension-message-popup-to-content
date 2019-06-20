console.log("content.js top...");
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  document.body.innerText = "INSERTED BY content.js to body..." + request.data;
  sendResponse(`done now from content.js:request:${request.data}`);
  return true;
});

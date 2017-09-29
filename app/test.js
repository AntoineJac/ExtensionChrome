console.log("test");

var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('test2.js');
(document.head || document.documentElement).appendChild(s);

var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
   
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("Content script received: " + event.data.text);


    chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  // First, validate the message's structure
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    // Collect the necessary data 
    // (For your specific requirements `document.querySelectorAll(...)`
    //  should be equivalent to jquery's `$(...)`)
    var domInfo = event.data.text;
    console.log(event.data.text);
    // Directly respond to the sender (popup), 
    // through the specified callback */
    response(domInfo);
  }
});

  }
}, false);
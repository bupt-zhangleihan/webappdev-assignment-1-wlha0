document.getElementById('apiButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'callAPI'}, function(response) {
        document.getElementById('apiResponse').innerText = response.data;
      });
    });
  });
  
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'callAPI') {
      // 在这里调用API
      // 这里可以使用 fetch 或 XMLHttpRequest 来调用API
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
          sendResponse({data: JSON.stringify(data)});
        })
        .catch(error => {
          sendResponse({data: 'API调用失败: ' + error.message});
        });
      return true; // 异步调用，需要返回true来保持消息通道开启
    }
  });
  
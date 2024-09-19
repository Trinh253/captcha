
    var config = {
    mode: "fixed_servers",
    rules: {
      singleProxy: {
        scheme: "http",
        host: "198.46.137.184",
        port: parseInt("6388")
      },
    bypassList: [""]
    }
  };
chrome.proxy.settings.set({value: config, scope: "regular"}, function() {});
function callbackFn(details) {
    return {
        authCredentials: {
            username: "xkvsioxn",
            password: "Ah3kqu6Uwvjb"
        }
    };
}
chrome.webRequest.onAuthRequired.addListener(
        callbackFn,
        {urls: ["<all_urls>"]},
        ['blocking']
);
    
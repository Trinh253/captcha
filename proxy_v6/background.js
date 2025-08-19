// Cấu hình proxy
const proxyConfig = {
  mode: "fixed_servers",
  rules: {
    singleProxy: {
      scheme: "http",
      host: "14.241.72.150",
      port: 20027
    },
    bypassList: ["<local>"]
  }
};

// Thiết lập proxy
chrome.proxy.settings.set(
  { value: proxyConfig, scope: "regular" },
  () => {
    console.log("Đã thiết lập proxy có xác thực.");
  }
);

// Xử lý xác thực proxy
chrome.webRequest.onAuthRequired.addListener(
  (details, callback) => {
    callback({
      authCredentials: {
        username: "user20027",
        password: "SRYYF"
      }
    });
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

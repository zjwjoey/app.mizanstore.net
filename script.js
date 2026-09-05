const DOWNLOAD_CONFIG = {
  android: "http://betaqr.mizanstore.net/6pxjag48",
  ios: "https://apps.apple.com/cn/app/mizan/id6504097557"
};

document.querySelectorAll("[data-download]").forEach((button) => {
  const platform = button.dataset.download;
  button.href = DOWNLOAD_CONFIG[platform];
});

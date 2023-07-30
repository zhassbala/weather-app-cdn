const link = document.createElement("link");
link.href =
  "https://cdn.jsdelivr.net/gh/zhassbala/weather-app-cdn/index-b753b33f.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";
link.onload = () => {
  import("./index-e8206105.js");
};

document.getElementsByTagName("head")[0].appendChild(link);

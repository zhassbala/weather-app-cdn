const link = document.createElement("link");
link.href = "https://cdn.jsdelivr.net/gh/zhassbala/weather-app-cdn/index.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";
link.onload = () => {
  import("./app.min.js");
};

document.getElementsByTagName("head")[0].appendChild(link);

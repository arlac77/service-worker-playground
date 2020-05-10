if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js", { scope: "./" })
    .then(function (registration) {
      document.querySelector("#status").textContent = "succeeded";
    })
    .catch(function (error) {
      document.querySelector("#status").textContent = error;
    });
} else {
  // Der verwendete Browser unterstützt Service Worker nicht.
  var aElement = document.createElement("a");
  aElement.href =
    "http://www.chromium.org/blink/serviceworker/service-worker-faq";
  aElement.textContent = "unavailable";
  document.querySelector("#status").appendChild(aElement);
}

navigator.serviceWorker
  .register("service-worker.mjs")
  .then(registration => {
    document.querySelector("#status").textContent = "succeeded";
  })
  .catch(error => {
    document.querySelector("#status").textContent = error;
  });

fetch("hello").then(async response => {
  document.querySelector("#hello").textContent = await response.text();
});



navigator.serviceWorker
  .register("service-worker.js")
  .then(registration => {
    document.querySelector("#status").textContent = "succeeded";
  })
  .catch(error => {
    document.querySelector("#status").textContent = error;
  });


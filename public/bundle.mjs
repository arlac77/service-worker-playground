navigator.serviceWorker
  .register("service-worker.mjs", { type: "module" })
  .then(registration => {
    document.querySelector("#status").textContent = "succeeded";
  })
  .catch(error => {
    document.querySelector("#status").textContent = error;
  });

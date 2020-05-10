navigator.serviceWorker
  .register("service-worker.mjs")
  .then(registration => {
    document.querySelector("#status").textContent = "succeeded";
    sayHello();
  })
  .catch(error => {
    document.querySelector("#status").textContent = error;
  });

export async function sayHello()
{
  const response = await fetch("hello");
  document.querySelector("#hello").textContent = await response.text();
}



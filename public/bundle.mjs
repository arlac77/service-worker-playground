export async function initialize() {
  try {
    const registration = await navigator.serviceWorker.register(
      "service-worker.mjs"
    );
    document.querySelector("#status").textContent = "succeeded";
    sayHello();

    return registration;
  } catch (error) {
    document.querySelector("#status").textContent = error;
  }
}

export async function sayHello() {
  const response = await fetch("hello");
  document.querySelector("#hello").textContent = await response.text();
}

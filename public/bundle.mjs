export async function initialize() {
  try {
    const registration = await navigator.serviceWorker.register(
      "service-worker.mjs"
    );
    document.getElementById("status").textContent = "succeeded";
    sayHello();

    return registration;
  } catch (error) {
    document.getElementById("status").textContent = error;
  }
}

export async function sayHello() {
  const response = await fetch("hello");
  document.getElementById("hello").textContent = await response.text();
}

export async function fetchCache() {
  const response = await fetch("cache");
  const json = await response.json();
  console.log(json);
  return json;
}

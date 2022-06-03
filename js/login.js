import { setLocalStorage } from "./utils.js";
import { init } from "./main.js";

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const idEmpty = (username) => {
  return username === "";
}

export const handleLoginEvent = async () => {
  // login Button clicked;
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  loginButton.addEventListener("click", () => {
    console.log(idEmpty(loginInput.value));
    if (idEmpty(loginInput.value)) {
      return;
    }
    setLocalStorage(loginInput.value);
    init();
    loginInput.value = "";
  })
}

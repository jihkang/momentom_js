import { mainFocus } from "./focus.js";
import { greetingUser } from "./greeting.js";
import { modal } from "./modal.js";
import { getLocalStorage } from "./utils.js";

const loginContainer = document.querySelector("#login-container");
const mainContainer = document.querySelector("#main-container");
const greeting = document.querySelector(".greeting");

export function intervalTimer(user) {
  greetingUser(greeting, user);
}

export function handleInterval(user) {
  intervalTimer(user);
  setInterval(() => {
    intervalTimer(user)
  }, 100);
}

export const toggleScreen = () => {
  loginContainer.classList.toggle("hidden");
  mainContainer.classList.toggle("hidden");
}

export function init() {
  const user = window.localStorage.key(0);
  const userData = getLocalStorage(user);

  toggleScreen();
  mainFocus(user, userData);
  modal(user);
  handleInterval(user);
}
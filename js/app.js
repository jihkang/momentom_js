import { handleLoginEvent } from "./login.js";
import { init } from "./main.js";

function main() {
  const user = window.localStorage.key(0);
  if (user) {
    init()
  } else {
    handleLoginEvent();
  }
}

window.onload = () => {
  main();
}
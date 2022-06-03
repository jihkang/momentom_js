
import { todolist } from "./todo.js";

export const modal = (user) => {
  const modals = document.querySelector(".modal-window");
  const header = modals.querySelector(".title");

  todolist(user);
  header.addEventListener("click", () => {
    modals.classList.remove("hide");
    modals.querySelectorAll("div").forEach(item => {
      item.classList.remove('hidden');
    });
  })
  modals.querySelector(".close-area").addEventListener("click", () => {
    modals.classList.add("hide");
    modals.querySelectorAll("div").forEach(item => {
      item.classList.add('hidden');
      header.classList.remove("hidden");
    });
  })
  console.log(modals);
}
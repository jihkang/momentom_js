import { getLocalStorage, setLocalStorage } from "./utils.js";

const render = (data, index) => {
  return `
    <li class="${index}">
      <span>${data}</span>
      <button class="delete-btn">X</button>
    </li>
  `;
}

const renderList = (todo) => {
  const ul = document.querySelector(".lists");
  ul.innerHTML = todo.map((item, i) => render(item, i)).join('');
}

const removeEventHandler = (user, focus, focusStable, todo) => {
  const ul = document.querySelector(".lists");
  ul.addEventListener("click", (e,) => {
    if (e.target.tagName === "BUTTON") {
      const removeIndex = e.target.closest("li").className;
      todo.splice(removeIndex, 1);
      setLocalStorage(user, {
        focus: focus,
        focusStable: focusStable,
        todo: todo
      });
      renderList(todo);
    }
  });
}

export const todolist = (user) => {
  const input = document.querySelector(".todo");
  const { focus, focusStable, todo } = getLocalStorage(user);

  if (todo) {
    renderList(todo);
    removeEventHandler(user, focus, focusStable, todo);
  }
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const list = input.value;
      todo.push(list);
      setLocalStorage(
        user, {
        focus: focus,
        focusStable: focusStable,
        todo: todo
      });
      renderList(todo);
      input.value = "";
    }
  })


}
import { getLocalStorage, setLocalStorage, toggleDocHidden } from "./utils.js";

const render = (focus = "", focusStable) => {
  if (focus === "") {
    return ``;
  } else {
    return `
      <li class="main-focus-list">
        <span class="${focusStable === true ? "done" : ""}">${focus}</span>
        <button class="done-btn"> Y </button>
        <button class="remove-btn"> X </button>
      </li>
    `;
  }
}

const renderList = (data, stable) => {
  const list = document.querySelector(".mainfocus-list");
  list.innerHTML = render(data, stable);
}

export const mainFocus = (user, data) => {
  const focusContainer = document.querySelector("#mainfocus-container");
  const focus = focusContainer.querySelector(".mainfocus-input");
  const focusData = data.focus;
  const { focusStable, todo } = getLocalStorage(user);

  if (focusData) {
    toggleDocHidden(focus);
    renderList(focusData, focusStable);
  }
  focusContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      if (e.target.classList.contains("done-btn")) {
        const { focus, focusStable } = getLocalStorage(user);
        setLocalStorage(user, {
          focus: focus,
          focusStable: !focusStable,
          todo: todo
        })
        renderList(focus, !focusStable);
      } else {
        setLocalStorage(user, {
          focus: "",
          focusStable: false,
          todo: todo
        });
        toggleDocHidden(focus);
        renderList();
      }
    }
  });
  focus.addEventListener("keypress", (e) => {
    if (focus.value === "") {
      return;
    }
    if (e.key === "Enter") {
      setLocalStorage(user, {
        focus: focus.value,
        focusStable: false,
        todo: todo
      });
      toggleDocHidden(focus);
      renderList(focus.value);
      focus.value = "";
    }
  });
}
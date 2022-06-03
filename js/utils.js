
const isJson = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const toggleDocHidden = (doc) => {
  doc.classList.toggle("hidden");
}

export const setLocalStorage = (id, data = { focus: "", focusStable: false, todo: [] },) => {
  window.localStorage.setItem(id, JSON.stringify(data));
}

export const getLocalStorage = (id) => {
  const item = localStorage.getItem(id);
  if (isJson(item))
    return JSON.parse(item);
  return { focus: "", focusStable: false, todo: [] };
}

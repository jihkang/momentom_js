
const clock = document.querySelector(".clock");

export const getCurrentTime = () => {
  const time = new Date();
  clock.innerText = `${String(time.getHours()).padStart(2, 0)} ${String(time.getMinutes()).padStart(2, 0)}`
  return { hour: time.getHours(), minute: time.getMinutes() }
}


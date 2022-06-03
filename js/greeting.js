import { getCurrentTime } from "./clock.js";

const greetingToTime = (time) => {
  if (time >= 6 && time < 12) {
    return 'Good morning';
  } else if (time >= 12 && time < 17) {
    return 'Good afternoon';
  } else if (time >= 17 && time < 21) {
    return 'Good evening';
  } else {
    return 'Good night';
  }
}

export const greetingUser = (doc, username) => {
  const { hour } = getCurrentTime();
  doc.innerText = `${greetingToTime(hour)} ${username}`;

}
import { DateTime } from "./luxon.js";

const displayDate = document.querySelector('[data-time-display]');
const getTime = () => {
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  displayDate.textContent = date;
};
setInterval(getTime, 1000);
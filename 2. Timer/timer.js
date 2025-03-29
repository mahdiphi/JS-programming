let start = false;
let second, minute, hour;
let secondTimer;

document.getElementById("start-btn").addEventListener("click", () => {
  if (!start) {
    start = true;

    if (second === undefined || minute === undefined || hour === undefined) {
      second = parseInt(document.getElementById("second").value) || 0;
      minute = parseInt(document.getElementById("minute").value) || 0;
      hour = parseInt(document.getElementById("hour").value) || 0;
    }

    document.getElementById("timer-second").innerHTML = second;
    document.getElementById("timer-minute").innerHTML = minute;
    document.getElementById("timer-hour").innerHTML = hour;
    clearInterval(secondTimer);

    secondTimer = setInterval(() => {
      if (!start) return clearInterval(secondTimer);

      if (second > 0) {
        second--;
      } else if (minute > 0) {
        second = 59;
        minute--;
      } else if (hour > 0) {
        second = 59;
        minute = 59;
        hour--;
      } else {
        clearInterval(secondTimer);
        return;
      }

      document.getElementById("timer-second").innerHTML = second;
      document.getElementById("timer-minute").innerHTML = minute;
      document.getElementById("timer-hour").innerHTML = hour;
    }, 1000);
  }
});

document.getElementById("stop-btn").addEventListener("click", () => {
  start = false;
  clearInterval(secondTimer);
});

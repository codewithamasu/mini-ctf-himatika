let timeLeft = 300;
let timerInterval = null;

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;

    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;

    const timerEl = document.getElementById("timer");
    if (timerEl) {
      timerEl.innerText =
        `⏳ ${min}:${sec.toString().padStart(2, "0")}`;
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Waktu habis!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  const timerEl = document.getElementById("timer");
  if (timerEl) {
    timerEl.style.display = "none";
  }
}

window.onload = startTimer;

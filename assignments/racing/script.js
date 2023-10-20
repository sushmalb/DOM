const countDown = document.querySelector("#count-down");
const startBtn = document.querySelector("#start-btn");
const restBtn = document.querySelector("#reset-btn");
let count = 5;

function startTimer() {
  countDown.textContent = count;
  restBtn.disabled = true;
  startBtn.disabled = true;
  count--;
  countDown.textContent = count;
  if (count === 0) {
    clearInterval(intervalID);
    countDown.textContent = "GO";
    countDown.classList.add("go");
    restBtn.disabled = false;
    startBtn.disabled = true;
  }
}

let intervalID;
startBtn.addEventListener("click", function () {
  startTimer();
  intervalID = setInterval(startTimer, 1000);
});

restBtn.addEventListener("click", function () {
  clearInterval(intervalID);
  count = 5;
  countDown.textContent = "5";
  restBtn.disabled = true;
  startBtn.disabled = false;
});

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const showModals = document.querySelectorAll(".show-modal");
console.log(showModals);

for (let i = 0; i < showModals.length; i++)
  showModals[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
  });

closeBtn.addEventListener("click", function (e) {
  modal.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
  }
});

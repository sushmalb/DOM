// Event Listeners / click
const btn2 = document.querySelector("#btn-2");

btn2.addEventListener("click", function alertBtn() {
  alert("You are clicking button two!! ");
});

// MouseOver
const div3 = document.querySelector(".box-3");
const btn3 = document.querySelector("#btn-3");

function bkGroundColor() {
  div3.style.backgroundColor = "red";
}

function resetBackgroundColor() {
  div3.style.backgroundColor = ""; // This sets it back to the default background color
}

div3.addEventListener("mouseover", bkGroundColor);
div3.addEventListener("mouseout", resetBackgroundColor);

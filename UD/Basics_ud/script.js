console.log(document.querySelector("#ul-1").textContent);
console.log(document.querySelector("#ul-1").innerHTML);
console.log(document.querySelector("#ul-1").innerText);

document.querySelector(".head-1").textContent = "New to do list";
console.log(document.querySelector(".head-1").textContent);

//document.querySelector("#input-1").value

// document.querySelector(".click").addEventListener("click", function () {
//   document.querySelector("#input-1").value = 23;
// });

//event listeners are JavaScript functions that allow for more flexibility and modularity in handling events.
function changeVal() {
  document.querySelector("#input-1").value = 23;
}

//Manipulating CSS styles
document.querySelector("body").style.backgroundColor = "#4286f4";

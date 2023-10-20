// let el2 = document.getElementById("elementOverloading");
// let newItem = document.createElement("h2");
// newItem.innerText = "Awesome Content"; // <h2>Awesome Content</h2>
// console.log(newItem);
let btn = document.querySelector("#btn-add");
let inputEl = document.querySelector("#input");
btn.addEventListener("click", addItem);
let p = document.createElement("p");

const taskComplete = document.querySelector("#taskComplete");
var completedTaskCount = 0;

function addItem() {
  let inputVal = inputEl.value;
  let ul = document.createElement("ul");
  let li = document.createElement("li");

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  ul.appendChild(li);
  ul.appendChild(removeBtn);
  li.textContent = inputVal;

  document.body.appendChild(ul);

  removeBtn.addEventListener("click", removeItem);

  completedTaskCount++;
  taskComplete.textContent = completedTaskCount;

  inputEl.value = "";
}

function removeItem() {
  let ul = document.querySelector("ul");
  // let li = document.querySelector("li");
  ul = this.parentElement;
  ul.remove();
  completedTaskCount--;
  taskComplete.textContent = completedTaskCount;
  // removeBtn.remove();
}

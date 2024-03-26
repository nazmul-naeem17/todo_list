const form = document.querySelector("form");
const input = document.querySelector(".todo-inputs");
const ul = document.querySelector(".todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputVal = input.value;
  const li = document.createElement("li");
  li.textContent = inputVal;
  if (inputVal) {
    ul.appendChild(li);
    input.value = "";
  }
});

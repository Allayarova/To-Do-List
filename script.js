"use script";

const form = document.getElementById("new-task-form");

const input = document.getElementById("new-task-input");

const list_el = document.querySelector(".task");

const todobutton = document.querySelector(".btn");

const actions = document.querySelector(".actions");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value;
  
  if (!task) {
    alert("Please fill out the task");
    return;
  }

  let paragraph = document.createElement("div");
  paragraph.innerText = input.value;
  input.value = "";
  actions.appendChild(paragraph);
  paragraph.style.fontFamily = "cursive";

  paragraph.addEventListener("click", () => {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", () => {
    actions.removeChild(paragraph);
  });
});

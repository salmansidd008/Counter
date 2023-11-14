const countEl = document.querySelector("#count-el");
const saveEl = document.querySelector("#save-el");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let savedEntries = count + " - ";
  saveEl.textContent += savedEntries;
  countEl.textContent = 0;
  count = 0;
}

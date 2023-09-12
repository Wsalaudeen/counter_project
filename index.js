const textTitle = document.querySelector("#title");
const btnDecrement = document.querySelector("#decrement");
const btnReset = document.querySelector("#reset");
const btnIncrement = document.querySelector("#increment");
//counter value
let value = 0;
// event listener for increment
btnIncrement.addEventListener("click", () => {
  // modify in place
  value += 1;
  textTitle.textContent = value;
});
// event listener for reset
btnReset.addEventListener("click", () => {
  value = 0;
  textTitle.textContent = value;
});
// event listener for decrement
btnDecrement.addEventListener("click", () => {
  // modify in place
  // value -= 1;
  // textTitle.textContent = value;
  if (value > 0) {
    value -= 1;
    textTitle.textContent = value;
  }
});

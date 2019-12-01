import "@fortawesome/fontawesome-free/js/all";
import "bootstrap";
//Styles
import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//0)Document loaded, get list and save to variable
//1) Add event listener
//2)Find input field
//3)Get value
//4)Get Ul
//5)Create new element (checkbox+text+icon)
let impotantAndUrgent;
let impotantAndNoUrgent;
let notimpotantAndUrgent;
let notimpotantAndNoUrgent;

(function() {
  impotantAndUrgent = document.getElementById("impotantAndUrgent");
  impotantAndNoUrgent = document.getElementById("impotantAndNoUrgent");
  notimpotantAndUrgent = document.getElementById("notimpotantAndUrgent");
  notimpotantAndNoUrgent = document.getElementById("notimpotantAndNoUrgent");
  const quadrants = [
    impotantAndUrgent,
    impotantAndNoUrgent,
    notimpotantAndUrgent,
    notimpotantAndNoUrgent
  ];
  quadrants.forEach(quadrant => {
    const button = quadrant.getElementsByTagName("button")[0];
    button.addEventListener("click", () => {
      addNewTask(quadrant);
    });
    // console.log(button);
  });
  // console.log(quadrants);
  // console.log(impotantAndNoUrgent);
  // console.log(notimpotantAndUrgent);
  // console.log(notimpotantAndNoUrgent);
})();
function addNewTask(quadrant) {
  console.log(quadrant);
  const value = getInputValue(quadrant);
  // console.log(value);
  if (value) {
    addNewItem(value, quadrant);
  } else {
    alert("Please add value to input");
  }
}
function getInputValue(quadrant) {
  return quadrant.getElementsByClassName("new-task-input")[0].value;
  // console.log(value);
  // return value;
}
function addNewItem(value, quadrant) {
  const list = quadrant.getElementsByClassName("todoList")[0];
  const newLi = getWithText(value);
  list.appendChild(newLi);
  console.log(list);
}
function getWithText(value) {
  const newListItem = document.createElement("li");
  const checkbox = getCheckBox();
  const text = document.createTextNode(" " + value);
  const space = document.createTextNode(" ");
  const icon = getDeleteIcon();
  newListItem.appendChild(checkbox);
  newListItem.appendChild(text);
  newListItem.appendChild(space);
  newListItem.appendChild(icon);
  return newListItem;
}
function getCheckBox() {
  const input = document.createElement("input");
  input.type = "checkbox";
  return input;
}
function getDeleteIcon() {
  const i = document.createElement("i");
  i.className = "fas fa-trash";
  return i;
}

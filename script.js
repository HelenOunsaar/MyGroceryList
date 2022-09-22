// Create a "close" button and append it to each list item
function greateCloseButton() {
  const myGroceryList = document.getElementsByTagName("LI");
  for (i = 0; i < myGroceryList.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myGroceryList[i].appendChild(span);
  }
}

// Click on a close button to hide the current list item
function delateItam() {
  const close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
      saveToLocalStorage();
    }
  }
}

// Add a "checked" symbol when clicking on a list item
function checkedItem() {
  const list = document.querySelector('ul');
  list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
  saveToLocalStorage();
  checkItems();
}

// Create a new list item when clicking on the Enter key
const input = document.getElementById("myInput");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    console.log("Enter");
    newElement();
  }
});
// Save items 
function saveToLocalStorage() {
  const list = document.getElementById("myUL")
  localStorage.setItem('myList', list.innerHTML);
}
// Remembers add items
function getFromLocalStorage() {
  const list = document.getElementById("myUL")
  const listFromStorage = localStorage.getItem('myList');
  if (listFromStorage) {
    list.innerHTML = listFromStorage;
  }
}

function checkItems(){
  greateCloseButton();
  delateItam();
  checkedItem();
}

function runOnLoad() {
  getFromLocalStorage();
  checkItems();
}

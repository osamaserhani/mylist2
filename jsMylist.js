var NewItem = document.getElementById("new-item");
var add = document.getElementById("add-btn");
var list = document.getElementById("my-list");
var deleteAll = document.getElementById("delete-all-btn");

function addList() {
  var newText = document.createTextNode(NewItem.value);
  var LiElements = document.createElement("li");
  LiElements.appendChild(newText);
  list.appendChild(LiElements);
  addCloseBtn(LiElements);
}

function addCloseBtn(liElement) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.appendChild(txt);
  span.className = "close";
  span.onclick = function() {
    var liItem = this.parentElement;
    liItem.parentElement.removeChild(liItem);
  }
  liElement.appendChild(span);
}
function deleteLists() {
  var liItems = list.children;
  var i;
  var len = liItems.length;
  for (i = 0; i <len; i++) {
    liItems[0].parentElement.removeChild(liItems[0]);

  }
}

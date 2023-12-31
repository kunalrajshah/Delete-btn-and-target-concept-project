var btn = document.querySelector("#btn");
var itemlist = document.querySelector("#items");
var itemall = document.querySelectorAll("#items li");

// Apply function On Submit button
btn.addEventListener("click", additem);

//Add item
function additem(e) {
  e.preventDefault();

  //Get input Data
  var input = document.getElementById("item").value;
  // For Description Box
  var desc = document.querySelector("#description").value;
  // create New list for input
  var li = document.createElement("li");
  if (input === "") alert("Add item for add");
  else {
    li.classList.add("list-group-item");
    li.appendChild(document.createTextNode(input)); // Append input into created element li
    li.appendChild(document.createTextNode(desc)); // Append Description into created element li

    //Add Delete Button
    var delbtn = document.createElement("button");
    delbtn.className = "btn btn-danger btn-sm float-right delete"; // space in class name so use 'className'
    delbtn.appendChild(document.createTextNode("x"));
    li.appendChild(delbtn);
    //  Add input into list
    itemlist.appendChild(li);

    // Add Edit Button
    var edit = document.createElement("button");
    edit.className = "btn btn-sm float-right edit";
    edit.appendChild(document.createTextNode("Edit"));
    li.appendChild(edit);
    //  Add Edit Button list
    itemlist.appendChild(li);

    // Add function on edit button
    edit.addEventListener("click", editItem);

    function editItem(e) {
      var listItem = e.target.parentElement;
      var itemTextElement = listItem.firstChild;
      var descriptionTextElement = itemTextElement.nextSibling; // Assuming the description text is the next sibling

      var itemText = itemTextElement.textContent;
      var descriptionText = descriptionTextElement.textContent;

      var newItemText = prompt("Edit the item:", itemText);
      var newDescriptionText = prompt("Edit the description:", descriptionText);

      if (newItemText !== null && newItemText !== "") {
        itemTextElement.textContent = newItemText;
      }

      if (newDescriptionText !== null) {
        descriptionTextElement.textContent = newDescriptionText;
      }
    }
  }
}

// Remove Item on click on Del button

itemlist.addEventListener("click", removeitem);

function removeitem(e) {
  if (e.target.classList.contains("delete")) {
    // if the clicked element (e.target) has a CSS class of "delete" using the    classList.contains() method.
    if (confirm("Are you Sure?")) {
      var li = e.target.parentElement;
      itemlist.removeChild(li);
    } //The e.target is used to determine which specific delete button was clicked within the itemlist, allowing the code to remove the associated item from the list.
  }
}

// Filter Event (on search items)
var filter = document.getElementById("filter");
filter.addEventListener("keyup", filteritems);

function filteritems(e) {
  var text = e.target.value.toLowerCase(); // Convert text into Lowercase
  //Get lists of item
  var items = itemlist.getElementsByTagName("li"); // Return collection
  //Convert to an array
  Array.from(items).forEach(function (item) {
    var itemname = item.firstChild.textContent; // use firstchild becaue there is two element item and button'x'
    // here itemname store all items.
    if (itemname.toLowerCase().includes(text)) {
      // check input 'text' is present in 'itemname' or not
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Add Edit Button beside Delete Button
for (var i = 0; i < itemall.length; i++) {
  var edit = document.createElement("button");
  edit.className = "btn btn-sm float-right edit";
  edit.appendChild(document.createTextNode("Edit"));
  itemall[i].appendChild(edit);

  //Add Function on Edit Button
  edit.addEventListener("click", edittext);

  function edittext(e) {
    var text = e.target.parentElement;
    var textcont=text.firstChild.textContent;
    var newtext=prompt('Enter New text:',textcont);

    if (newtext !== null && newtext !== "") {
      text.firstChild.textContent = newtext;
    }
  }
}

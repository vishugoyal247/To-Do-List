

// Create a "close" button and append it to each list item

var etin;

var myNodelist = document.getElementsByTagName("li");

for (etin = 0; etin < myNodelist.length; etin++) {

  var span = document.createElement("SPAN");

  var txt = document.createTextNode("\u00D7");
  span.className = "close";

  span.appendChild(txt);

  myNodelist[etin].appendChild(span);

}



// Click on a close button to hide the current list item

var close = document.getElementsByClassName("close");

var j;

for (j = 0; j < close.length; j++) {

  close[j].onclick = function() {
    var div = this.parentElement;

    div.style.display = "none";

  }

}



// Add a "checked" symbol when clicking on a list item

var listName = document.querySelector('ul');

listName.addEventListener('click', function(ev) {

  if (ev.target.tagName === 'LI') {

    ev.target.classList.toggle('checked');

  }
}, false);





// Create a new list item when clicking on the "Add" button
function newElement() {

  var liName_var = document.createElement("li");

  var inputValue = document.getElementById("myInput").value;

  var t = document.createTextNode(inputValue);

  liName_var.appendChild(t);

  if (inputValue === '') {

    alert("You must write something!");

  } else {

    document.getElementById("myUL").appendChild(liName_var);
  }

  document.getElementById("myInput").value = "";


  
  var span = document.createElement("SPAN");
  
  var txt = document.createTextNode("\u00D7");
  
  span.className = "close";
  
  span.appendChild(txt);
  
  liName_var.appendChild(span);
  
  
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
  
      var div = this.parentElement;
  
      div.style.display = "none";
  
    }
  
  
  }
}
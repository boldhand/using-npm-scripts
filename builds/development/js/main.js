'use strict';

/* ==============================================================
// in search get from json to list
============================================================== */
// Get the Data Function
function getData(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var data = JSON.parse(xmlhttp.responseText);
      callback(data);
    }
  };
  xmlhttp.open('GET', url, true);
  xmlhttp.send();
}

// On Search
var search = document.getElementById("search");
search.addEventListener('keyup', function (event) {
  var searchField = document.getElementById("search").value;
  var myExp = new RegExp(searchField, "i");
  /* clearing the results event if user press Backspace */
  if (!this.value.trim()) {
    clearSuggestions();
    return;
  }
  // Output data in List items
  getData('https://restcountries.eu/rest/v1', function (data) {
    var output = '';
    for (var i = 0; i < data.length; i++) {
      var item = data[i];
      if (item.name.search(myExp) != -1) {
        output += '<li class="search__suggestion">' + item.name + '</li>';
      }
    }
    document.getElementById("suggestions").innerHTML = output;
  });
});
/* ==============================================================
//Add item to history on click an item in the sugested items
============================================================== */
var suggestions = document.getElementById('suggestions');
suggestions.addEventListener('click', function (event) {
  if (event.target && event.target.nodeName == 'LI') {
    var searchString = event.target.innerText;
    createSearchResult(searchString);
    clearSuggestions();
    emptyInput();
  }
});
/* ==============================================================
// EVENTS: Add item to history on Enter on the search input fields
============================================================== */
var search = document.getElementById('search');
search.addEventListener('keydown', function (event) {
  if (event.keyCode == 13) {
    //Enter Key
    var searchString = search.value;

    if (search.value) {
      // if not empty
      createSearchResult(searchString);
      clearSuggestions();
      emptyInput();
    }
  }
});
/* ==============================================================
//creating the list history
============================================================== */
function createSearchResult(searchString) {
  var ul = document.getElementById('history');
  var li = document.createElement('li');
  var h2 = document.createElement('h2');
  h2.innerText = searchString;
  li.appendChild(h2);
  li.appendChild(dateStamp());
  li.appendChild(createRemoveButton());
  ul.appendChild(li);
}
/* ==============================================================
//Clear sugestions
============================================================== */
function clearSuggestions() {
  var suggestions = document.getElementById('suggestions');
  while (suggestions.firstChild) {
    suggestions.removeChild(suggestions.firstChild);
  }
}
/* ==============================================================
//Clear Input
============================================================== */
function emptyInput() {
  var search = document.getElementById('search');
  search.value = '';
}
/* ==============================================================
//Timestamp string
============================================================== */
function timeStampHistory() {
  var now = new Date();
  var day = (now.getDate() < 10 ? '0' : '') + now.getDate();
  var month = (now.getMonth() + 1 < 10 ? '0' : '') + (now.getMonth() + 1);
  var year = now.getFullYear();
  var hours = (now.getHours() < 10 ? '0' : '') + now.getHours();
  var minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
}
function dateStamp() {
  var stamp = document.createElement('time');
  stamp.innerText = timeStampHistory();
  return stamp;
}
/* ==============================================================
//Remove button and its Functionality
============================================================== */
function createRemoveButton() {
  var button = document.createElement('button');
  button.className = 'remove-item';
  button.addEventListener('click', function (event) {
    var removeItem = event.target.parentNode;
    removeItem.parentNode.removeChild(removeItem);
  });
  return button;
};

//# sourceMappingURL=main.js.map
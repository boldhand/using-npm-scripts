/* ==============================================================
// in search get from json to list
============================================================== */
//Get the Data Function
function getData(url, callback) {

  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          try {
              var data = JSON.parse(xmlhttp.responseText);
          } catch(err) {
              console.log(err.message + ' in ' + xmlhttp.responseText);
              return;
          }
          callback(data);
      }
  };

  xmlhttp.open('GET', url, true);
  xmlhttp.send();

}
// Store the data in List items
getData('https://restcountries.eu/rest/v1', function(data) {

  var searchValue = document.getElementById("search").value;
  var myExp = new RegExp(searchValue, "i");
  var html = '';

  for (var i=0; i < data.length; i++) {
      // if ((data.name = ) || (data.capital = )) {
        html += '<li>' + data[i].name + '</li>';
      // }
  }

  document.getElementById('suggestions').innerHTML = html;

});




// var search = document.getElementById("search");
// search.addEventListener('keyup', function(event){

// 	//clear results if the value is blank or starts with space
// 	if (!this.value.trim()) {
// 		clearUpdate();
// 		return;
// 	}

// 	var searchField = document.getElementById("search").value;
// 	var myExp = new RegExp(searchField, "i");

// 	function fetchfile(path, callback) {
//     var httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
// 			var data = JSON.parse(this.responseText);
// 			if (callback) callback(data);
//         }
//     };
//     httpRequest.open('GET', path, true);
//     httpRequest.send();
// 	}
// 	fetchfile('https://restcountries.eu/rest/v1', function(data){
// 		var output = '<ul id="searchresults">';
// 		$.each(data, function(key, val) {
// 			if ((val.name.search(myExp) != -1) || (val.capital.search(myExp) != -1)) {
// 				output += '<li tabindex="1">';
// 				output += val.name + ', ' + val.capital;
// 				output += '</li>';
// 			}
// 		});
// 		output += '</ul>';
// 		$('#update').html(output);
// 	});
// });
/* ==============================================================
//Add item to history on click an item in the sugested items
============================================================== */
var update = document.getElementById('update');
update.addEventListener('click', function(event) {
	if(event.target && event.target.nodeName == 'LI') {
		var searchString = event.target.innerText;
		createSearchResult(searchString);
		clearUpdate();
		emptyInput();
	}
});
/* ==============================================================
// EVENTS: Add item to history on Enter on the search input fields
============================================================== */
var search = document.getElementById('search');
search.addEventListener('keydown', function(event){
	if(event.keyCode == 13){ //Enter Key
		var searchString = search.value;

		if (search.value) { // if not empty
			createSearchResult(searchString);
			clearUpdate();
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
function clearUpdate() {
	var update = document.getElementById('update');
	while (update.firstChild) update.removeChild(update.firstChild);
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
    button.addEventListener('click', function(event) {
        event.target.parentNode.remove(this);
    });
    return button;
};


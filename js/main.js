//Project 2
/*
By Simon Miller
email: simonmill@gmail.com
*/

// ** ------------> Problem: No pagination when page loads
// ** ------------> Solution: Add pagination


//calculate how many page-links are needed
var numStudents = document.getElementsByClassName('student-list')[0].children.length;	//number of students
												
//number of pagination links needed
var numLinks = function(numberOfStudents) {
	var links = Math.ceil(numberOfStudents / 10);
	return links;
};



//This function dynamically adds pagination
var createPagination = function() {		//start of createPagination function

	//creates a div that has class='pagination' with an ordered list inside and appends that to a div with class='page' 
	var selectElem = document.getElementsByClassName('page');
	var div = selectElem[0].appendChild(document.createElement('div'));
		div.classList.add('pagination');
	var ol = div.appendChild(document.createElement('ol'));
	ol.setAttribute('id', 'orderedListId');

	//append ol to body

};		//end of createPagination() function


var createPaginationLinks = function(numberOfLinks) {
	//clear if there are any pagination links already
	removePaginationLinks();
	//cycles through depending on how many students there are & creates list items with links for pagination
	for (var i = 0; i < numLinks(numberOfLinks); i++) { //start of for loop
		var ol = document.getElementById('orderedListId');
		//create list items
		var li = ol.appendChild(document.createElement('li'));

		//create pagination links
		var a = li.appendChild(document.createElement('a'));
		a.href = '#';
		a.textContent = i + 1;
		
		//eventlistener that calculates which students to show when pagination link is pressed
		a.addEventListener('click', calculateShowStudents.bind(null, a.textContent));

		//eventlistener that makes the link pressed become active (and all others inactive)
		a.addEventListener('click', removeClassAddClass);
	} //end for loop
};

//remove pagination links
var removePaginationLinks = function() {
	var list = document.getElementById('orderedListId');

	while (list.hasChildNodes()) {   
    list.removeChild(list.firstChild);
	}
};

//This function selects the links inside the class 'pagination', then removes the class 'active' from all of them. 
//It then adds the class 'active' to the one selected (used createPagination())
var removeClassAddClass = function() {										//start removeClassAddClass function
    
	var div = document.getElementsByClassName('pagination');						//selects the div with the class 'pagination' and stores it in the var div
	var a = div[0].getElementsByTagName('a');										//selects the links inside the div variable and stores it in the var a

	for (var i = 0; i < numLinks(numStudents); i++) {											//cycles through the same number of times as the number of pagination links at the bottom of the page
   		a[i].classList.remove('active');											//cycles through the links and removes class='active' 
	}

	this.classList.add('active');													//whichever link is selected - add class='active'
};																					//end removeClassAddClass function


//This function calculates which students should be shown
var calculateShowStudents = function(textContent) { 
	var value = parseInt(textContent); 
	
	//Calculate top number
	var topNumber = (value * 10);
	
	//Calculate bottom number
	var bottomNumber = topNumber - 10;

	//cycle through students and add class 'hideStudents' to students not wanting to be shown
	for (var i = 0; i < numStudents; i++){
		//show students when bottom number <=  x  <  topnumber
		if (bottomNumber <= i && i < topNumber) {
			document.getElementsByClassName('student-item cf')[i].classList.remove('hideStudents');
		} else {
			document.getElementsByClassName('student-item cf')[i].classList.add('hideStudents');
		} 
	}
};



//This function creates a search bar and styles it to the top right
var createSearchBar = function() {		//start of createSearchBar function

	//create search bar
	var editInput = document.createElement('INPUT');
	editInput.setAttribute('type', 'search');
	editInput.setAttribute('id', 'searchBarId');
	editInput.addEventListener('search', getSearchResults);
	editInput.addEventListener('keyup', function(e) {
		if ((e.keyCode || e.which) == 27) {
			calculateShowStudents(1);
		}
	});

	//append search bar
	document.getElementsByClassName('page-header cf')[0].appendChild(editInput);
	
	//style search bar to top right
	editInput.parentNode.style.position = 'relative';
	editInput.style.position = 'absolute';
	editInput.style.right = '0px';
	editInput.placeholder = 'Search for students';
};		//end of createSearchBar function																			


//This function gets the input value when a user searches in the search bar
var getSearchResults = function() {
	var input = document.getElementById('searchBarId').value;
	input = input.toLowerCase();
	input = input.trim(); //remove spaces from beginning and end of search
	var counter = 0;

	//do something with null or search == ''

	//cycle through each list item
	for (var i = 0; i < numStudents; i++) {
		var test = document.getElementsByClassName('student-item cf')[i];
		var value = test.getElementsByTagName('H3')[0].textContent;
		
		if (value.indexOf(input) > -1) {
			document.getElementsByClassName('student-item cf')[i].classList.remove('hideStudents');
			counter += 1;
		} else {
			document.getElementsByClassName('student-item cf')[i].classList.add('hideStudents');
		}
	} 		// end of outer for loop
	createPaginationLinks(counter);

	//call createPagination

	//when focus is in search box and they press esc or click x - call calculateShowStudents(1)

};		//end of getSearchResults


//function to start everything
var init = function() {
	createPagination();
	createPaginationLinks(numStudents);
	calculateShowStudents(1);
	createSearchBar();
};

//create the pagination links
	
/*
	//when the page loads - the first 10 students will be shown (not only when you click link 1)
	var pagination = document.getElementsByClassName('pagination');
	var link = pagination[0].getElementsByTagName('a');
	link[0].classList.add('active');
*/


//Initialise
init();


//make search results paginate if over 10 users found
//do something when someone presses X in search feature
//do something when results = 0 'Try searching for another name'
/*
function search(event) {

   // Get all results that match input from the complete list

   // run the pagination function with the results array and page = 1

   // return nothing
}

function pagination(list, page) {

   // Show range of ten items on specified page
   
   // Also have to create new page links, but lets think about that elsewhere

   // return nothing
}

function createLinks(list) {

   //calculate total pages - this really should be in paginate


   //create properly numbered anchor elements

   //bind click handler to anchor elements

   //give class 'active' to page anchor element 1

}

*/
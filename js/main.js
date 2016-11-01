//Project 2
/*
By Simon Miller
email: simonmill@gmail.com
*/

// ** ------------> Problem: No pagination when page loads
// ** ------------> Solution: Add pagination


//calculate how many page-links are needed
var numStudents = document.getElementsByClassName('student-list')[0].children.length;	//number of students
var numLinks = Math.ceil(numStudents / 10);												//number of pagination links needed

//This function selects the links inside the class 'pagination', then removes the class 'active' from all of them. 
//It then adds the class 'active' to the one selected (used createPagination())
var removeClassAddClass = function() {												//start removeClassAddClass function
    
	var div = document.getElementsByClassName('pagination');						//selects the div with the class 'pagination' and stores it in the var div
	var a = div[0].getElementsByTagName('a');										//selects the links inside the div variable and stores it in the var a

	for (var i = 0; i < numLinks; i++) {											//cycles through the same number of times as the number of pagination links at the bottom of the page
   		a[i].classList.remove('active');											//cycles through the links and removes class='active' 
	}

	this.classList.add('active');													//whichever link is selected - add class='active'
}																					//end removeClassAddClass function


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
}


//This function dynamically adds pagination
var createPagination = function() {		//start of createPagination function

	//creates a div that has class='pagination' with an ordered list inside and appends that to a div with class='page' 
	var selectElem = document.getElementsByClassName('page');
	var div = selectElem[0].appendChild(document.createElement('div'));
		div.classList.add('pagination');
	var ol = div.appendChild(document.createElement('ol'));


	//cycles through depending on how many students there are & creates list items with links for pagination
	for (var i = 0; i < numLinks; i++) { //start of for loop
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

	//when the page loads - the first 10 students will be shown (not only when you click link 1)
	var pagination = document.getElementsByClassName('pagination');
	var link = pagination[0].getElementsByTagName('a');
	link[0].classList.add('active');

}		//end of createPagination() function


//This function creates a search bar and styles it to the top right
var createSearchBar = function() {		//start of createSearchBar function

	//create search bar
	var editInput = document.createElement('INPUT');
	editInput.setAttribute('type', 'search');
	editInput.setAttribute('id', 'searchBarId');
	editInput.addEventListener('search', getSearchResults);

	//append search bar
	document.getElementsByClassName('page-header cf')[0].appendChild(editInput);
	
	//style search bar to top right
	editInput.parentNode.style.position = 'relative';
	editInput.style.position = 'absolute';
	editInput.style.right = '0px';
	editInput.placeholder = 'Search For a Student'
}		//end of createSearchBar function																			


//This function gets the input value when a user searches in the search bar
var getSearchResults = function() {
	var input = document.getElementById('searchBarId').value;
	input = input.toLowerCase();
	input = input.trim();
	

	//do something with null or search == ''

	//cycle through each list item
	for (var i = 0; i < numStudents; i++) {

		var test = document.getElementsByClassName('student-item cf')[i];
		var value = test.getElementsByTagName('H3')[0].textContent;
		
		if (value.indexOf(input) > -1) {
			document.getElementsByClassName('student-item cf')[i].classList.remove('hideStudents');
		} else {
			document.getElementsByClassName('student-item cf')[i].classList.add('hideStudents');
		}
	} 		// end of outer for loop
	//call createPagination
}		//end of getSearchResults


//function to start everything
var init = function() {
	createPagination();
	calculateShowStudents(1);
	createSearchBar();
}

//Initialise
init();


//make search results paginate if over 10 users found
//do something when someone presses X in search feature
//do something when results = 0 'Try searching for another name'
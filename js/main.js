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

function createPagination() {														//start of createPagination() function
	
	var selectElem = document.getElementsByClassName('page');						//selects all elements with class 'page'
	var div = selectElem[0].appendChild(document.createElement('div'));				//create <div> and append it to first element with class='page'
		div.classList.add('pagination');											//adds a class of 'pagination to the <div>
	var ol = div.appendChild(document.createElement('ol')); 						//create <ol> and append it to <div class='pagination'>	

	for (var i = 0; i < numLinks; i++)	{											//start for loop that creates <li>s
		var li = ol.appendChild(document.createElement('li'));						//create <li> and append it to <ol>
		var a = li.appendChild(document.createElement('a'));						//create <a> and append it to <li>	
		a.href = '#';																//set <a href='#'></a>
		a.textContent = i + 1;														//set <a>1</a> for first link <a>2</a> for second link etc.
		a.addEventListener('click', calculateShowStudents.bind(null, a.textContent));
		a.addEventListener('click', removeClassAddClass);							//adds an eventlistener so that on click - it runs the function removeClassAddClass
		
	}																				//end for loop

	var pagination = document.getElementsByClassName('pagination');					//selects all elements with class of 'pagination'
	var link = pagination[0].getElementsByTagName('a');								//select all links inside first element with class of 'pagination'
	link[0].classList.add('active');												//select first link inside first element with class of 'pagination' & add class='active'
}																					//end of createPagination() function


var createSearchBar = function() {

	//create search bar
	var editInput = document.createElement('INPUT');
	editInput.setAttribute('type', 'search');
	
	//append search bar
	document.getElementsByClassName('page-header cf')[0].appendChild(editInput);
	
	//style search bar
	editInput.parentNode.style.position = 'relative';
	editInput.style.position = 'absolute';
	editInput.style.right = '0px';
	editInput.placeholder = 'Search For a Student'
}																					

var init = function() {
	createPagination();																	//call createPagination() function
	calculateShowStudents(1);
	createSearchBar();
}

init();

//Testing ---- SEARCH FEATURE




/*
var searchBar = document.getElementById('searchInputId');
    searchBar.addEventListener('submit',function(e) {
        e.preventDefault();
        var b = searchBar.value;
        window.location.href = 'http://mywebsite.com/'+b;

    });
*/
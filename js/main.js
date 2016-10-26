//Project 2
/*
By Simon Miller
email: simonmill@gmail.com
*/

// ** ------------> Problem: No pagination when page loads
// ** ------------> Solution: Add pagination

//When page loads - hide all students

	//select students and .hide() body <ul class="student-list">
	document.getElementsByClassName("student-list")[0].style.display = 'none';

//calculate how many page-links are needed
	//number of students
	//divided by 10
	// - 1
var numStudents = document.getElementsByClassName('student-list')[0].children.length;	//number of students
var numLinks = Math.ceil(numStudents / 10);												//number of pagination links needed

//testing
var testingFunction = function() {
    
	var test = document.getElementsByClassName('pagination');
	for (var i = 0; i < test.length; i++) {
    var a = test[i].getElementsByTagName('a');

	this.className = 'active';
}; ???????????????????????????????????????????????????

//This function dynamically adds pagination
	
function createPagination() {														//start of createPagination() function
	

	var selectElem = document.getElementsByClassName('page')[0];					//select first element with class 'page'
		
	var newDiv = selectElem.appendChild(document.createElement('div'));				//create <div> and append it to element with class='page'
		newDiv.className = 'pagination';											//set <div>'s class to 'pagination'

	var newOl = newDiv.appendChild(document.createElement('ol')); 					//create <ol> and append it to <div class='pagination'>	

	for (var i = 0; i < numLinks; i++)	{											//start for loop that creates <li>s
		var newLi = newOl.appendChild(document.createElement('li'));				//create <li> and append it to <ol>
		
		var newA = newLi.appendChild(document.createElement('a'));					//create <a> and append it to <li>	
			//newA.className = 'active';											//set <a class='active'></a>
			newA.href = '#';														//set <a href='#'></a>
			newA.textContent = i + 1;												//set <a>1</a> for first link <a>2</a> for second link etc.
			newA.addEventListener('click', testingFunction);
	}																				//end for loop
}																					//end of createPagination() function

createPagination(); 																//call createPagination() function
/*for (var i = 0; i < numLinks; i++) {
		document.getElementsByClassName('pagination').removeAttribute("class");
	}
	this.className = 'active';*/
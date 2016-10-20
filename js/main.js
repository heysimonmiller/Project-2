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



//This function dynamically adds pagination
	
function createPagination() {														//start of createPagination() function
	
//	for (var i = 0; i < students.length; i++)										//start for loop

		var selectElem = document.getElementsByClassName('page')[0];				//select first element with class 'page'
		
		var newDiv = selectElem.appendChild(document.createElement('div'));			//create <div> and append it to element with class='page'
			newDiv.className = 'pagination';										//set <div>'s class to 'pagination'

		var newOl = newDiv.appendChild(document.createElement('ol')); 				//create <ol> and append it to <div class='pagination'>	
		
		var newLi = newOl.appendChild(document.createElement('li'));				//create <li> and append it to <ol>
			newLi.className = 'active';												//set <li>'s class to 'active'

		var newA = newLi.appendChild(document.createElement('a'));					//create <a> and append it to <li>	
			newA.className = 'active';												//set <a class='active'></a>
			newA.href = '#';														//set <a href='#'></a>
			newA.textContent ='1';													//set <a>1</a>

//	}																				//end for loop
}																					//end of createPagination() function

createPagination(); 																//call createPagination() function

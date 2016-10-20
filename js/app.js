//Problem: No pagination - all students show up & no way to search for students
//Solution: Add pagination dynamically and add ability to search for students dynamically.


// --> VARIABLES <-- 
var $studentList = $(".student-list");
var $studentItem = $(".student-item");
var numberOfStudents = $(".student-list li").length;
var numberOfPages;

var $paginationDiv = $('<div class="pagination"></div>');
var $paginationOrderedList = $('<ol></ol>');

// --> FUNCTIONS <-- 

//for loop to create listItem in pagination ul.
var createPaginationListItems = function(){

	for (var i = 0; i < numberOfPages; i++) {
		var paginationNumber = i + 1;
		var $a = $('<a>' + paginationNumber +'</a>');
		var $li = $('<li></li>');

		//append pagination list item to the ordered list
		$paginationOrderedList.append($li);
		//append pagination link to the list item
		$li.append($a);
		$a.attr("href", paginationNumber)
	}
}
---------------------------------
// changing page when user clicks on a paging link
$("#paging").on("click", "a", function() {
    page = $(this).text();
    loadPage();
});

function generatePagingLinks() {
     
		var numberOfPages = Math.ceil((numberOfStudents / 10) - 1); // calculate number of links
    $("#paging").children("a").remove(); // Remove existing paging links

    // generate new paging links
    for (var i = 0; i < links; i++)
        $("<a>").attr("href", "#").text(i + 1).appendTo("#paging");
}
--------------------------------------
//function to show students

var showStudents = function(testing) {

	for (var i = 0; i < testing ; i++) {

	}
}

//Add Pagination Dynamically
	//When page loads - .hide() all students
	$studentList.hide();

	// only .show() first 10.
//$(document).ready($studentItem.show())

	//Calculate number of pages needed
	//numberOfPages = Math.ceil((numberOfStudents / 10) - 1);
	
	//Add number of pages links to the bottom of the page

//append pagination div to body
$('body').append($paginationDiv);
//append ordered list to pagination div
$paginationDiv.append($paginationOrderedList);
//append list item(s) to ordered list
$paginationOrderedList.append(createPaginationListItems);

//var studentsPage = $('.pagination ol li a')[0].textContent + 1;


//Correct links to show correct students. i.e. page 2 = students 11 - 20 shown. Page link top number = no. * 10. // Bottom number = top number - 9.

//Add Search Dynamically


// div class "page" - inside - have ul with class "student-list"
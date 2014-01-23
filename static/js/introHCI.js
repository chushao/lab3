'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("#testjs").click(function(e) {
        $('.jumbotron h1').text("what is life?");
        $('#testjs').text("why am i here?");
        $(".jumbotron p").toggleClass("active");
    });
    $("#submitBtn").click(updateProject); 
    $("a.thumbnail").click(projectClick);

    // Add any additional listeners here
    // example: $("#div-id").click(functionToCall);
}

function projectClick(e) {

    //        console.log ("fuck you this shit is clicked!");
    e.preventDefault();
    //        $(this).css("background-color", "#7fff00");

    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);// 


    var containingProject = $(this).closest(".project"); 
        var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
        $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
        description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }


}
function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}
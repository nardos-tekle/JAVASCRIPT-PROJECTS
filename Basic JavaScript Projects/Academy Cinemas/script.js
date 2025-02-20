// intialize popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function(element){
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + " '>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

//initialize toast

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)


})

//function to disply toast with selected options

function displaySelectMovieOptions(){
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime " + time + "\nTickets:" + quantity;

    // display toast
    var toastBody = document.getElementById('toastBody');
     toastBody.textContent = message;
     var toast = new bootstrap.Toast(document.getElementById('toastDisplay')) 
     toast.show()
}

function buyTickets(){
    displaySelectMovieOptions();
}
//JQuery 

// shrinks header size when the document is scrolled down by 80 pixels
$(document).on("scroll", function() {
    //when the webpage is scrolled down from the top by 50px this 
    // if statement will trigger
    if($(document).scrollTop() > 50){
        //once the 50px requirment has been met add the 
        //nav-shrink class selector to the same HTML element
        //that has the nav class
        $("nav").addClass("nav-shrink");
        //adjust the position of the mobile drop menu
        //to accomodate the new height decrease
        $("div.navbar-collapse").css("margin-top","-6px");
        //if the webpage has not been scrolled down or
        //is back at the top the nav-shrink class selector
        //is removed from the HTML element with the nav
        // class selector
    } else {
        $("nav").removeClass("nav-shrink");
        //the margin for the drop down menu is now
        // returned to its original amount
        $('div.navbar-collapse').css("margin-top", "14px");
    }
});

//close mobile menu when a navigation link is clicked
$(document).ready(function(){
    //on click when and element contains just the nav-link class and not the dropdown-toggle and then
    // also close when an element with the class .dropdown-item(each movie link) has been clicked
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropwdown-item', function() {
        // collapse the navbar when a link or dropdown item is clicked
        $(".navbr-collapse").collapse('hide');
    });
});


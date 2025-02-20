$(document).ready(function () {
    function shineloop() {
        $(".shine").animate({ backgroundPositionX: '1600px' }, 3000)
            .animate({ backgroundPositionX: '-800px' }, 3000);

    };

    setInterval(shineloop, 0);
    //Shrinks header size when the document is scrolled down
    //by 50 pixels 
    $(document).on("scroll", function () {
        if ($(document).scrollTop() < 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });
    // truggers the images to slide down one after the other
    // whe the users mouse enters the div area with the 
    //#classicCars ID
    $("#classicCars").on({
        mouseenter: function () {
            $('#titleOne').show(1000);
            $('titleTwo').show(1500);
            $('titleThree').show(2000);
        },
        //trigger the images to slide up and hide each title 
        //one after the other when the user's mouse leaves
        //the div area with the #classicCars ID

        mouseleave: function () {
            $('#titleOne').hide(2000);
            $('#titleTwo').hide(1500);
            $('#titleThree').hide(1000);
        }
    });
    //creates a toggle effect on each FAW question by checking
    // each element sibling so they don't all dislay when
    //one question is clicked
    $('div.question').on('click', function () {
        $(this).next().slideToggle('slow');
    });

});



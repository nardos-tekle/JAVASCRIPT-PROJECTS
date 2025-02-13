// recipe pop up modal selection

//sets up the button that will open the recipe modal

var btns = document.querySelectorAll("input.modal-button");

//Defines all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

// get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn");

// when the user clicks the ricepe button, open the modal

for(var i = 0; i < btns.length; i++ ) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute
        ("href"));
        modal.style.display = "block";
    }
}

//when the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtn.length; i++){
    closeBtn[i].onclick = function() {
        for (var index in modals) {
            if(modals[index].style){
                modals[index].style.display = "none";
            }
        }
    }
}

// email validation

document.getElementById('contactForm').addEventListener('submit'),
    function(event) {
        event.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        const emailPattern = /^[a -zA-Z0-9._ -] +@[a -zA-Z0-9.-]+\.[a -zA-Z]{2,4}$/;
        
        const valMsg = document.getElementsById('validateMsg');

        if(!firstName || !lastName || !phone || !message) {
            valMsg.innerHTML = '<p style="color: red;"> Please fill out a message'
        } else if (!emailPattern.text(email)){
            valMsg.innerHTML = '<p style="color: red;"> Please enter a valid email'
        } else {
            valMsg.innerHTML = '<p style = "color: red;"> Thank you for '
        }
    }
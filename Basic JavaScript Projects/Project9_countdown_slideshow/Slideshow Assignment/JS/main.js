
const images = ["car1.jpg", "car2.jpg", "car3.jpg"]; // Array of image paths

function showSlide() {

    // ... code to update the image display using currentSlide index

}

// Call to start the slideshow

showSlide(); 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (slides.length === 0) {
    return; // Exit the function to avoid further errors
  }
  slideIndex = n; // Directly update slideIndex
  if (slideIndex > slides.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = slides.length; }

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function countdown() {
  // Get the element *once* outside the tick function.
  const timeElement = document.getElementById("seconds"); 
  let seconds = parseInt(timeElement.getAttribute("ariaValueMax"), 10); // Get ariaValueMax as a number

  if (isNaN(seconds)) {
      console.error("Invalid ariaValueMax attribute. Please provide a valid number.");
      return; // Exit if ariaValueMax is not a valid number
  }

  let timerId; // Store the timeout ID

  function tick() {
    seconds--; // Decrement seconds
    timeElement.textContent = seconds; // Update the content of the element

    if (seconds >= 0) {  // Only set the timeout if seconds is not negative.
      timerId = setTimeout(tick, 1000);
    } else {
      alert("time's up!");
      clearTimeout(timerId); // Clear using timerId
      timeElement.textContent = ""; // Clear content using the element reference
    }
  }

  tick(); // Start the countdown
}

// Assuming you have a button with the id "startButton"
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", countdown);
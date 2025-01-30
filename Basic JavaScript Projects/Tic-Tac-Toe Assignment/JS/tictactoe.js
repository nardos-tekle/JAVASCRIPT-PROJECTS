//this variable keeps track of whose turn it is
let activePlayer = 'X';
//this array stores an array of moves. we use this to determine win conditions
let selectedSquares = [];
// this function is for placing an X or o in a square
function placeXOrO(squareNumber) {
    //this condition ensures a square hasn/t been selected already
    // the.some() method is used to checl each element of the selectsquare array
    //to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
            // if active player is equal to x, the corresponding image will show
            if (activePlayer === 'X') {
                //active player may only be x or o so, if not x it must be o
                select.style.backgroundImage = "url('./Images/x.png')";
            } else {
                //if active player is equal to o, the o.png is placed in HTML
                select.style.backgroundImage = "url('./Images/o.png')";
            }

            //squarenumber and activeplayer are concatenatedd together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions
        checkWinConditions();
           //this condition is for changing the active player
        if (activePlayer === 'X') {
            //if active player is x change it to o 
            activePlayer = 'O';
            // if active player is anything other than x
        } else {
            //change the activeplayer to x
            activePlayer = 'X';
        }

        //this function plays placement sound
        audio('./Media/place.mp3');
        // this condition checks to see if it is the computers turn
        if (activePlayer === 'O') {
            //this function disables clicking for computer turn
            disableClick();
            //this function write 1 second before the computer places an image and enables click
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //returning true is needed for our computers function to work 
        return true;
    }
    // this function results in a random square being selected by the computer
    function computersTurn() {
        //this boolean is needed for our while loop
        let success = false;
        //this variable stores a random number 0-8
        let pickASquare;
        //this condition allows our while loop to keep trying if a square is selected already
        while (!success) {
            //a random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true, the square hasn;t been selected yet. 
            if (placeXOrO(pickASquare)) {
                // this line calls the function
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
        }
    }
}


// this function parses the selectedsquares arrat to search for win conditions. 
//drawline function is called to draw a line on the screen if the condtion is met
function checkWinConditions() {
    // x 0,1,2 condition
    if (arrayIncludes('0X', '1X', '2X')) { draWWinLine(50, 100, 558, 100) }
    // x 3,4,5condition
    else if (arrayIncludes('3X', '4X', '5X')) { draWWinLine(50, 304, 558, 304) }
    // x 6,7,8 condition
    else if (arrayIncludes('6X', '7X', '8X')) { draWWinLine(50, 508, 558, 508) }
    // x 0,3,6 condition
    else if (arrayIncludes('0X', '3X', '6X')) { draWWinLine(100, 50, 100, 558) }
    // x 1,4,7 condition
    else if (arrayIncludes('1X', '4X', '7X')) { draWWinLine(304, 50, 304, 558) }
    // x 2,5,8 condition
    else if (arrayIncludes('2X', '5X', '8X')) { draWWinLine(508, 50, 508, 558) }
    // x 6,4,2 condition
    else if (arrayIncludes('6X', '4X', '2X')) { draWWinLine(100, 508, 510, 90) }
    // x 0,4,8condition
    else if (arrayIncludes('0X', '4X', '8X')) { draWWinLine(100, 100, 520, 520) }
    // 0 0,1,2 condition
    else if (arrayIncludes('00', '10', '20')) { draWWinLine(50, 100, 558, 100) }
    // 0 3,4,5 condition
    else if (arrayIncludes('30', '40', '50')) { draWWinLine(50, 304, 558, 304) }
    // 0 6,7,8 condition
    else if (arrayIncludes('60', '70', '80')) { draWWinLine(50, 508, 558, 508) }
    // 0 0,3,8 condition
    else if (arrayIncludes('00', '30', '60')) { draWWinLine(100, 50, 100, 558) }
    // 0 1,4,7 condition
    else if (arrayIncludes('10', '40', '70')) { draWWinLine(304, 50, 304, 558) }
    // 0 2,5,8 condition
    else if (arrayIncludes('20', '50', '80')) { draWWinLine(508, 50, 508, 558) }
    // 0 6,4,2 condition
    else if (arrayIncludes('60', '40', '20')) { draWWinLine(100, 508, 510, 90) }
    // 0 0,4,8 condition
    else if (arrayIncludes('00', '40', '80')) { draWWinLine(100, 100, 520, 520) }
    //this condition checks for a tie. if non of the above conditions are met and 
    // 9 squares are selected the code executes
    else if (selectedSquares.length >= 9) {
        //this function plays the tie game sound
        audio('./Media/tie.mp3');
        //this function sets a .3 second timer before the resetGame is called. 
        setTimeout(function () { resetGame(); }, 500);
    }
    //this function checks if an array includes 3 strings. it is used to check for 
    //each win
    function arrayIncludes(squareA, squareB, squareC) {
        //these variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // if the 3 varaibles we pass are all included in our array then
        //true is returned and our else if condition executes the drawLine() function
        if (a === true && b === true && c === true) { return true; }
    }
}

// this function makes our body temporarily unclickable
function disableClick() {
    //this makes our body unclickable
    body.style.pointerEvents = 'none';
    //this makes our body clickable again after 1 second
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);

}
//this functoion takes a string parameter of the path you set earlier 
function audio(audioURL) {
    //we create a new audio object and we pass the path you set earlier for placement sound
    let audio = new Audio(audioURL);
    // play method plays our audio sounds
    audio.play();
}

// this function utilizes HTML canvas to draw win lines
function draWWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line access on our HTML canvas element
    const canvas = document.getElementById('win-lines');
    // this line gives us access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    // this line indicates where the start of x axis is
    let x1 = coordX1,
        // this line indicates where the start of y axis is
        y1 = coordY1,
        // this line indicates where the end of the x axis is 
        x2 = coordX2,
        //this line indicates where the end of a line y axis is 
        y2 = coordY2,
        // this variable stores temporary x axis we update in our animation loop
        x = x1,
        //This variable stores temporary y axis data we update in our animation loop
        y = y1;

    // this function interacts with the canvas
    function animateLineDrawing() {
        //this variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // this method clears content from the last loop iteration
        c.clearRect(0, 0, 608, 608);
        // this method starts a new path
        c.beginPath();
        //this method moves us to the starting point in our line
        c.moveTo(x1, y2);
        //this method indicates the end point of our line
        c.lineTo(x, y);
        // this method sets the width of the line
        c.lineWidth = 10;
        //  this method sets the color of the line
        c.strokeStyle = 'rgba(70,255,33,.8)';
        // this method draws everything we laid out above
        c.stroke();
        // this condition checks if we've reached the endpoint
        if (x <= x2 && y1 <= y2) {
            //this conditon adds 10 to the previous end x endpoint.
            if (x < x2) { x += 10; }
            // this condition adds 10 to the previous end y endpoint
            if (y < y2) { y += 10; }
            //this condition is similar to the one above
            //This is neccessary for the 6,4,2 win conditions.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }

        }
        //This condition is similar to the one above.
        //This is neccessary for the 6,4,2, win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    // This function clears our canvas after our win line is drawn
    function clear() {
        //This line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        //This line clears our canvas.
        cancelAnimationFrame(animationLoop);
    }
    // This line disallows clicking while the win sound is playing.
    disableClick();
    //This line plays the win sounds.
    audio('./media/winGame.mp3');
    //This line calls our main animation loop.
    animateLineDrawing();
    //This line waits 1 second. Then, clears canvas, resets game, and allows clicking again. 
    setTimeout(function () { clear(); resetGame(); }, 1000);

}
// This function resets the game in the event of a tie or a win.
function resetGame() {
    for (let i = 0; i < 9; i++) {
        // This variable gets the HTML element i.
        let square = document.getElementById(String(i));
        //This removes our elements backgroundImage.
        square.style.backgroundimage = '';
    }
    //this resets our array so its empty and we can start over. 
    selectedSquares = [];
}
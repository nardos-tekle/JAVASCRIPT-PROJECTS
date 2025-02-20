function getMSG(){
    // STEP 1: setup the xml HTP REUEST OBJECT

    let ajaxRequest = new XMLHttpRequest();
    // get input value of name to display to user after 
    // requedt has been made
    let inputVal = document.getElementById("fullName").value;
    //function to display user input value once request 
    //has been recieved
    ajaxRequest.onload = function(){
        document.getElementById("tkuMsg").innerHTML = "Thank you" 
        inputVal + "for signing up!";
    }
    ajaxRequest.open('GET', 'Response.html', true);
    //defines the AJAX response call back method that 
    //establishes whether the response was successful and where
    // the data should be displayed
    ajaxRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            document.getElementById("content").innerHTML = ajaxRequest.responseText;
        }
    }
    ajaxRequest.send();
    
}


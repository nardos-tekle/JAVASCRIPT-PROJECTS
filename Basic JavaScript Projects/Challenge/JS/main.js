function vote_function(){
    var vote, elgible;
    vote = document.getElementById("vote") .value;
    eligible = (vote > 18) ? "You are elgible to vote" : "You are not elgible to vote";
    document.getElementById("age") .innerHTML = eligible;
}
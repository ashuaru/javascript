var userplay = prompt("Do you choose rock, paper or scissors?");
var computerplay = Math.random();
if (computerplay < 0.34) {
    computerplay = "rock";
} else if(computerplay <= 0.67) {
    computerplay = "paper";
} else {
    computerplay = "scissors";
}

var compare = function(userplay, computerplay) {
    if(userplay === computerplay) {
    return "The result is a tie!";
}
if(userplay === "rock") {
    if(computerplay === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    }
}
if(userplay === "paper") {
    if(computerplay === "rock") {
        return "paper wins";
    } else {
        if(computerplay === "scissors") {
            return "scissors wins";
    }
}
if(userplay === "scissors") {
    if(computerplay === "rock") {
        return "rock wins";
    } else {
        if(computerplay === "paper") {
            return "scissors wins";
        }
    }
}
}
};
console.log("User play: " + userplay);
console.log("Computer play: " + computerplay);
compare(userplay, computerplay);
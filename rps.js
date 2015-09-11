var userChoice = prompt("Do you choose rock, paper, or scissors?");//Get users choice
//Have the computer make a choice. Value from 0 - 1
var computerChoice = Math.random(); //Determine if the computer's choice is rock, paper, or scissors
if (computerChoice<=0.33) {
  computerChoice="rock";
}else if (computerChoice<=0.66) {
  computerChoice = "paper";
}else {
  computerChoice = "scissors";
}
//Create a function called compare to see if the choices match
var compare = function(choice1, choice2) {
  if (choice1 == choice2)  {
    return "It's a tie!"; //both choices are the same - all done!
  } else if (choice1 == "rock") {
    if (choice2 == "scissors") {
      return "You win! Rocks crushes scissors!"; //
    } else {
        return "You lose! Paper covers rock" //choice1 is rock, choice2 is paper
           }
    }

else if(choice1 == "paper") {
  if(choice2 == "rock") {
    return "You win! Paper covers Rock!";
  } else {
      return "You lose! Scissors cuts paper";
  }
}

else if (choice1=="scissors") {
  if (choice2 == "rock") {
    return "You lose. Rock crushes your puny scissors.";
  } else {
    return "Scissors wins; it cuts that silly paper"; //paper is the only other choice
    }
  }
};

compare(userChoice, computerChoice);

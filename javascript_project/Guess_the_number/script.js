let RandomNumber = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesSlot =document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const restart =  document.querySelector('.resultParas');

const p = document.createElement('p');


let PreviousGuess = []
let NumGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(RandomNumber);
    console.log(guess);
    ValidateGuess(guess);
    
    })

}


function ValidateGuess(guess){
    if (userInput.value === '') DisplayMessage(`please enter any number to play game.`);
    else if(isNaN(guess)){
        alert(`Not a valid number `);
    }
    else if(guess<1){
        alert('number is less then one not allowed');
        userInput.value ='';
    }
    else if(guess>100){
        alert('number is greter than 100 is not allowed');
        userInput.value ='';
    }
    else{
        PreviousGuess.push();
        if(NumGuesses >= 10 ){
            displayGuess(guess);
            DisplayMessage(`Game Over. Random number was ${RandomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    
     if(guess === RandomNumber){
        DisplayMessage(`hurray! you Guessed Right Number.`);
        endGame();
    }
    else if(guess < RandomNumber){
        DisplayMessage(`number is Toooo low`);
    }
    else if(guess > RandomNumber){
        DisplayMessage(`number is Toooo High`);
    }

}

//cleanUp method
function displayGuess(guess){
    userInput.value="";
    guesSlot.innerHTML += `${guess} , `
    NumGuesses++;
    remaining.innerHTML =`${11-NumGuesses}`
}

function DisplayMessage(message){
    loworhi.innerHTML=`<h2>${message}<h2>`
}

function endGame()
{
  userInput.value ='';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h2 id='newgame'> Start New Game </h2>`;
  restart.appendChild(p);
  playGame = false;
  startAgain();  
}

function startAgain(){
        const newgamebutton = document.querySelector('#newgame');
        newgamebutton.addEventListener('click',function(e){
        RandomNumber =Math.floor(Math.random() * 100 + 1);
        PreviousGuess=[];
        NumGuesses =1;
        guesSlot.innerHTML=``;
        remaining.innerHTML =`${11-NumGuesses}`;
        userInput.removeAttribute('disabled','');
        restart.removeChild(p);
        
        
        playGame=true

    })
}



//we start with defining vars of the project,
//all in just one line.
var scores, roundScore, activePlayer, diceDom , currentScore, gamePlaying;

//here,we define the values of the vars.
diceDom = document.querySelector(".dice");



//start new game
newGame();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//the roll button
document.querySelector('.btn-roll').addEventListener('click', function()
{
  if (gamePlaying) {
    //we want this function to: 1- get a rand num, 2- display it in the current score, 3- change the dice image
    //4- add to the total current each time is clicked, 5- reset the score and change the active player when the rolled is 1.

    //1- generate random number
    var dice = Math.floor(Math.random() *6) + 1;
    if (dice == 1)
    {  
      //reset the currentScore.
      currentScore =0;
      document.querySelector("#current-"+ activePlayer).textContent = currentScore;
      //hide the dice image
      diceDom.style.display = 'none';
      //change the active player
      nextPlayer()
        
    }
    else
    {
      currentScore += dice;
      //2- change the html content of the current score //4- make it succissive
      document.querySelector("#current-"+ activePlayer).textContent = currentScore;
      //3- change the image
      diceDom.style.display = 'block';
      diceDom.src = 'dice-' + dice +'.png';
    }
  }
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//the hold button event
document.querySelector('.btn-hold').addEventListener('click', function(){
  if (gamePlaying) {
    //it should reset currentScore to zero and transfer current to score.
    scores[activePlayer] += currentScore
    document.querySelector("#score-"+ activePlayer).textContent = scores[activePlayer];
    currentScore =0;
    document.querySelector("#current-"+ activePlayer).textContent = currentScore
    //if the transfered amount succissvely passed a definite number (100 points) it should declare a winner.
    //it should change active player
    if (scores[activePlayer] >= 20) {
    
      playerWon();
    }
    else{
      nextPlayer()
    }
  }
  
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//the new game button event
document.querySelector('.btn-new').addEventListener('click', newGame);

function nextPlayer()
{
  //change the code
  //change the panel
  (activePlayer == 0)? activePlayer=1 : activePlayer =0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
    

}

function playerWon() {
  //add the winner class
  document.querySelector('.player-'+ activePlayer + '-panel' ).classList.add('winner');

  //change the player text
  document.querySelector('#name-' + activePlayer).textContent = 'WINNER';

  //hide the dice
  diceDom.style.display = 'none';

  //disable the roll button 
  gamePlaying = false;
  
}

function newGame() {
  //reset all the starting values
  //1-hide the dice at the beginning of the game
  diceDom.style.display = 'none';
  //2- hide the scores and current scores
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  scores = [0,0];
  roundScore=0;
  activePlayer=0;
  currentScore = 0;

  //remove the winner class from both players
  document.querySelector('.player-0-panel' ).classList.remove('winner');
  document.querySelector('.player-1-panel' ).classList.remove('winner');
  //return the players names
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';
  //give initiation to the first player
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  //set the game state to playing
  gamePlaying = true;
}
    

   




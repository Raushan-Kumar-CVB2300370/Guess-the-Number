'use strict';

// document.querySelector('.message').textContent = "🎉 Correct Number!";

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 13;
let score=10 ;
let Highscore=0;

let number = Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function(){
    const guess =Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent = '🚫 No Number!';
    } 

    
    else if(guess === number){
         document.querySelector('.message').textContent = "🎉 Correct Number!";
         document.querySelector('.number').textContent = number;
        
         document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('.number').style.width = '15rem';

         if(score > Highscore){
            Highscore = score;
            document.querySelector('.HighScore').textContent = Highscore;
         }
    }

    // guess is too high
    else if(guess > number){
        if(score>1){
            document.querySelector('.message').textContent = ' 📈Too High!';
            score--;
            document.querySelector('.score').textContent = score;

            document.querySelector('.guess').value = " ";
        }
        else{
            document.querySelector('.message').textContent = '❌ we Lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
    }

    // guess is too low
    else if(guess < number){
        if(score>0){
        document.querySelector('.message').textContent = '📉Too Low!';
        score--;
        document.querySelector('.score').textContent = score;

        document.querySelector('.guess').value = " ";
        }
        else{
            document.querySelector('.message').textContent = '❌ we Lost the Game!';
            document.querySelector('.score').textContent = 0;
        }
    }

});

document.querySelector('.again').addEventListener('click', function(){
     number = Math.trunc(Math.random()*20)+1;
    
    document.querySelector('.guess').value = " ";
    document.querySelector('body').style.backgroundColor = 'black';

    document.querySelector('.number').textContent = "?";
    document.querySelector('.message').textContent = 'Start Guessing..........';
    document.querySelector('.score').textContent = 10;
    document.querySelector('.number').style.width = '10rem';
});

 
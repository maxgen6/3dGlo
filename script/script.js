window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    //Tmer
    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        
            
        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60) % 24,
                day =  Math.floor(timeRemaining / 60 / 60 / 24);

            

            return{timeRemaining, hours, minutes, seconds};

        }

        
        function updateClock(){
        let timer = getTimeRemaining();
        
        timer.hours > 9 ?   timerHours.textContent = timer.hours : timerHours.textContent = '0' + timer.hours;
        timer.minutes > 9 ?  timerMinutes.textContent = timer.minutes : timerMinutes.textContent = '0' + timer.minutes;
        timer.seconds > 9 ? timerSeconds.textContent = timer.seconds : timerSeconds.textContent = '0' + timer.seconds;

        if(timer.timeRemaining > 0){
        setInterval(updateClock, 1000);
        } else {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }
        updateClock();
        
    }

    countTimer('27 april 2020');
    // setInterval(countTimer, 1000, '27 april 2020');


});
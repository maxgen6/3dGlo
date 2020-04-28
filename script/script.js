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

        const interval = setInterval(() => {
            let timer = getTimeRemaining();
        
        timer.hours > 9 ?   timerHours.textContent = timer.hours : timerHours.textContent = '0' + timer.hours;
        timer.minutes > 9 ?  timerMinutes.textContent = timer.minutes : timerMinutes.textContent = '0' + timer.minutes;
        timer.seconds > 9 ? timerSeconds.textContent = timer.seconds : timerSeconds.textContent = '0' + timer.seconds;

        if(timer.timeRemaining < 0){
            clearInterval(interval);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';

        }
        }, 1000); 
    }

    countTimer('27 april 2020');
    // setInterval(countTimer, 1000, '27 april 2020');


    //меню
    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');
            
        const handlerMenu = () => {
            // if(!menu.style.transform || menu.style.transform === `translate(-100%) `){
            //     menu.style.transform = `translate(0)`;
            // } else{
            //     menu.style.transform = `translate(-100%)`;
            // }
            menu.classList.toggle('active-menu');
        };
        // btnMenu.addEventListener('click', handlerMenu);
        // closeBtn.addEventListener('click', handlerMenu);

        // menuItems.forEach((elem) => {
        //     elem.addEventListener('click', handlerMenu)
        // });

        btnMenu.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('menu');
            if(!target){
                handlerMenu();
            } 
            
        });
        closeBtn.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('close-btn');
                if(!target){
                    menu.classList.remove('active-menu');
                }
        })

    };

    toggleMenu();


    //popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popUpBtn = document.querySelectorAll('.popup-btn');

            let opacity = 0;
            popup.style.opacity = opacity;
            popUpBtn.forEach((elem) => {
            elem.addEventListener('click', function animation() {
                if(screen.width > 768){
                popup.style.display = 'block'; 
                opacity += 0.1;
                popup.style.opacity = opacity;          
                if(opacity < 1){                   
                    setTimeout(animation, 20); 
                }
            } else{
                popup.style.opacity = 1; 

            }
                 
            });
        });


        popup.addEventListener('click', (event) => {
            let target = event.target;

            if(target.classList.contains('popup-close')){
                popup.style.display = 'none';
                return (opacity = 0);
            } else {
                target = target.closest('.popup-content');
                if(!target){
                    popup.style.display = 'none';
                }
            };
        });

    };

    togglePopUp();

    //табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++){
                if(index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.service-header-tab');
                console.log(target);
            
            if(target){                
                tab.forEach((item, i) => {
                    if(item === target){
                        toggleTabContent(i);
                    }
                });
            }
        
        });
};
    tabs();


});
'use strict';

const toggleMenu = () => {

    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        ulElem = menu.querySelector('ul') ;
    
   
    console.log(ulElem);
        
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
    });
    ulElem.addEventListener('click', () => menu.classList.remove('active-menu'));
};

export default toggleMenu;
    
    
 import countTimer from './modules/countTimer';
 import toggleMenu from './modules/toggleMenu';
 import tabs from './modules/tabs';
 import slider from './modules/slider';
 import photoCommand from './modules/photoCommand';
 import calculator from './modules/calculator';
 import sendForm from './modules/sendForm';
 import togglePopUp from './modules/togglePopUp';
 
 
 
 
    //Tmer
    countTimer('12 may 2020');
    // setInterval(countTimer, 1000, '27 april 2020');

    //меню
    toggleMenu();


    //popup
    togglePopUp();

    
    //табы
    tabs();

    //слайдер
    slider();

    //фото
    photoCommand();

    //калькулятор
    calculator(100);

    //send-ajax-form   
    sendForm();


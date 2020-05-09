'use strict';

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

export default togglePopUp;

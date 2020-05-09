'use strict';
const sendForm = () => {
    const errorMessage = 'Что-то пошло не так ... ',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    
    const forms = document.querySelectorAll('form'),
         statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';
    const validate = () => {
        let formName = document.querySelectorAll('.form-name'),
            formMess = document.querySelectorAll('.mess'),
            formPhone = document.querySelectorAll('.form-phone');

            for(let i = 0; i < formPhone.length; i++){
                formPhone[i].addEventListener('input', () => {
                formPhone[i].value = formPhone[i].value.replace(/\D/g,'');
            });

            for(let i = 0; i < formName.length; i++){
                formName[i].addEventListener('input', () => {
                    formName[i].value = formName[i].value.replace(/\w/gi, '');
                });
            }
            for(let i = 0; i < formMess.length; i++){
                formMess[i].addEventListener('input', () => {
                    formMess[i].value = formMess[i].value.replace(/\w/gi, '');
                })
            }
            }
    };
    validate();
    
    
    forms.forEach(form => {
        validate(form);
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            
            const formData = new FormData(form);
            
        
            let body = {};
            // for(let value of formData.entries()){
            //     body[value[0]] = value[1];
            // }
            formData.forEach((val, key) => {
                body[key] = val;
            });
            
            postData(body)
            .then((response) => {
                if(response.status !== 200){
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.log(error);
            });
        });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include'
        });
        
        
    //     let promise = new Promise((resolve, reject) => {            
    //     const request = new XMLHttpRequest();
       
    //     request.addEventListener('readystatechange', () => {
    //         if(request.readyState !== 4){
    //             return;
    //         }
    //         if(request.status === 200){
    //             // outputData();
    //             resolve(statusMessage);
                
    //             form.reset();
    //             form1.reset();
    //             form2.reset();
    //         } else {
    //             reject(statusMessage);

    //         }
    //     });
    //     request.open('POST', './server.php');
    //     request.setRequestHeader('Content-Type', 'application/json');
    //     request.send(JSON.stringify(body));
    // });
    //     // console.log(form.querySelector('.form-phone'));   
    //     return promise .then(resolve => statusMessage.textContent = successMessage)
    //                     .catch(error => statusMessage.textContent = errorMessage);

    };

// console.log(document.querySelectorAll('.form-phone'));
};
        
    //     let promise = new Promise((resolve, reject) => {            
    //     const request = new XMLHttpRequest();
       
    //     request.addEventListener('readystatechange', () => {
    //         if(request.readyState !== 4){
    //             return;
    //         }
    //         if(request.status === 200){
    //             // outputData();
    //             resolve(statusMessage);
                
    //             form.reset();
    //             form1.reset();
    //             form2.reset();
    //         } else {
    //             reject(statusMessage);

    //         }
    //     });
    //     request.open('POST', './server.php');
    //     request.setRequestHeader('Content-Type', 'application/json');
    //     request.send(JSON.stringify(body));
    // });
    //     // console.log(form.querySelector('.form-phone'));   
    //     return promise .then(resolve => statusMessage.textContent = successMessage)
    //                     .catch(error => statusMessage.textContent = errorMessage);

    

// console.log(document.querySelectorAll('.form-phone'));


export default sendForm;
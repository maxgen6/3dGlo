const photoCommand = () => {
    let photo = document.getElementById('command'),
        img = document.querySelectorAll('.command__photo');
        
        for(let i = 0; i < img.length; i++){
        img[i].addEventListener('mouseenter', (event) => {
        let photoId = event.target.src;
        event.target.src = event.target.dataset.img;
        img[i].addEventListener('mouseleave', (event) => {
            event.target.src = photoId;
        });
    });
};

};

export default photoCommand;
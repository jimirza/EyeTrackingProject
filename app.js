document.addEventListener('mousemove', (event) => {
    const eye = document.querySelector('.eye');
    const pupil = document.querySelector('.pupil');
    
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;
    
    const angle = Math.atan2(event.clientX - eyeCenterX, -(event.clientY - eyeCenterY)) * (180 / Math.PI);
    
    const pupilDistance = 30; // Max distance pupil can move
    const pupilX = pupilDistance * Math.cos(angle * (Math.PI / 180));
    const pupilY = pupilDistance * Math.sin(angle * (Math.PI / 180));
    
    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
});

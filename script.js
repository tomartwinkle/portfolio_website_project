
document.addEventListener('DOMContentLoaded', function () {
    const reveals = document.querySelectorAll('.reveal');


    function checkReveal() {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('show');
            } else {
                reveals[i].classList.remove('show');
            }
        }
    }
    window.addEventListener('scroll', checkReveal);


    checkReveal();
});

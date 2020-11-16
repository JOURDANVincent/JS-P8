let para = document.querySelector('body');
let backArrow = document.getElementById('cRetour');


function showArrow() {
    let nScroll = window.scrollY;
    if (nScroll > 200) {
        backArrow.className = 'cVisible';
    } else {
        backArrow.className = 'cInvisible';
        
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
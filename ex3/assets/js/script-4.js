let para = document.querySelectorAll('p');

window.onscroll = function() {
    let nScroll = window.scrollY;
    para.forEach(item => {
        //item.classList.add('unvisible');
        if (nScroll >= (item.offsetTop -100 )) {
            //item.classList.remove('unvisible');
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
            //item.classList.add('unvisible');
        }
    })
}

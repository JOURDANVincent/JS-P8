let para = document.querySelectorAll('p');
var offsetArray = [];
para.forEach((item, index) => {
    item.classList.add('unvisible');
    offsetArray[index] = item.offsetTop;
})
console.log(para);
window.onscroll = function() {
    let para = document.querySelectorAll('p');
    var nScroll = window.scrollY;
    para.forEach((item, index) => {
        
        if ((nScroll > 0 | offsetArray[index - 1] -200) && nScroll <= offsetArray[index+ 1] -200) {
            
            item.classList.remove('unvisible').add('parShowvisible');
        }
    });
}


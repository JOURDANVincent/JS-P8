// on stocke dans une variable les paragraphes
let paragraph = document.querySelectorAll('p');

// à l'événement scroll on parcoure le tableau retourné par le querySelectorAll sur les 'p'
// et on lance la fonction que rend visible les paragraphes
document.onscroll = function () {
    for (i = 0; i < paragraph.length; i++) {
        revealOnScroll(paragraph[i]);
    }
}

// fonction qui retire la class invisble pour mettre la classe visible
// en fonction de la position des paragraphe sur le page
function revealOnScroll(currentParagraph) {
    let position = currentParagraph.offsetTop;

    let windowHeight =window.innerHeight;
    if (window.pageYOffset + windowHeight > position) {
        currentParagraph.classList.remove('unvisible');
        currentParagraph.classList.add('visible');
    };
}
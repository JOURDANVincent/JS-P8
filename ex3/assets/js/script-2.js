$(function () {
    var $window = $(window);
    var $elements = $('.elements-qui-apparaissent');
    // en gros si l'anime se fait après être apparu au moins de 100 pixel du haut de l'écran
    var offset = 100;

    // on vérifie pour chaque élément
    $elements.each(function() {
        var $self = $(this);

        // on set une valeur sur l’élément pour dire si il est en animation ou pas
        $self.data('animating', false);

        /*lorsque l'utilisateur scroll*/
        $window.scroll(function () {

            // un offest().top sur l’élément courant pour connaitre sa position
            // on vérifie si c'est supérieur ou égale car : un scroll rapide ne donnera jamais une suite mais des sauts de valeur donc
            // si l’élément est a 10px, le scroll peut très bien faire, 0,1,2,5,9,12 et ne jamais animer ton élément
            // on lui soustrait la hauteur du viewport (fenêtre) car sinon il fera l'animation quand il arrive en haut et non en venant du bas
            // au résultat on ajoute l'offset à partir du quel il fait l'anime
            // ici, il fera l'anime dés qu'on verra au moins 100 pixel de l'élément (optionnel)

            if ($window.scrollTop() >= ($self.offset().top - $window.height() + offest) && $self.data('animating') == false){
                // on dit que il anime pour éviter au re scroll que il retente l'animation
                $self.data('animating', true);
                $self.animate({
                  /*ton animation d'entrée*/
                }, function(){
                  // animation fini, on remet le animating a false, si on re scroll du coup quand l'animation est fini elle se re fera
                  // si tu ne veut qu'un seul anime unique laisse à true
                  $self.data('animating', false);
                });
            }
        });
    });
});
$('.owl-carousel').owlCarousel({
    loop:true, /* permite fazer o carrossel andar de frente para trás e vice-versa, quando não é "false" */
    margin:10, /* dá uma margem entre os itens ou entre as suas respectivas divs */
    nav:false, /* permite habilitar as setas de direcção do carrossel, quando não é "false" */
    responsive:{ /*permite trabalhar com a responsividade do ecrã onde se exibem os itens */
        0:{
            items:1 /* se o ecrã tiver uma resolução de 0px, apenas será exibido um item de cada vez */
        },
        600:{
            items:3 /* se o ecrã tiver uma resolução de 600px, apenas serão exibidos três itens de cada vez */
        },
        1000:{
            items:5 /* se o ecrã tiver uma resolução de 1000px, apenas será exibido um item de cada vez */
        }
    }
})
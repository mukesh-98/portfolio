const responsive={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    },
    1080:{
        items:4
    }
}

$(document).ready(function(){

    $nav=$('.nav');
    $togglecollpase=$('.toggle-collpase');

    /*             OnClick function for nav menu */
    $togglecollpase.click(function(){
        $nav.toggleClass('collapse');
    });

    //owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        responsive:responsive,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
    });

    //click to scroll up
    $('.move-up span').click(function(){
        $('html,body').animate({scrollTop:0},1000);
    });
});
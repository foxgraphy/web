$(document).ready(function(){
    
    /*Script de Activación de Slick Slider*/
    $('.slick-inicio').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 200,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: true
    });
    
    
    
    /* ------------------------------------------------------- */
    
    
    
    /* Menú Cortina Flotante */
    $('#cerrar').hide();
    
    $('#abrir').click(function(){
        $('aside#menu-cortina').animate({
            right: 0
        },500,'easeOutExpo');
        
        $('#abrir').hide();
        $('#cerrar').show();
        
        event.preventDefault();
    });
    
    $('#cerrar').click(function(){
        $('aside#menu-cortina').animate({
            right: -290
        },500,'easeOutExpo');
        
        $('#cerrar').hide();
        $('#abrir').show();
        
        event.preventDefault();
    });
    
    
    
    /* --------------------------------------------------------------- */
    
    
    
});
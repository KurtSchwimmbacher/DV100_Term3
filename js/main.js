//When the document loads
$(document).ready(function(){

    console.log("Hello World")

    //When the document loads animate hero image upwards
    $(".hero-image").animate({top:'-=100'});

});



$(document).ready( ()=>{
  
    $(".slider-con").css("width","66%")

    $(".carousel-control-next").on('click', () => {
        $(".slider-con").animate({
            width : "33%",
            'marginLeft' : "+=16.5%"
        },
        {duration : 1000})
        });


  /*  $(".carousel-control-prev").on('click', () => {
        $("slider-con").animate({
            width : "66%",
            'marginLeft' : "-16.5%"
        },
        {duration : 100});
        $(this).removeAttr('style');
    }); */
});

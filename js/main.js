//When the document loads
$(document).ready(function(){

    console.log("Hello World")

    //When the document loads animate hero image upwards
    $(".hero-image").animate({top:'-=100'});

});



$(document).ready( ()=>{

    $(".text-show").hide()

    $(".carousel-control-next").on('click', () => {

        $(".slider-con").animate({
            width : "33%",
            'marginLeft' : "0%"
        },
        {duration : 2000})

        $(".text-show").delay(1800).show(0)

        });


});

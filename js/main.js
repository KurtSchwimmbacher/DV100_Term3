
$(document).ready( ()=>{
//=============================================================
// Home page

//When the document loads animate hero image upwards
    $(".hero-image").animate({top:'-=100'});

    // Hide text on 2nd carousel slide
    $(".text-show").hide()

    // animate middle col in 2nd carousel
    $(".carousel-control-next").on('click', () => {

        $(".slider-con").animate({
            width : "33%",
            'marginLeft' : "0%"
        },
        {duration : 2000})

        $(".text-show").delay(1800).show(0)

        });

// =============================================
// Browse page

        // Hide description text on card
        $("#descr").hide();


        $(".card").click( () =>{

            console.log("Hello Paul")
            //Toggle the price and description text
            $("#descr").toggle();
            $("#price").toggle();
        
            //resize plant image
            $(".card-img-top").toggleClass("small");
        });
});


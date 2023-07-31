// ===========================================================
// Variables

// ==========================================================
// Plants Array
const plantArr = [
    {
        name : "Fikus Tree",
        price : 350,
        description : "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space.",
        image : "plant1.png"
    },
    {
        name : "White Sprite Succulent",
        price : 200,
        description : "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
        image : "plant2.png"
    },
    {
        name : "Snake Plant",
        price : 400,
        description : "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
        image : "plant3.png"
    },
    {
        name : "Parlour Palm",
        price : 350,
        description : "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
        image : "plant4.png"
    },
    {
        name : "Japanese Maple",
        price : 1200,
        description : "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
        image : "plant5.png"
    }
];



// functions
// =============================================================================================================

// load all plants on website
loadPlants = () =>{
    
    for(let i =0; i < plantArr.length;i++){
        const plant = plantArr[i];

        console.log(plant);

        // load plants on browse page
        // ==========================================================================================================

        // Select the plants container and add current array plant to it
        $("#plantsContainer").append($("#plantCardTemplate").html());

        // Create a variable that contains the most recently added card
        let currentChild = $("#plantsContainer").children().eq(i+1);

        // Set the content for the current plant card from the plant array
        $(currentChild).find("#nameText").text(plant.name);
        $(currentChild).find("#price").text("R" + plant.price);
        $(currentChild).find("#descr").text(plant.description);
        $(currentChild).find(".card-img-top").attr("src","../assets/" + plant.image);

        // hide description text from the current card item
        $(currentChild).find("#descr").hide();
        // -------------------------------------------------------------------------------------------------------

        // load plants on Wishlist page
        // ==========================================================================================================

        // select the plant wishlist container and add current plant array into it
        $("#wishlist-plant-container").append($("#wishlist-table-template").html());

        // Create a bew variable for the most recently added row
        let newChild = $("#wishlist-plant-container").children().eq(i+1);

        // Set the content for the current plant into the table from the plant array
        // $(newChild).find("#tableRow").text(i+1);
        $(newChild).find(".table-img").attr("src","../assets/" + plant.image);
        $(newChild).find("#rowName").text(plant.name);
        $(newChild).find("#rowPrice").text("R" + plant.price);
    }

}



// --------------------------------------------------------------------------------------------

// Document ready to run functions
$(document).ready( ()=>{

// Home page
// ==========================================================================================================

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


// Browse page
// ==========================================================================================================

        // load the plant function
        loadPlants();

        $("#plantsContainer").on('click','.card', function (){
            //Toggle the price and description text


            $(this).find("#descr").toggle();
            $(this).find("#price").toggle();

            // Resize the card for additional content
            $(this).find($(".card-img-top")).toggleClass("small");
        });


//Wishlist Page 
// ==========================================================================================================

        // remove the items from the table
        $("#wishlist-plant-container").on('click','.remove', function (){
            //Toggle the price and description text
            
            console.log($(this).parent().attr("id"))
            
            $(this).parent().remove();
    });



});





// ==========================================================
// Plants Array
// ===========================================================
const plantArr = [
    {
        name : "Ficus Tree",
        price : 350,
        description : "filler description",
        image : "plant1.png"
    },
    {
        name : "White Sprite Succulent",
        price : 200,
        description : "filler description",
        image : "plant2.png"
    },
    {
        name : "Snake Plant",
        price : 400,
        description : "filler description",
        image : "plant3.png"
    },
    {
        name : "Parlour Palm",
        price : 350,
        description : "filler description",
        image : "plant4.png"
    },
    {
        name : "Japanese Maple",
        price : 1200,
        description : "filler description",
        image : "plant5.png"
    }
];



// functions


// load all plants on browse page
loadPlants = () =>{
    
    console.log(plantArr);

    for(let i =0; i < plantArr.length;i++){
        const plant = plantArr[i];

        console.log(plant);

        // Select the plants container and add current array plant to it
        $("#plantsContainer").append($("#plantCardTemplate").html());

        // Create a variable that contains the most recently added card
        let currentChild = $("#plantsContainer").children().eq(i+1);

        // Set the content for the current plant card from the plant array
        $(currentChild).find("#nameText").text(plant.name);
        $(currentChild).find("#price").text(plant.price);
        $(currentChild).find("#descr").text(plant.description);
        $(currentChild).find(".card-img-top").attr("src","../assets/" + plant.image);

        // hide description text from the current card item
        $(currentChild).find("#descr").hide();
    }

}





// -------------------------------------------------------------
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

        $("#plantsContainer").on('click',".card", () =>{
            //Toggle the price and description text
            $(this).find($("#descr")).toggle();
            $(this).find($("#price")).toggle();
        });

        // load the plant function
        loadPlants();

});

$(document).ready( () =>{
// ===============================================================================
// wishlist page

// on remove button click remove entry from table
    $(".remove").click( () =>{
        console.log($(".remove"));
        // $("#remove1").parent().remove();
    })
});



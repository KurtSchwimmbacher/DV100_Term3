// ===========================================================
// Variables

// ==========================================================
// Plants Array
const plantArr = [
    {
        name : "Ficus Tree",
        price : 350,
        description : "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space.",
        image : "plant1.png" ,
        lightAmount:"low",
        addedDate: "2023-03-25",
        onSale: true,
        origin: "Pretoria"
    },
    {
        name : "White Sprite Succulent",
        price : 200,
        description : "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
        image : "plant2.png",
        lightAmount:"bright",
        addedDate: "2023-05-01",
        onSale: false,
        origin: "Texas"
    },
    {
        name : "Snake Plant",
        price : 400,
        description : "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
        image : "plant3.png",
        lightAmount:"low",
        addedDate: "2023-07-14",
        onSale: true,
        origin: "Siberia"
    },
    {
        name : "Parlour Palm",
        price : 350,
        description : "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
        image : "plant4.png",
        lightAmount:"low",
        addedDate: "2023-07-04",
        onSale: false,
        origin: "China"
    },
    {
        name : "Japanese Maple",
        price : 1200,
        description : "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
        image : "plant5.png",
        lightAmount:"bright",
        addedDate: "2023-04-29",
        onSale: false,
        origin: "Japan"
    }
];

    let appliedFilter = "";
    let appliedSort = "date added";

// functions
// =============================================================================================================

// load all plants on website
function loadPlants (plantsToShow) {
    
    //Clear all elements in plants container before loading new ones
    $("#plantsContainer").empty();


    for(let i =0; i < plantsToShow.length;i++){
        const plant = plantsToShow[i];


        $.ajax({
            type:"GET",
            url:"https://api.openweathermap.org/data/2.5/weather?q=" + plant.origin + "&appid=8759d43fce621bb6239387dec2630ce5",
            success: function(data){
                temp = data;
                console.log(temp.main.temp);
            }
        }).done(function(){
            $(currentChild).find("#originTemp").text("Origin Temp: "+ Math.round(temp.main.temp-273));
        })



        // load plants on browse page
        // ==========================================================================================================

        // Select the plants container and add current array plant to it
        $("#plantsContainer").append($("#plantCardTemplate").html());

        // Create a variable that contains the most recently added card
        let currentChild = $("#plantsContainer").children().eq(i);

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
        let newChild = $("#wishlist-plant-container").children().eq(i);

        // Set the content for the current plant into the table from the plant array
        // $(newChild).find("#tableRow").text(i+1);
        $(newChild).find(".table-img").attr("src","../assets/" + plant.image);
        $(newChild).find("#rowName").text(plant.name);
        $(newChild).find("#rowPrice").text("R" + plant.price);
        $(newChild).find("#rowDescr").text(plant.description);

        // hide description from table
        $(newChild).find("#rowDescr").hide();
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
        filterSortPlants(plantArr);

        $("#plantsContainer").on('click','.card', function (){
            //Toggle the price and description text


            $(this).find("#descr").toggle();
            $(this).find("#price").toggle();

            // Resize the card for additional content
            $(this).find($(".card-img-top")).toggleClass("small");
        });


        
    // ==========================================================================
    // When Sort / filter is clicked it applies
    // ==========================================================================

        $("input[name= 'filterRadio']").click(function(){
            appliedFilter = $(this).attr('value');

            console.log(appliedFilter);
            filterSortPlants()
        });


        $("input[name = 'sortRadio']").click( function(){
            appliedSort = $(this).attr('value');

            console.log(appliedSort);
            filterSortPlants()
        });


    

        function filterSortPlants(){
            let filSorPlantArr = [];

            // Filter Plants

            if(appliedFilter){
                if(appliedFilter == "sale"){
                    filSorPlantArr = plantArr.filter(plant =>plant.onSale == true);
                }
                else{
                    filSorPlantArr = plantArr.filter(plant =>plant.lightAmount == appliedFilter);
                }
            }   else{
                filSorPlantArr = plantArr;
            }

            // sort
            if(appliedSort == "low to high"){
                // sort the plants from lowest to highest price
                filSorPlantArr = filSorPlantArr.sort((a,b) =>{
                    return a.price - b.price;
                });
            }
            else if(appliedSort == "date added"){
                //sort by added date, newest to oldest
                filSorPlantArr = filSorPlantArr.sort((a,b) =>{
                    let da = new Date(a.addedDate);
                    let db = new Date(b.addedDate);
                    
                    return db-da;
                });
            }
            else if(appliedSort == "alphabetically"){
                // sort by alphabetically, a to z
                filSorPlantArr = filSorPlantArr.sort((a,b) =>{
                    return a.name.localeCompare(b.name);    
                });

                console.log(filSorPlantArr);

            }


            loadPlants(filSorPlantArr);
        }

//Wishlist Page 
// ==========================================================================================================

        // remove the items from the table
        $("#wishlist-plant-container").on('click','.remove', function (){
            //remove selected row from the table     
            $(this).parent().remove();
    });

    // --------------------------------------------------------------------------------------------
    // hide and unhide description text from table
    $("#wishlist-plant-container").on('mouseenter','#rowName', function (){
        //Toggle the price and description text
        $(this).hide()
        $(this).parent().find("#rowDescr").show();
    });

    $("#wishlist-plant-container").on('mouseleave','#rowDescr', function (){
        //Toggle the price and description text
        $(this).hide();
        $(this).parent().find("#rowName").show();
    });

});



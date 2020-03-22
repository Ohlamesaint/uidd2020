let myCarousel = document.querySelector("#carouselExampleIndicators")
let indicators = document.querySelectorAll("ol.carousel-indicators li");


$(document).ready(function(){
    $(myCarousel).on("slide.bs.carousel", function(e){
        // console.log(e.to);
        console.log(indicators[e.from], indicators[e.to]);
        $(indicators[e.from]).toggleClass("indicated");
        $(indicators[e.to]).addClass("indicated");
    })
})

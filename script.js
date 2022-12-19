
$("#preview").animate({opacity:0,height: [ "toggle"]})
$("main").animate({opacity:1},2500)


$( "#logo" ).click(function() {
    $( "#nav" ).animate({
        opacity: 0,
        height: [ "toggle", "swing" ],
      }, 2500, function() {
        $("#preview").animate({
            opacity:1,
            height: [ "toggle", "swing" ],
        },2500)
      });
  })

$(".home-btn").click(()=>{
    $( "#preview" ).animate({
        opacity: 0,
        height: [ "toggle", "swing" ],
      }, 2500, function() {
        $("#nav")
        .animate({
            opacity:1,
            height: [ "toggle", "swing" ],
        },2500)
      });
    });
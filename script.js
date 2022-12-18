$( "#logo" ).click(function() {
    $( "#nav" ).animate({
      opacity: 0,
      height: [ "toggle", "swing" ],
    }, 2500, function() {
        $("#nav").attr("hidden",true)
        $("#preview").attr("hidden",false)
        .animate({
            opacity:1
        },2500)
    });
  });

$(".home-btn").click(()=>{
    $( "#preview" ).animate({
        opacity: 0,
        height: [ "toggle", "swing" ],
      }, 2500, function() {
        $("#preview").attr("hidden",true)
        $("#nav").attr("hidden",false)
        .animate({
            opacity:1,
            height: [ "toggle", "swing" ],
        },2500)
      });
    });
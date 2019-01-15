$(document).ready(function(){

  $("#toggler").click(function(){
    $("#toggleImg").toggle();
  })

  $("#toggler2").click(function(){
    $("#toggleFade").fadeToggle();
  })
  $("#toggler3").click(function(){
    $("#toggleSlide").slideToggle();
  })


  $("#greenButton").click(function(){
    $("body").removeClass();
    $("body").addClass("greenBackground");
  })

  $("#yellowButton").click(function(){
    $("body").removeClass();
    $("body").addClass("yellowBackground");
  })

  $("#redButton").click(function(){
    $("body").removeClass();
    $("body").addClass("redBackground");
  })

  $("#mysteryButton").click(function(){
    $(".card").append("???");
  })
})

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

})

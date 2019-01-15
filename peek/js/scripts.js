

$(document).ready(function(){

  $("#toggler").click(function(){
    $("#toggleImg").toggle();
  });

  $("#toggler2").click(function(){
    $("#toggleFade").fadeToggle();
  });

  $("#toggler3").click(function(){
    $("#toggleSlide").slideToggle();
  });

  $("#greenButton").click(function(){
    $("body").removeClass();
    $("body").addClass("greenBackground");
  });

  $("#yellowButton").click(function(){
    $("body").removeClass();
    $("body").addClass("yellowBackground");
  });

  $("#redButton").click(function(){
    $("body").removeClass();
    $("body").addClass("redBackground");
  });

  $("#mysteryButton").click(function(){
    $(".card").append("???");
  });

  $("#dontTouch").click(function(){
    alert("Dont touch that!")
  });


  $("#meow").click(function(){
    $("#petChat").append("<p class='cat-chat'>mrMittenz6879: MEOW!</p>");
    $("#petRow").prepend("<img class=`col` src='imgs/cat.png'>")
  });

  $("#woof").click(function(){
    $("#petChat").append("<p class='dog-blog'>anything4food420: woof ;)</p>");
    $("#petRow").prepend("<img class=`col` src='imgs/dog.png'>")
  });
});

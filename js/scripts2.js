$(document).ready(function() {

  $("button").click(function(){
    $(".tabcontent").hide();
  })

  $("button.click1").click(function() {
      $("#java").fadeToggle();

   });

  $("button.click2").click(function() {
      $("#Csp").fadeToggle();

   });


  $("button.click3").click(function() {
    $("#ruby").fadeToggle();

  });
});

$(document).ready(function() {

  alert("Interested in Programming?");
  alert("No options cuz, I know you wantcha ;)");
  alert("See the hidden tabs below for more info ^^");

    $(".btn1").click(function(event){
    $(".tabcontent").hide();
    event.preventDefault
});

    $(".btn1#click1").click(function(event) {
    $("#java").fadeToggle();
    event.preventDefault
});

    $(".btn1#click2").click(function(event) {
    $("#Csp").fadeToggle();
    event.preventDefault
});

  $(".btn1#click3").click(function(event) {
  $("#ruby").fadeToggle();

});

// back-end

// Survey
    $("#survey").submit(function(event) {
        event.preventDefault();
        var Questionaires = $("input:radio[name=choice]:checked").val();
        if (Questionaires === "one") {
          alert("C# is for You!");
        }
        else if (Questionaires === "two") {
          alert("you can do Java!");
        }
        else if (Questionaires === "three") {
          alert("you can do Ruby!");
        }


});

        $("#nexxt").click(function(event) {
          event.preventDefault();
          $("#frontpage").hide();
          $("#backpage").show();

});


// Sign up

$("form#infos").submit(function(event) {
event.preventDefault();

  var personInput = $("input#person").val();
  var addressInput = $("input#address").val();
  var emailInput = $("input#email").val();
  var phoneInput = $("input#phone").val();

  $("#person").text(personInput);
  $("#address").text(addressInput);
  $("#email").text(emailInput);
  $("#phone").text(phoneInput);


  });
});

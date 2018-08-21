$(document).ready(function() {

  alert("Interested in Programming?");
  alert("No options cuz, I know you wantcha ;)");
  alert("See the hidden tabs below for");
  alert("MAGIC!");

    $(".btn").click(function(event){
    $(".tabcontent").hide();
    event.preventDefault
});

    $(".btn#click1").click(function(event) {
    $("#java").fadeToggle();
    event.preventDefault
});

    $(".btn#click2").click(function(event) {
    $("#Csp").fadeToggle();
    event.preventDefault
});

  $(".btn#click3").click(function(event) {
  $("#ruby").fadeToggle();
  });
});


//
// back-end
// var personInput = $("input#person").val();
// var reasonInput = $("input#address").val();
// var dateInput = $("input#email").val();
// var stedInput = $("input#phone").val();
//
//   $(".name").text(nameInput);
//   $(".address").text(addressInput);
//   $(".email").text(emailInput);
//   $(".phone").text(phoneInput);
//
// });
//
// $("#goback").click(function(event) {
//   event.preventDefault()
//   $("#frontpage").show();
//   $("#backpage").hide();
//
// });
//
//
// $("#next").click(function(event) {
//   event.preventDefault()
//
//   $("#frontpage").hide();
//   $("#backpage").show();
//
// });
//
//
//     // back-end
//
//   $(document).ready(function() {
//     $("#infos").submit(function(event)  {
//     event.preventDefault()
//
//     $("#survey").click(function(event) {
//         event.preventDefault();
//         var Questionaires = $("input:radio[name=choice]:checked").val();
//         if (Question1 === "one") {
//           alert("C# is for You!");
//         }
//         else if (Question2 === "two") {
//           alert("you can do Java!");
//         }
//         else if (Question3 === "three") {
//           alert("you can do Ruby!");
//         }
//         else ( Question4 === null) {
//           alert("Please pick one");
//         }
//           alert("Click the link below for an awesome school!");
//         }
//
//   });
// });

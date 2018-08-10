$(document).ready(function() {
  $("#infos").onclick(function(event) {
  prevent.Eventdefault
  console.log ("IT WORKS");
  var personInput = $("input#person").val();
  var reasonInput = $("input#address").val();
  var dateInput = $("input#email").val();
  var stedInput = $("input#phone").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".email").text(emailInput);
    $(".phone").text(phoneInput);


});

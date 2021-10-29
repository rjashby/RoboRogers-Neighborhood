// UI Logic //
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault()
    $("#results").hide();
    const yourNumber = parseInt($("input#formNumber").val());
    if ($("#formNumber").val() == "") {
      return ("")
      alert("Please Enter A Number");
   
    $("#results").show();
    }
  });
});

// Business Logic //
function roboRogers(number) {
  const responseList = ["Beep!", "Boop!", "Won't you be my neighbor?"]
  const numberArray = number.split("");
  let rogersResponse = [];
  if (number === 0) {
    return 0;
  }
}

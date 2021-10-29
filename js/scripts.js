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

// const responseList = ["Beep!", "Boop!", "Won't you be my neighbor?"]//

// if (number === 0) {
  return 0; //

// Business Logic //
function roboRogers(number) {
  const responsiveNumbers = [1, 2, 3];
  const numberArray = number.toString().split("");
  let rogersResponse = [];
  console.log(rogersResponse)
  numberArray.forEach(function(number) {
    if (responsiveNumbers.includes(number)) {
      rogersResponse.push("Beep!");
    } else {
      rogersResponse.push(number);
    }
    return rogersResponse.join("");
    console.log(rogersResponse)
  });
};
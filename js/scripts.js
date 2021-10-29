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


// if (number === 0) {
  return 0; //

// Business Logic //
function roboRogers(input) {
  const responseList = ["Beep!", "Boop!", "Won't you be my neighbor?"]
  if (input === 0) {
    return 0;
  }
  if (input == 1) {
    return responseList[0];
  }
  if (input == 2) {
    return responseList[1];
  }
  if (input == 3) {
    return responseList[2];
  }
  const responsiveNumbers = [1, 2, 3];
  let splitNumbers = input.toString().split("");
  let numberLength = 0;
  let rogersResponse = [];
  console.log(splitNumbers)
  splitNumbers.forEach(function(number) {
    if (number.includes(responsiveNumbers)) {
      rogersResponse.push("Beep!");
    } else {
      rogersResponse.push(number);
    }
    return rogersResponse.concat("");
    console.log(rogersResponse)
  });
};
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
  if (input === [4, 5 ,6, 7, 8, 9]) {
    return input
  }
  const responsiveNumbers = ["1", "2", "3"];
  const splitNumbers = input.toString().split("");
  let rogersResponse = [];
  console.log(splitNumbers)
  splitNumbers.forEach(function(number) {
    if (responsiveNumbers[0].includes(number)) {
      rogersResponse.push(responseList[0]);
    } else if (responsiveNumbers[1].includes(number)) {
      rogersResponse.push(responseList[1]);
    } else if (responsiveNumbers[2].includes(number)) {
      rogersResponse.push(responseList[2]);
    } else {
      rogersResponse.push(number)
    }
  });
  return rogersResponse.join(" ");
};
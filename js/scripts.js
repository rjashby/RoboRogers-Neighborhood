$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault()
    $("#results").hide();
    let yourNumber = parseInt($("input#formNumber").val());
    console.log(yourNumber); 
    function roboRogers(number) {
      console.log(number);
      let numberArray = [];
        for (let index = 0; index <= number; index ++) {
          numberArray.push(index)
        };
        console.log(numberArray);
      const responseList = ["Beep!", "Boop!", "Won't you be my neighbor?"]
      const responsiveNumbers = ["1", "2", "3"];
      let splitNumbers = numberArray.toString().split("");
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
          rogersResponse.push(number);
          $("#final").text(rogersResponse);
        };
      });
      let finalArray = rogersResponse.join(" ")
      return finalArray;
      };
    if ($("#formNumber").val() == "") {
      $("#results").hide();
      alert("Please Enter A Number");
    } else {
      $("#results").fadeIn();
    }
    roboRogers(yourNumber);  
  });
});
// UI Logic //
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault()
    $("#results").hide();
    const yourNumber = $("input#formNumber").val();
    console.log(yourNumber);
      if ($("#formNumber").val() == "") {
        $("#results").hide();
        alert("Please Enter A Number");
      } else {
        $("#results").fadeIn();
      }
      function roboRogers(yourNumber) {
        let numberArray = [];
          for (let index = 0; index <= yourNumber; index ++) {
            numberArray.push(index)
          };
          numberArray;
          console.log(numberArray);
        const responseList = ["Beep!", "Boop!", "Won't you be my neighbor?"]
        const responsiveNumbers = ["1", "2", "3"];
        let splitNumbers = numberArray.toString().split("");
        let rogersResponse = [];
        console.log(splitNumbers)
        if (splitNumbers === 0) {
          return 0;
        };
        if (splitNumbers == 1) {
          return responseList[0];
        };
        if (splitNumbers == 2) {
          return responseList[1];
        };
        if (splitNumbers == 3) {
          return responseList[2];
        };
        if (splitNumbers === [4, 5 ,6, 7, 8, 9]) {
          return yourNumber
        };
        splitNumbers.forEach(function(number) {
          if (responsiveNumbers[0].includes(number)) {
            rogersResponse.push(responseList[0]);
          } else if (responsiveNumbers[1].includes(number)) {
            rogersResponse.push(responseList[1]);
          } else if (responsiveNumbers[2].includes(number)) {
            rogersResponse.push(responseList[2]);
          } else {
            rogersResponse.push(number)
          };
        });
        return rogersResponse.join(" ");
      };
  });
});
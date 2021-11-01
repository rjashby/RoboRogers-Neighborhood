function countUp(number) {
  let numberArray = [];
  for (let index = 0; index <= number; index ++) {
    numberArray.push(index)
 };
 numberArray;
 console.log(numberArray);
};

function roboRogers(yourNumber) {
  console.log(roboRogers);
  const responseList = ["Beep!", "Boop!", "Won't you be my neighbor?"]
  const responsiveNumbers = ["1", "2", "3"];
  let splitNumbers = yourNumber.toString().split("");
  let rogersResponse = [];
  console.log(splitNumbers)
  if (yourNumber === 0) {
    return 0;
  };
  if (yourNumber == 1) {
    return responseList[0];
  };
  if (yourNumber == 2) {
    return responseList[1];
  };
  if (yourNumber == 3) {
    return responseList[2];
  };
  if (yourNumber === [4, 5 ,6, 7, 8, 9]) {
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



function roboRogers(yourNumber) {
  console.log(yourNumber);
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

if (splitNumbers === (1) && (3)) {
  return 2;
}


// all together //
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault()
    $("#results").hide();
    const yourNumber = $("input#formNumber").val();
    console.log(yourNumber); 
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
      if ($("#formNumber").val() == "") {
        $("#results").hide();
        alert("Please Enter A Number");
      } else {
        $("#results").fadeIn();
        
      }
  });
});

//$("#final").html(rogersResponse);
function countUp(number) {
  let numberArray = [];
  for (let index = 0; index <= number; index ++) {
    numberArray.push(index)
 };
 numberArray;
 console.log(numberArray);
};

function roboRogers(number) {
  let numberArray = [];
    for (let index = 0; index <= number; index ++) {
      numberArray.push(index)
    };
    console.log(numberArray);
  const responseList = ["Beep!", "Boop!", "Won't you be my neighbor?"]
  const responsiveNumbers = ["1", "2", "3", "13", "21", "32"];
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
    };
  });
  let finalArray = rogersResponse.join(" ")
  $("#final").text(finalArray)
  return finalArray;
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
    let yourNumber = parseInt($("input#formNumber").val());
    console.log(yourNumber); 
    if ($("#formNumber").val() == "") {
      $("#results").hide();
      alert("Please Enter A Number");
    };
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
     if ($("#formNumber").val() == number) {
      $("#results").fadeIn();
      $("#final").text(finalArray)
    }
    roboRogers(yourNumber);  
  });
});

// Current Playground
function roboRogers(number) {
  let numberArray = [];
    for (let index = 0; index <= number; index ++) {
      numberArray.push(index)
    };
    console.log(numberArray);
  const responseList = ["Beep!", "Boop!", "Won't you be my neighbor?"]
  const responsiveNumbers = ["1", "2", "3", "1 , 3", "2 , 1", "3 , 2"];
  let splitNumbers = numberArray.toString().split("");
  let rogersResponse = [];
  console.log(splitNumbers)
  splitNumbers.forEach(function(number) {
    if (responsiveNumbers[3].includes(number)) {
    rogersResponse.push(responseList[2]);
  } else if (responsiveNumbers[4].includes(number)) {
    rogersResponse.push(responseList[1]);
  } else if (responsiveNumbers[5].includes(number)) {
    rogersResponse.push(responseList[2]);
    } else if (responsiveNumbers[0].includes(number)) {
      rogersResponse.push(responseList[0]);
    } else if (responsiveNumbers[1].includes(number)) {
      rogersResponse.push(responseList[1]);
    } else if (responsiveNumbers[2].includes(number)) {
      rogersResponse.push(responseList[2]);
    
    } else {
      rogersResponse.push(number);
    };
  });
  let finalArray = rogersResponse.join(" ")
  $("#final").text(finalArray)
  return finalArray;
};

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault()
    $("#results").hide();
    let yourNumber = parseInt($("input#formNumber").val());
    console.log(yourNumber); 
    if ($("#formNumber").val() == "") {
      $("#results").hide();
      alert("Please Enter A Number");
    } else {
      $("#results").fadeIn();
    }
    roboRogers(yourNumber);  
  });
});


// Business Logic

function countUp(number) {
  let numberArray = [];
  for (let index = 0; index <= number; index ++) {
    numberArray.push(index)
 };
 numberArray;
 console.log(numberArray);
};

function roboRogers(number) {
  let numberArray = [];
    for (let index = 0; index <= number; index ++) {
      numberArray.push(index)
    };
    console.log(numberArray);
  const responseList = ["Beep!", "Boop!", "Won't you be my neighbor?"]
  const responsiveNumbers = ["1", "2", "3", "13", "21", "32"];
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
    };
  });
  let finalArray = rogersResponse.join(" ")
  return finalArray;
};

// UI Logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault()
    $("#results").hide();
    let yourNumber = parseInt($("input#formNumber").val());
    console.log(yourNumber); 
    if ($("#formNumber").val() == "") {
      $("#results").hide();
      alert("Please Enter A Number");
    } else {
      $("#results").fadeIn();
    }
    roboRogers(yourNumber);  
  });
});

//new
function roboRogers(number) {
  let numberArray = [];
    for (let index = 0; index <= number; index ++) {
      numberArray.push(index)
    };
    console.log(numberArray);
  const responseList = ["Beep!", "Boop!", "Won't you be my neighbor?"]
  const responsiveNumbers = ["1", "2", "3"];
  let rogersResponse = [];
  numberArray.forEach(function(index) {
    if (numberArray[index].toString().includes("3")) {
      rogersResponse.push(responseList[2]);
      } else if (numberArray[index].toString().includes("2")) {
        rogersResponse.push(responseList[1]);
      } else if (numberArray[index].toString().includes("1")) {
        rogersResponse.push(responseList[0]);
      } else {
        rogersResponse.push(index);
      };
  });
  let finalArray = rogersResponse.join(" ")
  $("#final").text(finalArray)
  return finalArray;
};

//old 
function roboRogers(number) {
  let numberArray = [];
    for (let index = 0; index <= number; index ++) {
      numberArray.push(index)
    };
    console.log(numberArray);
  const responseList = ["Beep!", "Boop!", "Won't you be my neighbor?"]
  const responsiveNumbers = ["1", "2", "3", "13", "21", "32"];
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
    };
  });
  let finalArray = rogersResponse.join(" ")
  $("#final").text(finalArray)
  return finalArray;
};
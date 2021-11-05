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
  let finalArray = rogersResponse.join(", ")
  //$("#final").text(finalArray)
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
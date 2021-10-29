// UI Logic //
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault()
    $("#results").hide();
    const yourNumber = parseInt($("input#formNumber").val());
    if ($("#formNumber").val() == "") {
      return ("")
      $("#results").show();
      alert("Please Enter A Number");
    } else ($("#formNumber").val() ==  {
      return (number)
    });
  });
});

// Business Logic //
function roboRogers(number) {
  if (number === 0) {
    return 0;
  }
}

var input1 = document.getElementById("calcIn");
var input2 = document.getElementById("calcOut");
var tempValue;
var formula = document.getElementById("calcFormula");

function toggleAndClear() {
    toggleValues();
    clearInput();
}

function toggleValues() {
  tempValue = input1.placeholder;
  input1.placeholder = input2.placeholder;
  input2.placeholder = tempValue;
}

function clearInput() {
    input1.value = "";
    input2.value = "";
    formula.value = "";
}

function calculateTemp() {
    var inputTemp = parseFloat(document.getElementById("calcIn").value);
    var conversionType = input1.placeholder;
    var result;
    console.log(conversionType);
  
    if (conversionType == "Celsius" && input1.value != "") {
      result = (inputTemp * 9/5) + 32;
      console.log("work");
      var inputElement = document.getElementById("calcOut"); 
      inputElement.value = result;
      formula.value = `${input2.value} °C = (${input1.value} °F - 32) * 5/9`
    } else if (conversionType == "Fahrenheit" && input1.value != "") {
      result = parseInt((inputTemp - 32) * 5/9);
      console.log("not working");
      var inputElement = document.getElementById("calcOut"); 
      inputElement.value = result;
      formula.value = `${input2.value} °F = (${input1.value} °C * 9/5) + 32`
    } else {
      console.log("worksss")
        return
    }
  }
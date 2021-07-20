//Calculate Tip
document.getElementById("b5_value").addEventListener("click", b5_Functions);
document.getElementById("b10_value").addEventListener("click", b10_Functions);
document.getElementById("b15_value").addEventListener("click", b15_Functions);
document.getElementById("b25_value").addEventListener("click", b25_Functions);
document.getElementById("b50_value").addEventListener("click", b50_Functions);


function b5_Functions(){
	alert();
	b5_Tip();
}
function b10_Functions(){
  alert();
  b10_Tip()
}
function b15_Functions(){
  alert();
  b15_Tip()
}
function b25_Functions(){
  alert();
  b25_Tip()
}
function b50_Functions(){
  alert();
  b50_Tip()
}


function alert(){
	var billAmt = document.getElementById("inputAmount").value;
	 var numOfPeople = document.getElementById("check_Input").value;

	   //validate input
  if (billAmt =="" || numOfPeople == "") {
    document.getElementById("my_error").style.display = "block";
    document.getElementById("inputAmount").style.borderColor = "red";
    document.getElementById("check_Input").style.borderColor = "red";
    return false;
  }
}
function b5_Tip() {
  var billAmt = document.getElementById("inputAmount").value;
  var numOfPeople = document.getElementById("check_Input").value;
  //Calculate Tip
  var bill_per_person = billAmt / numOfPeople;
  var tip_amount = (bill_per_person * 5) / 100;
  var total_person = bill_per_person + tip_amount;

   //round to two decimal places
  tip_amount = Math.round(tip_amount * 100) / 100;
    //next line allows us to always have two digits after decimal point
  tip_amount = tip_amount.toFixed(2);

  total_person = Math.round(total_person*100)/100;
  total_person = total_person.toFixed(2);

  //Output result
  document.getElementById("display_tip").style.display = "none";
  document.getElementById("display_total").style.display ="none";
  document.getElementById("tipAmount").innerHTML = "$" + tip_amount;
  document.getElementById("totalAmount").innerHTML = "$" + total_person;
  document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";

}

function  b10_Tip(){
    var billAmt = document.getElementById("inputAmount").value;
  var numOfPeople = document.getElementById("check_Input").value;
  //Calculate Tip
  var bill_per_person = billAmt / numOfPeople;
  var tip_amount = (bill_per_person * 10) / 100;
  var total_person = bill_per_person + tip_amount;

   //round to two decimal places
  tip_amount = Math.round(tip_amount * 100) / 100;
    //next line allows us to always have two digits after decimal point
  tip_amount = tip_amount.toFixed(2);

  total_person = Math.round(total_person*100)/100;
  total_person = total_person.toFixed(2);

  //Output result
  document.getElementById("display_tip").style.display = "none";
  document.getElementById("display_total").style.display ="none";
  document.getElementById("tipAmount").innerHTML = "$" + tip_amount;
  document.getElementById("totalAmount").innerHTML = "$" + total_person;
  document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";
}
function  b15_Tip(){
    var billAmt = document.getElementById("inputAmount").value;
  var numOfPeople = document.getElementById("check_Input").value;
  //Calculate Tip
  var bill_per_person = billAmt / numOfPeople;
  var tip_amount = (bill_per_person * 15) / 100;
  var total_person = bill_per_person + tip_amount;

   //round to two decimal places
  tip_amount = Math.round(tip_amount * 100) / 100;
    //next line allows us to always have two digits after decimal point
  tip_amount = tip_amount.toFixed(2);

  total_person = Math.round(total_person*100)/100;
  total_person = total_person.toFixed(2);

  //Output result
  document.getElementById("display_tip").style.display = "none";
  document.getElementById("display_total").style.display ="none";
  document.getElementById("tipAmount").innerHTML = "$" + tip_amount;
  document.getElementById("totalAmount").innerHTML = "$" + total_person;
  document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";
}
function  b25_Tip(){
    var billAmt = document.getElementById("inputAmount").value;
  var numOfPeople = document.getElementById("check_Input").value;
  //Calculate Tip
  var bill_per_person = billAmt / numOfPeople;
  var tip_amount = (bill_per_person * 25) / 100;
  var total_person = bill_per_person + tip_amount;

   //round to two decimal places
  tip_amount = Math.round(tip_amount * 100) / 100;
    //next line allows us to always have two digits after decimal point
  tip_amount = tip_amount.toFixed(2);

  total_person = Math.round(total_person*100)/100;
  total_person = total_person.toFixed(2);

  //Output result
  document.getElementById("display_tip").style.display = "none";
  document.getElementById("display_total").style.display ="none";
  document.getElementById("tipAmount").innerHTML = "$" + tip_amount;
  document.getElementById("totalAmount").innerHTML = "$" + total_person;
  document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";
}
function  b50_Tip(){
    var billAmt = document.getElementById("inputAmount").value;
  var numOfPeople = document.getElementById("check_Input").value;
  //Calculate Tip
  var bill_per_person = billAmt / numOfPeople;
  var tip_amount = (bill_per_person * 50) / 100;
  var total_person = bill_per_person + tip_amount;

   //round to two decimal places
  tip_amount = Math.round(tip_amount * 100) / 100;
    //next line allows us to always have two digits after decimal point
  tip_amount = tip_amount.toFixed(2);

  total_person = Math.round(total_person*100)/100;
  total_person = total_person.toFixed(2);

  //Output result
  document.getElementById("display_tip").style.display = "none";
  document.getElementById("display_total").style.display ="none";
  document.getElementById("tipAmount").innerHTML = "$" + tip_amount;
  document.getElementById("totalAmount").innerHTML = "$" + total_person;
  document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";
}

var custom_input = document.getElementById("custom_input");

custom_input.addEventListener("keypress", function(event) {
    if (event.keyCode == 13){
      alert(); 
  var billAmt = document.getElementById("inputAmount").value;
  var numOfPeople = document.getElementById("check_Input").value;
  var custom_num = document.getElementById("custom_input").value;

  var bill_per_person = billAmt / numOfPeople;
  var tip_amount = (bill_per_person * custom_num) / 100;
  var total_person = bill_per_person + tip_amount;
  //round to two decimal places
  tip_amount = Math.round(tip_amount * 100) / 100;
    //next line allows us to always have two digits after decimal point
  tip_amount = tip_amount.toFixed(2);

  total_person = Math.round(total_person*100)/100;
  total_person = total_person.toFixed(2);

  //Output result
  document.getElementById("display_tip").style.display = "none";
  document.getElementById("display_total").style.display ="none";
  document.getElementById("tipAmount").innerHTML = "$" + tip_amount;
  document.getElementById("totalAmount").innerHTML = "$" + total_person;
  document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(172, 67%, 45%)";

    }
       
});


function clr(){
	document.getElementById("inputAmount").value = "";
	document.getElementById("check_Input").value = "";
  document.getElementById("custom_input").value = "";
  document.getElementById("tipAmount").innerHTML = " ";
  document.getElementById("totalAmount").innerHTML = " ";
    document.getElementById("display_tip").style.display = "block";
  document.getElementById("display_total").style.display ="block";
	document.getElementById("delete").style.color = "hsl(183, 100%, 15%)";
  document.getElementById("delete").style.background = "hsl(183, 100%, 10%)";
  document.getElementById("my_error").style.display = "none";
    document.getElementById("inputAmount").style.borderColor = "hsl(172, 67%, 45%) ";
    document.getElementById("check_Input").style.borderColor = "hsl(172, 67%, 45%)";
}

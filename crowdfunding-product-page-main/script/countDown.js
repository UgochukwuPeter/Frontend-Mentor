	//Set the date we're counting down to
	var countDownDate = new Date("May 30, 2021 15:37:25").getTime(); //set time to the point of ending

	//update the count down every 1 second 
	var x = setInterval(function(){

		//get today's date and time
		var now = new Date().getTime();

		//find the distance between now and the countdown date
		var distance = countDownDate - now;

		//Time Calculations for days, hours, minutes and seconds

		var days = Math.floor(distance/(1000 * 60 * 60 * 24)); //distance/86400000;

		//Display the result in the element with id = "demo"

		document.getElementById("timer").innerHTML = days ;

		//If the count down is finished, wrtie some text

		if(distance < 0){
			clearInterval(x);
			document.getElementById("timer").innerHTML = "EXPIRED";
		}
	}, 1000);
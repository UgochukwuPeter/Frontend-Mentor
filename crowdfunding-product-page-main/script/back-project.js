//Get the modal, Get the button that opens the modal and get the close button
	var modaling = document.getElementById("myModal-2");

	var btning = document.getElementById("myBtn-2");

	var spaning = document.getElementsByClassName("close-2")[0];

	//when the user clicks on the button open the modal
	btning.onclick = function(){
		modaling.style.display = "block";
	}

	//when the user clicks on close (x) close the modal
	spaning.onclick = function(){
		modaling.style.display = "none";
	}

	//when the user clicks anywhere outside of the modal,close it
	window.onclick = function(event){
		if(event.target != modal){
			modal.style.display == "none";
		}
	}
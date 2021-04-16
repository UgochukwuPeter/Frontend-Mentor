//Get the modal, Get the button that opens the modal and get the close button
	var modal = document.getElementById("myModal");

	var btn = document.getElementById("myBtn");

	var span = document.getElementsByClassName("closeUp")[0];

	//when the user clicks on the button open the modal
	btn.onclick = function(){
		modal.style.display = "block";
		span.style.display = "block";
		btn.style.display = "none";
	}

	//when the user clicks on close (x) close the modal
	span.onclick = function(){
		modal.style.display = "none";
		span.style.display = "none";
		btn.style.display = "block";
	}

	//when the user clicks anywhere outside of the modal,close it
	window.onclick = function(event){
		if(event.target != modal){
			modal.style.display == "none";
		}
	}
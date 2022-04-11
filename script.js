var cssText = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("gradient");

var vertical = document.getElementById("vertical");

function updateBackground(){
	if (vertical.checked == true) {
		var direction = "right";
	} else {
		var direction  = "bottom"
	}

	body.style.background = "linear-gradient(to " 
					+ direction 
					+ ", " 
					+ color1.value 
					+ ", " 
					+ color2.value 
					+ ")";

	cssText.textContent = body.style.background + ";";
}

updateBackground()

color1.addEventListener("input", updateBackground)

color2.addEventListener("input", updateBackground)
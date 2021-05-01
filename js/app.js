let mainMenu = document.querySelector("#menu");

let burgerMenu = document.querySelector("#menu-burger")

/* Clic sur le menu burger*/

// Vérifie si l'événement touchstart existe et est le premier déclenché
let clickedEvent = "click"; 
window.addEventListener('touchstart', function detectTouch() {
	clickedEvent = "touchstart"; 
	window.removeEventListener('touchstart', detectTouch, false);
}, false);

// Création d'un "toggle class" 
burgerMenu.addEventListener(clickedEvent, function(evt) {
	console.log(clickedEvent);
	// Modification du menu burger
	if(!this.getAttribute("class")) {
		this.setAttribute("class", "clicked");
	} else {
		this.removeAttribute("class");
	}
	
	// Créé l'effet pour le menu slide 
	if(mainMenu.getAttribute("class") != "visible") {
		mainMenu.setAttribute("class", "visible");
	} else {
		mainMenu.setAttribute("class", "invisible");
	}
}, false);
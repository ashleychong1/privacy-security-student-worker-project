(function() {
	"use strict";

	// Add Scripts Here

	function openMenu() {
		var x = document.getElementById("mobile-home-container");
		if (x.style.display === "none") {
		  x.style.display = "flex";
		} else {
		  x.style.display = "none";
		}
		var x = document.getElementById("mobile-faq-container");
		if (x.style.display === "none") {
		  x.style.display = "flex";
		} else {
		  x.style.display = "none";
		}
	}

})();
(function () { // Making these variables and stuff not global, that would be bad :(

	// Define some global variables that are used everywhere in Unillax
	var unillaxContainers, unillaxElements, ticking;

	// Updates variables with relevant DOM information
	function updateDOM() {
		unillaxContainers = document.getElementsByClassName("unillax-container");
		unillaxElements = document.getElementsByClassName("unillax-element");
	}

	// If called, an animation frame will be requested if not done so already in the same event
	function requestTick() {
		if (!ticking) {
			requestAnimationFrame(updatePositions);
		}
		ticking = true;
	}

	// Updates positions of all elements
	function updatePositions() {

		// Resets ticking
		ticking = false;

		// Updates window size
		var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;

		// Selects and loops through all Unillax containers
		for (var i = 0; i < unillaxContainers.length; i++) {

			// Sets current container and children as variables
			var container = unillaxContainers[i];
			var children = container.children;

			// Sets a variable for the element's dimensions
			var elementWidth = container.offsetWidth;
			var elementHeight = container.offsetHeight;

			// Sets a variable for the element's position from top relative to the viewport
			var elementOffsetLeft = container.getBoundingClientRect().left;
			var elementOffsetTop = container.getBoundingClientRect().top;

			// Assign `data-unillax-position-x` to a variable
			var dataUnillaxPositionX = container.getAttribute("data-unillax-position-x");
			if (dataUnillaxPositionX) {
				var unillaxPositionX = dataUnillaxPositionX;
			} else {
				var unillaxPositionX = 0;
			}

			// Assign `data-unillax-position-y` to a variable
			var dataUnillaxPositionY = container.getAttribute("data-unillax-position-y");
			if (dataUnillaxPositionY) {
				var unillaxPositionY = dataUnillaxPositionX;
			} else {
				var unillaxPositionY = 0;
			}

			// Assign `data-unillax-depth` to a variable
			var dataUnillaxDepth = container.getAttribute("data-unillax-depth");
			if (dataUnillaxDepth) {
				var depth = dataUnillaxDepth;
			} else {
				var depth = 2;
			}

			// Calculates final transformations
			var transformX = (-elementOffsetLeft / depth) + (unillaxPositionX / 2) * -(windowWidth - elementWidth);
			var transformY = (-elementOffsetTop / depth) + (unillaxPositionY / 2) * (windowHeight - elementHeight);

			// Calculates final transformations for backgrounds elements
			var transformBackgroundX = (-elementOffsetLeft / depth);
			var transformBackgroundY = (-elementOffsetTop / depth);

			// Transforms children
			for (var j = 0; j < children.length; j++) {
				if (children[j].className !== "unillax-background") {
					children[j].style.transform = "translate(" + transformX + "px, " + transformY + "px)";
				} else if (children[j].className === "unillax-background") {
					children[j].style.transform = "translate(" + transformBackgroundX * 1.5 + "px, " + transformBackgroundY * 1.5 + "px)";
				}
			}
		}
	}

	// Updates the variables that directly access the DOM fist
	updateDOM();

	// Adds event listeners to request tick
	window.addEventListener("scroll", requestTick);
	window.addEventListener("resize", requestTick);

	// Calls animation frame once to start
	requestAnimationFrame(updatePositions);

})();
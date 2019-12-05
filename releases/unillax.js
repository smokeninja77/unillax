(function () { // Making these variables and stuff not global, that would be bad :(

	// Define some global variables that are used everywhere in Unillax
	var unillaxContainers, unillaxElements;

	// Appends a stylesheet for certain specialty elements
	function applyStyles() {

		// Creates the stylesheet element
		var styles = document.createElement("style");

		// Sets the values of the stylesheet to make the unillax-background elements work properly
		styles.innerHTML = `
            .unillax-container {
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                overflow: hidden
            }
            .unillax-background {
                width: 100%;
                height: 100vh;
                object-fit: cover;
            }
            .unillax-overlay {
                width: 100%;
                height: 100%;
                position: relative;
                margin-top: -100vh;
            }
            .unillax-cropped{
                overflow: hidden;
            }
		`;

		// Adds the stylesheet 
		document.head.appendChild(styles);
	}

	// Updates variables with relevant DOM information
	function updateDOM() {
		unillaxContainers = document.getElementsByClassName("unillax-container"), unillaxElements = document.getElementsByClassName("unillax-element");
	}

	// Updates positions of all elements
	function updatePositions() {

		// Sets scroll positions
		var scrollXPosition = window.pageXOffset;
		var scrollYPosition = window.pageYOffset;

		// Sets window dimensions
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
			// Assign `data-unillax-position-y` to a variable
			var dataUnillaxPositionY = container.getAttribute("data-unillax-position-y");

			// Assign `data-unillax-depth` to a variable
			var dataUnillaxDepth = container.getAttribute("data-unillax-depth");

			// Sets depth
			if (dataUnillaxDepth) {
				var depth = dataUnillaxDepth;
			} else {
				var depth = 1;
			}

			// Calculates final transformations
			var transformX = scrollXPosition / depth;
			var transformY = -elementOffsetTop / depth;

			// Transforms children
			for (var j = 0; j < children.length; j++) {
				children[j].style.transform = "translate(" + transformX + "px, " + transformY + "px)";
			}

		}
		window.requestAnimationFrame(updatePositions);
	}

	function updateAnimation() {
		window.requestAnimationFrame(updatePositions);
	}
	// Initially updates DOM variables
	applyStyles();
	updateDOM();

	window.addEventListener("scroll", updateAnimation);

})();
(function () {

    // Defines all undefined variables
    var unillaxContainer, unillaxElement, unillaxScrollHeight, depth, position, topDistance, insideOffset;

    // Applies stylesheet to body
    var styles = document.createElement("style");
    styles.innerHTML = `.unillax-container{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.unillax-background{width:100%;height:100vh;object-fit:cover;}.unillax-overlay{width:100%;height:100%;position:relative;margin-top:-100vh;}.unillax-cropped{overflow:hidden;}`;
    document.body.appendChild(styles);

    // Updates vaariables with relevant DOM information
    function updateDOM() {
        unillaxContainer = document.getElementsByClassName("unillax-container");
        unillaxElement = document.getElementsByClassName("unillax-element");
    }

    // Updates positions of all elements
    function updatePositions() {
        unillaxScrollHeight = window.pageYOffset;

        // Selects and loops through all Unillax containers
        for (var i = 0; i < unillaxContainer.length; i++) {

            // Updates 'topDistance' based on when the element should reach the center
            if (unillaxContainer[i].getAttribute("data-unillax-position") === "bottom") {
                topDistance = window.pageYOffset + unillaxContainer[i].getBoundingClientRect().top + window.innerHeight - unillaxContainer[i].offsetHeight;
            } else if (unillaxContainer[i].getAttribute("data-unillax-position") === "middle") {
                topDistance = window.pageYOffset + unillaxContainer[i].getBoundingClientRect().top + (window.innerHeight / 2) - (unillaxContainer[i].offsetHeight / 2);
            } else {
                topDistance = window.pageYOffset + unillaxContainer[i].getBoundingClientRect().top;
            }

            // Sets depth
            if (unillaxContainer[i].getAttribute("data-unillax-depth")) {
                depth = unillaxContainer[i].getAttribute("data-unillax-depth");
            } else {
                depth = 2;
            }

            // Sets the `transform: translateY();` property on all children of the Unillax container
            for (var j = 0; j < unillaxContainer[i].children.length; j++) {
                insideOffset = (unillaxScrollHeight / depth) - (topDistance / depth);
                unillaxContainer[i].children[j].style.transform = "translateY(" + insideOffset + "px)";
            }

            // Resets any background element position without the changes from `data-unillax-position`
            for (var z = 0; z < unillaxContainer[i].getElementsByClassName("unillax-background").length; z++) {
                topDistance = window.pageYOffset + unillaxContainer[i].getBoundingClientRect().top;
                insideOffset = (unillaxScrollHeight / depth) - (topDistance / depth);
                unillaxContainer[i].getElementsByClassName("unillax-background")[z].style.transform = "translateY(" + insideOffset + "px)";
            }

            for (var j = 0; j < unillaxContainer[i].getElementsByClassName("unillax-overlay").length; j++) {
                unillaxContainer[i].getElementsByClassName("unillax-overlay")[j].classList.add("unillax-element");
            }
        }

        // Selects and loops through all Unillax elements
        for (var i = 0; i < unillaxElement.length; i++) {
            if (unillaxElement[i].getAttribute("data-unillax-position") === "bottom") {
                topDistance = window.pageYOffset + unillaxElement[i].getBoundingClientRect().top + window.innerHeight;
            } else if (unillaxElement[i].getAttribute("data-unillax-position") === "middle") {
                topDistance = window.pageYOffset + unillaxElement[i].getBoundingClientRect().top - (window.innerHeight / 2) + (unillaxElement[i].offsetHeight / 2);
            } else {
                topDistance = window.pageYOffset + unillaxElement[i].getBoundingClientRect().top;
            }
            if (unillaxElement[i].getAttribute("data-unillax-depth")) {
                depth = unillaxElement[i].getAttribute("data-unillax-depth");
            } else {
                depth = 2;
            }
            insideOffset = (unillaxScrollHeight / depth) - (topDistance / depth);
            unillaxElement[i].style.transform = "translateY(" + insideOffset + "px)";
        }
    }

    // Initially updates DOM variables
    updateDOM();

    // Updates 16 times initially for precision
    for (var i = 0; i < 16; i++) {
        updatePositions();
    }

    // Updates position on scroll
    window.onscroll = function () {
        updatePositions();
    }
})();
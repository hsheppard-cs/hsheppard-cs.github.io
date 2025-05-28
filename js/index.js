let slideIndex = 1;

// Initialize the slideshow
document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex);
});

/**
 * Moves to the next or previous slide
 * @param {number} n - The number of slides to move (positive or negative)
 */
function changeSlide(n) {
    showSlide(slideIndex += n);
}

/**
 * Navigates directly to a specific slide
 * @param {number} n - The slide number to navigate to
 */
function setSlide(n) {
    showSlide(slideIndex = n);
}

/**
 * Main function to display the correct slide and update navigation dots
 * @param {number} n - The current slide index to display
 */
function showSlide(n) {
    const slides = document.getElementsByClassName("myImages");
    const dots = document.getElementsByClassName("dot");

    // Wrap around the slides if index is out of bounds
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    hideAllSlides(slides);
    deactivateAllDots(dots);

    // Show the current slide and activate the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

/**
 * Hides all slides
 * @param {HTMLCollection} slides - Collection of slide elements
 */
function hideAllSlides(slides) {
    for (const slide of slides) {
        slide.style.display = "none";
    }
}

/**
 * Removes 'active' class from all dots
 * @param {HTMLCollection} dots - Collection of dot elements
 */
function deactivateAllDots(dots) {
    for (const dot of dots) {
        dot.classList.remove("active");
    }
}

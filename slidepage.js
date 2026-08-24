// Each slide is one object: an image path paired with its text.
// This array is the "script" of your whole story — add more slides here later.
const slides = [
    { image: "images/placeholder.png", text: "This is the first slide's text." },
    { image: "images/placeholder2.png", text: "This is the second slide's text." },
    { image: "images/placeholder3.png", text: "This is the third slide's text." }
];

// Tracks which slide we're currently looking at. Starts at the first one.
let currentIndex = 0;

// Connect to the HTML elements we'll be updating
const slideImage = document.getElementById("slideImage");
const slideText = document.getElementById("slideText");
const backBtn = document.getElementById("backBtn");
const continueBtn = document.getElementById("continueBtn");

// Updates the image and text on screen to match whatever slide currentIndex points to
function showSlide() {
    slideImage.src = slides[currentIndex].image;
    slideText.textContent = slides[currentIndex].text;
}

continueBtn.addEventListener("click", () => {
    // Only move forward if we're not already on the last slide
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide();
    }
});

backBtn.addEventListener("click", () => {
    // Only move backward if we're not already on the first slide
    if (currentIndex > 0) {
        currentIndex--;
        showSlide();
    }
});
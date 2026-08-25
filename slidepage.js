const slides = [
    { image: "images/1.png", text: "Z z z." },
    { text: "You need to wake her up." },
    { image: "images/2.png" },
    { image: "images/3.png" },
    { image: "images/4.png" },
    { image: "images/5.png" },
    { image: "images/6.png" },

    { text: "Might have a lot of things to say." },

    { image: "images/7.png" },
    { image: "images/8.png" },
    { image: "images/9.png", text: "" },
    { image: "images/10.png", text: "" },
    { image: "images/11.png", text: "" },

    { text: "First of all, you are so stupid." },

    { text: "To be honest, I don't know what to say..." },
    { text: "I'm so full of words, but it's rare for me to let them out." },
    { text: "Maybe that's why I always chose drawing." },

    { text: "Drawing your feelings is easier than putting them into words." },
    { text: "I came back to digital art these days. As a kid, I used to make silly, lazy art with my tablet. Now I'm planning to do it more often." },
    { text: "Then it hit me: why don't I draw my feelings and give my thoughts a shape, so I can make them alive somewhere else instead of letting them grow inside my head?" },
    { text: "Drawing smooth art is better than pixel art, but both are fine for me." },
    { text: "Even though I know you wouldn't really bring that idea of the project again, it's okay. I wouldn't rely on a beginner if I were in your place either." },
    { text: "I still have a lot to learn, and I like to take my time." },
    { text: "I don't think I will find time to learn as much as I want with engineering in my hands." },
    { text: "But I'm not giving up on this." },
    { text: "You know, sometimes I forget that outside my really small world, there are people out there I must reunite with." },
    { text: "I can't just keep isolating myself from humans just so I can \"find more time\" for my hobbies." },
    { text: "It will make me stupid and more autistic." },
    { text: "I'm not planning to be stupid. It will slow my progress." },
    { text: ". . ." },
    { text: "Aaghghh." },
    { text: "I don't know what I'm saying." },

    { image: "images/112.png" },

    { text: "Sometimes this is what goes inside my head." },
    { image: "images/12.png"},

    { image: "images/13.png"},

    { text: "But Mr. Brain gets angry... I guess he's overwhelmed." },

    { image: "images/14.png" },

    { text: "Mr. Heart, on the other hand, gets very scared and confused." },

    { image: "images/15.png" },

    { text: 'But I go like: "YOU TWO, STOP BEING SO DRAMATIC ABOUT IT."' },

    { image: "images/16.png" },
    { text: "DESPITE THE FACT THAT YOU’RE A LIAR, TWO-FACED, MR. MIXED SIGNALS, AND A VERY STUPID BOY..." },
    { text: "I'm still glad I got to know someone like you. I choose to take the good things I’ve learned from you: your values, your mindset, and all the beautiful qualities you have..." },
    { image: "images/17.png" },
    { image: "images/19.png" },
    { image: "images/20.png" },
    { image: "images/18.png" },
    { text: "The End." },

];




let currentIndex = 0;

const slideImage = document.getElementById("slideImage");
const slideText = document.getElementById("slideText");
const backBtn = document.getElementById("backBtn");
const continueBtn = document.getElementById("continueBtn");

// Updates the image and text 
function showSlide() {
    const currentSlide = slides[currentIndex];

    if (currentSlide.image) {
        slideImage.src = currentSlide.image;
        slideImage.style.display = "block";
    } else {
        slideImage.style.display = "none";
    }

    slideText.textContent = currentSlide.text;
}

continueBtn.addEventListener("click", () => {
    // Only move forward if we still didnt reach end
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide();
    }
});

backBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide();
    }
});
/* const messageTyped = document.getElementById("typing");

messageTyped.addEventListener("input",()=>{
    messageTyped.style.width = "auto";
    messageTyped.style.width = messageTyped.scrollwisth + "px";



})

*/ 

/* here is before we wanna fix the prob of at firt its negleted 
const input = document.getElementById("typing");
const span = document.getElementById("mySpan");

input.addEventListener("input", () => {
    // Step 2 (already done): keep the hidden span's text matching the input
    span.textContent = input.value;

    // Step 3: measure how wide that text actually rendered as
    const newWidth = span.offsetWidth;

    // Step 4: apply that measured width to the real input box
    input.style.width = newWidth + "px";
});*/

const input = document.getElementById("typing");
const span = document.getElementById("mySpan");

const extraPadding = 30;
const minWidth = span.offsetWidth + extraPadding;
input.style.width = minWidth + "px";

// Run once immediately, so the box is sized correctly BEFORE any typing happens


input.addEventListener("input", () => {
    span.textContent = input.value;
    const typeWidth = span.offsetWidth + extraPadding;
    input.style.width = Math.max(minWidth, typeWidth) + "px";
});


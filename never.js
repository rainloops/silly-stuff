const input = document.getElementById("typing");
const span = document.getElementById("mySpan");

const inputStyles = window.getComputedStyle(input);
const realFontSize = inputStyles.fontSize;



const paddingLeft = parseFloat(inputStyles.paddingLeft);
const paddingRight = parseFloat(inputStyles.paddingRight);
const borderLeft = parseFloat(inputStyles.borderLeftWidth);
const borderRight = parseFloat(inputStyles.borderRightWidth);

span.style.fontSize = realFontSize;
// Adding all the extra space 
const extraSpace = paddingLeft + paddingRight + borderLeft + borderRight;
// Measure the span's natural width then add the extra space
const minWidth = span.offsetWidth + extraSpace;

input.style.width = minWidth + "px";

input.addEventListener("input", () => {
    span.textContent = input.value;
    const typedWidth = span.offsetWidth + extraSpace;
    input.style.width = Math.max(minWidth, typedWidth) + "px";
});

//for the error/success message now :

const okButton = document.getElementById("ok");
const message = document.getElementById("message");

// The "real" password, kept as a constant so it's easy to change later
const correctPassword = "Im not planning to be with you « never,ever »";


okButton.addEventListener("click", () => {
    // comparison and = difff
    if (input.value === correctPassword) {
        message.textContent = "that's right ,you got it right.";
        message.className = "success-text";
        message.style.visibility = "visible";

        setTimeout(() => {
            window.location.href ="slidepage.html";
        },3000);
    } else {
        message.textContent = "Incorrect password, try again.";
        message.className = "error-text";
        message.style.visibility = "visible";
    }
});






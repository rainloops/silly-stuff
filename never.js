// Connect our JS variables to the actual HTML elements
const input = document.getElementById("typing");
const span = document.getElementById("mySpan");
// Ask the browser for the INPUT's real, final calculated CSS values —
//  not what we wrote in the CSS file, but what the browser actually rendered.
// This only needs to run ONCE, since these values (font-size, padding, border)
// never change while the user is typing.
const inputStyles = window.getComputedStyle(input);
// Pull out just the specific values we need from that full report.
// fontSize comes back ready to use, as a string with its unit already attached (e.g. "35px")
const realFontSize = inputStyles.fontSize;
// Padding/border come back as strings too (e.g. "20px"), but we need plain numbers
// to do math with later — parseFloat strips the "px" and gives us just the number.
const paddingLeft = parseFloat(inputStyles.paddingLeft);
const paddingRight = parseFloat(inputStyles.paddingRight);
const borderLeft = parseFloat(inputStyles.borderLeftWidth);
const borderRight = parseFloat(inputStyles.borderRightWidth);
// Apply the input's real font-size onto the hidden span, so both elements
// render text at the identical size — otherwise our width measurement would be wrong.
span.style.fontSize = realFontSize;
// Add up all the horizontal extra space (both sides of padding + both sides of border).
// This is the space box-sizing: border-box will "eat into" from whatever width we set,
// so we need to add it back on top of the raw text width later.
const extraSpace = paddingLeft + paddingRight + borderLeft + borderRight;
// Measure the span's natural width right now (still showing "enter password "),
// then add the extra space, giving us the true minimum width the input should never
// shrink below. Calculated ONCE, before any typing happens.
const minWidth = span.offsetWidth + extraSpace;

// Apply that minimum width immediately on page load, before the user types anything —
// otherwise the input would start too small until the first keystroke.
input.style.width = minWidth + "px";

// This function runs every single time the input's value changes (every keystroke,
// paste, or deletion) — the browser detects this automatically, we just react to it.
input.addEventListener("input", () => {
    // Keep the hidden span's text always matching whatever's currently typed,
    // so its width reflects the real current content.
    span.textContent = input.value;

    // Recalculate width based on the CURRENT typed text, reusing the same
    // extraSpace number from before (padding/border never change, no need to redo that part).
    const typedWidth = span.offsetWidth + extraSpace;

    // Never shrink below minWidth (placeholder's natural size), but grow past it
    // once the typed text genuinely needs more room than that.
    input.style.width = Math.max(minWidth, typedWidth) + "px";
});

/*for the error/success message now :*/

// Grab the button and the message element
const okButton = document.getElementById("ok");
const message = document.getElementById("message");

// The "real" password, kept as a constant so it's easy to find/change later
const correctPassword = "Im not planning to be with you « never,ever »";

// Runs only when the button is actually clicked — not on page load, not on typing
okButton.addEventListener("click", () => {
    // Strict comparison: same value AND same type (string vs string here)
    if (input.value === correctPassword) {
        message.textContent = "that's right ,you got it right.";
        message.className = "success-text";
        message.style.visibility = "visible";

        // Placeholder for later: after a delay, this is where we'll
        // hide screen 1 and show screen 2 (slideshow) once it's built.
        // setTimeout(() => { ... }, 5000);

    } else {
        message.textContent = "Incorrect password, try again.";
        message.className = "error-text";
        message.style.visibility = "visible";
        // Intentionally NOT clearing input.value — user can just fix their typo
    }
});






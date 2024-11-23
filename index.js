const dynamicText = document.getElementById("role");
const texts = ["Java Developer", "Java FullStack Developer", "Software Engineer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 200;
const deletingSpeed = 50;
const delayBetweenTexts = 500; // Delay before starting to type the next text

function type() {
    const currentText = texts[textIndex];
    console.log(`initial value : ` + currentText);

    if (isDeleting) {
        dynamicText.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, deletingSpeed);
        }
    } else {
        dynamicText.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenTexts);
        } else {
            setTimeout(type, typingSpeed);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetweenTexts); // Initial delay before starting typing
});

document.querySelectorAll('*').forEach(el => {
    if (el.scrollWidth < el.clientWidth) {
        console.log('Overflowing element:', el);
        el.style.outline = '2px solid red';
    }
});
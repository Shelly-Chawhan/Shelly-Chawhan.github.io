const sentence = ["Hi,", "My", "name", "is", "Shelly!"];
let i = 0;
const wordSpeed = 500; // Delay between each word
const startDelay = 500; // Delay before typing starts

function typeWriter() {
    if (i < sentence.length) {
        document.getElementById("sentenceTypewriter").innerHTML += sentence[i] + " ";
        i++;
        setTimeout(typeWriter, wordSpeed);
    }
}

// Delay typing effect to improve user experience
window.onload = function() {
    setTimeout(typeWriter, startDelay);
};

const sentence = ["Hi,", "My", "name", "is", "Shelly!"];
let i = 0;
const wordSpeed = 400; 
const startDelay = 500; 

function typeWriter() {
    if (i < sentence.length) {
        document.getElementById("sentenceTypewriter").innerHTML += sentence[i] + " ";
        i++;
        setTimeout(typeWriter, wordSpeed);
    }
}
window.onload = function() {
    setTimeout(typeWriter, startDelay);
};





// Initialize webcam and canvas for sign detection
const video = document.getElementById('webcam');
const canvas = document.getElementById('output');
const detectedTextElement = document.getElementById('detected-text');
const languageSelector = document.getElementById('language-selector');
const speakButton = document.getElementById('speak-btn');

// Placeholder text for demo
let detectedText = 'Hello, how are you?';

// Dummy sign language detection function (to be replaced by real detection)
function detectSignLanguage() {
    // This is where the TensorFlow.js sign language detection would go
    // For now, we'll simulate it with a hardcoded message
    detectedText = 'Hello';
    detectedTextElement.innerText = detectedText;
}

// Function to convert text to speech
function speakText(text, language) {
    const speechSynthesis = window.speechSynthesis;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = language;
    speechSynthesis.speak(speech);
}

// Start video stream
async function startVideo() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        console.error('Error accessing webcam: ', err);
    }
}

// Event listeners
speakButton.addEventListener('click', () => {
    const language = languageSelector.value;
    speakText(detectedText, language);
});

// Start webcam and run detection
startVideo();
setInterval(detectSignLanguage, 1000);
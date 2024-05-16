const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Sir...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How may I help you?");
    } else if (message.includes("open google")) {
        window.open("https://www.google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://www.youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://www.facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open twitter")) {
        window.open("https://www.twitter.com", "_blank");
        speak("Opening Twitter...");
    } else if (message.includes("open github")) {
        window.open("https://www.github.com", "_blank");
        speak("Opening GitHub...");
    } else if (message.includes("open amazon")) {
        window.open("https://www.amazon.com", "_blank");
        speak("Opening Amazon...");
    } else if (message.includes("open stack overflow")) {
        window.open("https://stackoverflow.com", "_blank");
        speak("Opening Stack Overflow...");
    } else if (message.includes("open wikipedia")) {
        window.open("https://www.wikipedia.org", "_blank");
        speak("Opening Wikipedia...");
    } else if (message.includes("open reddit")) {
        window.open("https://www.reddit.com", "_blank");
        speak("Opening Reddit...");
    } else if (message.includes("open linkedin")) {
        window.open("https://www.linkedin.com", "_blank");
        speak("Opening LinkedIn...");
    } else if (message.includes("open netflix")) {
        window.open("https://www.netflix.com", "_blank");
        speak("Opening Netflix...");
    } else if (message.includes("open weather")) {
        window.open("https://www.weather.com", "_blank");
        speak("Opening Weather...");
    } else if (message.includes("open news")) {
        window.open("https://www.bbc.com/news", "_blank");
        speak("Opening News...");
    } else if (message.includes("open music")) {
        window.open("https://www.spotify.com", "_blank");
        speak("Opening Spotify for music...");
    } else if (message.includes("open shopping")) {
        window.open("https://www.amazon.com", "_blank");
        speak("Opening Amazon for shopping...");
    } else if (message.includes("open education")) {
        window.open("https://www.coursera.org", "_blank");
        speak("Opening Coursera for education...");
    } else if (message.includes("open games")) {
        window.open("https://www.miniclip.com", "_blank");
        speak("Opening Miniclip for games...");
    } else if (message.includes("open recipes")) {
        window.open("https://www.allrecipes.com", "_blank");
        speak("Opening Allrecipes for recipes...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "long", day: "numeric", year: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}

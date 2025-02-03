const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Babe please...",
    "if u say no, imma call you the N word... !",
    "if you say no, imma touch you ",
    "im gonna touch you...",
    "ARE U REALLY SURE ABOUT THIS? ",
    "OK FINE, if u say so... ",
    "SAY YES PLEASE, I CANNOT LIVE WITHOUT YOU! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
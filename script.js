// script.js
const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!",
    "A day on Venus is longer than its year. It takes Venus 243 Earth days to rotate on its axis but only 225 Earth days to orbit the Sun.",
    "The shortest war in history lasted 38 minutes between Britain and Zanzibar in 1896.",
    "Bananas are berries, but strawberries aren't!",
    "The first oranges weren't orange! The original oranges from Southeast Asia were actually green.",
    "A group of flamingos is called a 'flamboyance'.",
    "Cows have best friends and get stressed when separated from them.",
    "The average person spends 6 months of their lifetime waiting for red lights to turn green.",
    "A hedgehog's heart beats 300 times a minute on average!",
    "The fingerprints of koalas are so similar to human fingerprints that they have on occasion been confused at a crime scene!"
];

const factText = document.getElementById('fact-text');
const newFactBtn = document.getElementById('new-fact-btn');

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.classList.remove('fade');
    // Trigger reflow to restart animation
    void factText.offsetWidth;
    factText.classList.add('fade');
    factText.textContent = facts[randomIndex];
}

newFactBtn.addEventListener('click', getRandomFact);

// Load initial fact
getRandomFact();

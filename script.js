// script.js
const facts = [
    "The human body contains enough carbon to make around 900 pencils!",
    "A hummingbird weighs less than a penny but its heart beats up to 1,260 times per minute!",
    "The Great Wall of China is not visible from space with the naked eye, contrary to popular belief.",
    "Squirrels plant thousands of new trees each year by forgetting where they buried their acorns.",
    "A day on Mars is only 37 minutes longer than a day on Earth.",
    "Sloths are so slow that algae can grow on their fur, giving them a greenish tint.",
    "The average person spends 2 weeks of their lifetime waiting for traffic lights to change.",
    "Octopuses have three hearts and their blood is blue!",
    "The shortest commercial flight in the world is just 1.5 minutes long between two Scottish islands.",
    "The world's deepest postbox is in Susami, Japan - it's 133 feet underwater and can only be accessed by scuba divers!",
    "A bolt of lightning is six times hotter than the surface of the sun.",
    "Honeybees can recognize human faces!",
    "The average cloud weighs around 1.1 million pounds due to all the water droplets it contains."
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

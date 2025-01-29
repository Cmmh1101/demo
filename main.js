const quotes = [
    "Believe in yourself and all that you are.",
    "Your only limit is your mind.",
    "Dream big and dare to fail.",
    "Every day is a new beginning.",
    "You are stronger than you think.",
    "The greatest barrier to success is the fear of failure.",
    "Doubt kills more dreams than failure ever will.",
    "Don’t limit your challenges; challenge your limits.",
    "You don’t have to be great to start, but you have to start to be great.",
    "The journey of a thousand miles begins with one step.",
    "Small progress is still progress.",
    "It always seems impossible until it’s done.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "Fall seven times, stand up eight.",
    "The expert in anything was once a beginner.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Learning never exhausts the mind.",
    "Opportunities don’t happen. You create them.",
    "You are not a drop in the ocean. You are the entire ocean in a drop.",
    "Your potential is endless. Go do what you were created to do.",
    "First, solve the problem. Then, write the code.",
    "Be stubborn about your goals and flexible about your methods.",
    "Technology is best when it brings people together.",
    "She believed she could, so she did.",
    "Your value doesn’t decrease based on someone’s inability to see your worth.",
    "Believe in yourself and you’ll be unstoppable.",
    "Alone, we can do so little; together, we can do so much.",
    "Success is best when it’s shared.",
    "Surround yourself with people who challenge you to grow."
  ];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

const quoteDisplay = document.getElementById("quote-display");
const quoteButton = document.getElementById("quote-button");

quoteButton.addEventListener("click", () => {
    const newQuote = getRandomQuote();
    quoteDisplay.textContent = newQuote;
})
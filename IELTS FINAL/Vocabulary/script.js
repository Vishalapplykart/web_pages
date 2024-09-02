// Sample data for flashcards
const flashcards = {
    easy: [
        {
            word: "Innovate",
            definition: "Make changes in something established, especially by introducing new methods or ideas.",
            example: "The company aims to innovate and create new technologies.",
            advantages: "Leads to growth and new opportunities.",
            disadvantages: "Can be risky and requires investment."
        },
        {
            word: "Resilient",
            definition: "Able to withstand or recover quickly from difficult conditions.",
            example: "She was resilient in the face of adversity.",
            advantages: "Builds strength and endurance.",
            disadvantages: "Can lead to stress if pushed too far."
        }
        // Add more easy words here
    ],
    medium: [
        {
            word: "Tenacious",
            definition: "Holding tightly onto something, or keeping an opinion in a determined way.",
            example: "Her tenacious attitude led to her success.",
            advantages: "Shows determination and persistence.",
            disadvantages: "Can be seen as stubborn or inflexible."
        },
        {
            word: "Meticulous",
            definition: "Showing great attention to detail; very careful and precise.",
            example: "He was meticulous in his presentation.",
            advantages: "High-quality outcomes.",
            disadvantages: "Can be time-consuming and stressful."
        }
        // Add more medium words here
    ],
    hard: [
        {
            word: "Obfuscate",
            definition: "To deliberately make something unclear or difficult to understand.",
            example: "The lawyer's response was meant to obfuscate the facts.",
            advantages: "Can be useful in negotiations.",
            disadvantages: "Causes confusion and misunderstanding."
        },
        {
            word: "Acrimonious",
            definition: "Angry and bitter in tone or manner.",
            example: "The debate became increasingly acrimonious.",
            advantages: "Expresses strong emotions.",
            disadvantages: "Can damage relationships."
        }
        // Add more hard words here
    ]
};

let currentWordIndex = 0;
let currentLevel = "easy";

// Function to load the next word
function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % flashcards[currentLevel].length;
    displayWord(currentWordIndex);
}

// Function to display a word's details
function displayWord(index) {
    const card = flashcards[currentLevel][index];
    document.getElementById('word').innerText = card.word;
    document.getElementById('definition').innerText = card.definition;
    document.getElementById('example').innerText = card.example;
    document.getElementById('advantages').innerText = card.advantages;
    document.getElementById('disadvantages').innerText = card.disadvantages;
}

// Function to play pronunciation without flipping the card
function playPronunciation(event) {
    // Prevent card flip by stopping event propagation
    event.stopPropagation();
    
    const card = flashcards[currentLevel][currentWordIndex];
    const utterance = new SpeechSynthesisUtterance(card.word);
    window.speechSynthesis.speak(utterance);
}

// Function to handle feedback (knew/didn't know the word)
function handleFeedback(knewWord) {
    if (knewWord) {
        alert("Great! You knew this word!");
    } else {
        alert("No worries! Keep practicing.");
    }
    nextWord();
}

// Function to flip card and change header color
function flipCard(card) {
    card.classList.toggle('flipped');
    if (card.classList.contains('flipped')) {
        document.querySelector('header').style.backgroundColor = "#ff5e5e"; // Change to a different color when flipped
    } else {
        updateHeaderColor(); // Reset header color
    }
}

// Function to change header based on selected difficulty level
function showLevel(level) {
    currentLevel = level;
    currentWordIndex = 0;
    displayWord(currentWordIndex);
    
    let header = document.querySelector('header h1');
    
    if (level === 'easy') {
        header.innerText = "Easy Vocabulary";
        document.querySelector('header').style.backgroundColor = "#4CAF50";
    } else if (level === 'medium') {
        header.innerText = "Medium Vocabulary";
        document.querySelector('header').style.backgroundColor = "#f39c12";
    } else if (level === 'hard') {
        header.innerText = "Hard Vocabulary";
        document.querySelector('header').style.backgroundColor = "#e74c3c";
    }
}

// Function to reset header color when card is not flipped
function updateHeaderColor() {
    if (currentLevel === 'easy') {
        document.querySelector('header').style.backgroundColor = "#4CAF50";
    } else if (currentLevel === 'medium') {
        document.querySelector('header').style.backgroundColor = "#f39c12";
    } else if (currentLevel === 'hard') {
        document.querySelector('header').style.backgroundColor = "#e74c3c";
    }
}

// Function to handle feedback (knew/didn't know the word)
function handleFeedback(knewWord) {
    const messageBox = document.getElementById('messageBox');
    
    if (knewWord) {
        messageBox.querySelector('p').innerText = "Great! You knew this word!";
        messageBox.style.backgroundColor = "#4CAF50"; // Green for knew
    } else {
        messageBox.querySelector('p').innerText = "No worries! Keep practicing.";
        messageBox.style.backgroundColor = "#e74c3c"; // Red for didn't know
    }

    // Show the message box with an animation
    messageBox.classList.add('show');

    // Hide the message box after 2 seconds
    setTimeout(() => {
        messageBox.classList.remove('show');
    }, 2000);

    nextWord(); // Load the next word after feedback
}



// Load the first word when the page loads
window.onload = () => {
    showLevel('easy'); // Default level
};

// Scroll page up by a certain amount
function pageUp() {
    window.scrollBy({
        top: -window.innerHeight,  // Scroll up by one viewport height
        behavior: 'smooth'         // Smooth scrolling
    });
}

// Scroll page down by a certain amount
function pageDown() {
    window.scrollBy({
        top: window.innerHeight,   // Scroll down by one viewport height
        behavior: 'smooth'         // Smooth scrolling
    });
}

// Add keyboard support for page up and page down
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        pageUp();  // Trigger page up on arrow up key
    } else if (event.key === "ArrowDown") {
        pageDown();  // Trigger page down on arrow down key
    }
});

function flipCard(cardElement) {
    cardElement.classList.toggle('flipped');
}


function showLevel(level) {
    currentLevel = level;
    currentWordIndex = 0;
    displayWord(currentWordIndex);
    
    let header = document.querySelector('header h1');
    let headerElement = document.querySelector('header');
    
    if (level === 'easy') {
        header.innerText = "Easy Vocabulary";
        headerElement.style.transition = 'background-color 0.5s ease-in-out';
        headerElement.style.backgroundColor = "#4CAF50";
    } else if (level === 'medium') {
        header.innerText = "Medium Vocabulary";
        headerElement.style.transition = 'background-color 0.5s ease-in-out';
        headerElement.style.backgroundColor = "#f39c12";
    } else if (level === 'hard') {
        header.innerText = "Hard Vocabulary";
        headerElement.style.transition = 'background-color 0.5s ease-in-out';
        headerElement.style.backgroundColor = "#e74c3c";
    }
}

// function showLevel(level) {
//     currentLevel = level;
//     currentWordIndex = 0;
//     displayWord(currentWordIndex);
    
//     let header = document.querySelector('header h1');
//     let headerElement = document.querySelector('header');
    
//     if (level === 'easy') {
//         header.innerText = "Easy Vocabulary";
//         headerElement.style.transition = 'background-color 0.5s ease-in-out';
//         headerElement.style.backgroundColor = "#4CAF50";
//     } 
// }

// function showLevel(level) {
//     currentLevel = level;
//     currentWordIndex = 0;
//     displayWord(currentWordIndex);
    
//     let header = document.querySelector('header h1');
//     let headerElement = document.querySelector('header');
    
//    if (level === 'medium') {
//         header.innerText = "Medium Vocabulary";
//         headerElement.style.transition = 'background-color 0.5s ease-in-out';
//         headerElement.style.backgroundColor = "#f39c12";
//     } 
    
// }

// function showLevel(level) {
//     currentLevel = level;
//     currentWordIndex = 0;
//     displayWord(currentWordIndex);
    
//     let header = document.querySelector('header h1');
//     let headerElement = document.querySelector('header');
    
//     if (level === 'hard') {
//         header.innerText = "Hard Vocabulary";
//         headerElement.style.transition = 'background-color 0.5s ease-in-out';
//         headerElement.style.backgroundColor = "#e74c3c";
//     }
// }

let isFlipping = false;

function flipCard(cardElement) {
    if (isFlipping) return;
    isFlipping = true;
    cardElement.classList.toggle('flipped');
    setTimeout(() => isFlipping = false, 600); // Match with transition duration
}

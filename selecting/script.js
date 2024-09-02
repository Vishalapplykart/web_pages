const words = ["canyon", "cave", "field", "glacier", "desert", "cliff"];
const images = [
    {word: "canyon", src: "canyon.jpg"},
    {word: "cave", src: "cave.jpg"},
    {word: "field", src: "field.jpg"},
    {word: "glacier", src: "glacier.jpg"},
    {word: "desert", src: "desert.jpg"},
    {word: "cliff", src: "cliff.jpg"}
];

let currentWord = "";

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function playSound() {
    const audio = new Audio(`${currentWord}.mp3`);
    audio.play();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadImages() {
    const selectedImages = images.slice();
    shuffleArray(selectedImages);

    const correctImage = selectedImages.find(image => image.word === currentWord);
    const randomImages = shuffleArray(selectedImages.filter(image => image.word !== currentWord)).slice(0, 5);
    const imageSet = shuffleArray([correctImage, ...randomImages]);

    const imageGrid = document.getElementById('image-grid');
    imageGrid.innerHTML = '';

    imageSet.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.word;
        imgElement.onclick = () => checkAnswer(image.word);
        imageGrid.appendChild(imgElement);
    });
}

function checkAnswer(selectedWord) {
    const resultMessage = document.getElementById('result-message');
    if (selectedWord === currentWord) {
        resultMessage.innerText = "Right answer!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.innerText = "False answer!";
        resultMessage.style.color = "red";
    }
}

function startExercise() {
    currentWord = getRandomWord();
    loadImages();
}

document.addEventListener('DOMContentLoaded', startExercise);

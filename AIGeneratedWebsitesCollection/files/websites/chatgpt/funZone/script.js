// Jokes array
const jokes = [
    "Why did the computer go to the doctor? Because it had a virus!",
    "What do you call a fake noodle? An impasta!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why couldn't the bicycle stand up by itself? It was two-tired!",
];

// Function to generate a random joke
function generateJoke() {
    const jokeElement = document.getElementById('joke');
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeElement.textContent = jokes[randomIndex];
}

// Function to generate a random image
function generateImage() {
    const imageContainer = document.getElementById('imageContainer');
    const randomImage = document.createElement('img');
    randomImage.src = `https://source.unsplash.com/random/?fun`;
    imageContainer.innerHTML = '';
    imageContainer.appendChild(randomImage);
}
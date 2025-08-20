// Define the array of full Bible scriptures
const scriptures = [
    "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. - John 3:16",
    "The LORD is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. - Psalm 23:1-2",
    "I can do all things through Christ which strengtheneth me. - Philippians 4:13",
    "God is our refuge and strength, a very present help in trouble. - Psalm 46:1",
    "Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls. - Matthew 11:28-29",
    "For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11",
    "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace. - Numbers 6:24-26"
];

// Function to get a random element from an array
function getRandomElement(arr) {
    // Get a random index from 0 to the array length - 1
    const randomIndex = Math.floor(Math.random() * arr.length);
    // Return the element at that random index
    return arr[randomIndex];
}

// Function to generate and display the scripture
function generateScripture() {
    // Select a random scripture from the array
    const randomScripture = getRandomElement(scriptures);
    
    // Get the HTML element where the scripture will be displayed
    const messageDisplay = document.getElementById('message-display');

    // Update the inner HTML with the new scripture
    messageDisplay.innerHTML = `<p class="message-text">${randomScripture}</p>`;
}

// Get the button element and add a click event listener
const generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', generateScripture);

// Initial scripture generation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    generateScripture();
});
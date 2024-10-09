// Game variables
let coins = 0;
let level = 1;

// Handle Telegram login data
function onTelegramAuth(user) {
    const userNameElement = document.getElementById('user-name');
    userNameElement.textContent = `Hello, ${user.first_name} ${user.last_name}`;
}

// Game logic
const tapButton = document.getElementById('tap-button');
const coinsElement = document.getElementById('coins');
const levelElement = document.getElementById('level');

tapButton.addEventListener('click', () => {
    // Increment coins
    coins += 1;
    coinsElement.textContent = coins;

    // Level up every 10 coins
    if (coins % 10 === 0) {
        level += 1;
        levelElement.textContent = level;
    }

    // Add some visual effect (for example, change the hamster color on each tap)
    const hamster = document.getElementById('hamster');
    hamster.style.backgroundColor = getRandomColor();
});

// Helper function to get a random color for the hamster
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

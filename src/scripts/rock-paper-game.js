let playerScore = 0;
let computerScore = 0;
let ties = 0;

const buttons = document.querySelectorAll('[data-name="rock-paper-game"] button');
const resultDiv = document.querySelector('.result');
const scoreDiv = document.querySelector('.score');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        playGame(playerChoice);
    });
});

function playGame(playerChoice) {
    const choices = ['камінь', 'ножиці', 'папір'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result;
    if (playerChoice === computerChoice) {
        result = "Нічия!";
        ties++;
    } else if (
        (playerChoice === 'камінь' && computerChoice === 'ножиці') ||
        (playerChoice === 'ножиці' && computerChoice === 'папір') ||
        (playerChoice === 'папір' && computerChoice === 'камінь')
    ) {
        result = "Ви виграли!";
        playerScore++;
    } else {
        result = "Комп'ютер виграв!";
        computerScore++;
    }
    resultDiv.innerHTML = `
        Ви обрали: <strong>${playerChoice}</strong><br>
        Комп'ютер обрав: <strong>${computerChoice}</strong><br>
        <strong>${result}</strong>
    `;

    scoreDiv.textContent = `Рахунок: Ви ${playerScore} - ${computerScore} Комп'ютер (Нічиї: ${ties})`;
}
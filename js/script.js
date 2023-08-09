let hiddenNumber;
let minRange;
let maxRange;
let countLeft = 5;

document.querySelector('button').addEventListener('click', startGame);
document.querySelectorAll('button')[1].addEventListener('click', checkGuess);
document.querySelectorAll('button')[2].addEventListener('click', exitGame);

function startGame() {
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    minRange = parseInt(minInput.value);
    maxRange = parseInt(maxInput.value);

    if (isNaN(minRange) || isNaN(maxRange) || minRange < 0 || maxRange <= minRange) {
        document.getElementById('error').innerText = 'Вы ввели неверный диапазон';
        return;
    }

    hiddenNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    document.getElementById('rules').innerText = `Привет, я загадал число от ${minRange} до ${maxRange} вашего диапазона. Попробуй угадать его за 5 попыток!`;
    document.getElementById('error').innerText = '';
    document.getElementById('result').innerText = '';
    document.getElementById('guess').value = '';
    countLeft = 5;
}

function checkGuess() {
    const guessInput = document.getElementById('guess');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < minRange || guess > maxRange) {
        document.getElementById('result').innerText = 'Неверное число!';
        return;
    }

    if (guess === hiddenNumber) {
        document.getElementById('result').innerText = `Поздравляю! Ты угадал задуманное число за ${6 - countLeft} попыток`;
    } else {
        const hint = guess < hiddenNumber ? 'холоднее' : 'теплее';
        document.getElementById('result').innerText = `Не угадал, но ${hint}... Осталось ${countLeft - 1} попыток`;
    }

    countLeft--;
    if (countLeft === 0) {
        document.getElementById('result').innerText = `Игра окончена. Загаданное число было ${hiddenNumber}`;
    }
}

function exitGame() {
    document.getElementById('rules').innerText = '';
    document.getElementById('error').innerText = '';
    document.getElementById('result').innerText = '';
    document.getElementById('guess').value = '';
    countLeft = 5;
}
import {getStorageData, setGuessValue, setRange, setTryValue} from "./localStorage";
import {generateGuessValue, getGuessValue, inputLengthValidate, notified, rangeValidate} from "./utils";

const startGameForm = document.querySelector('#startGame');
const playGameForm = document.querySelector('#playGame');

const formHandler = (event) => {
    event.preventDefault();
    const target = event.target;
    const inputs = target.querySelectorAll('input');

    if (inputLengthValidate(inputs)) {
        return notified('Вам необходимо заполнить пустое поле для старта!');
    }

    switch (target.id) {
        case "startGame":
            const obj = {}
            inputs.forEach((input) => {
                obj[input.id] = input.value;
            })
            if (!rangeValidate(obj)) {
                setRange(obj);
                const guess = generateGuessValue();
                setGuessValue(guess);
                notified('Вы можете начать игру.')
            } else {
                notified('Допустимый диапазон от 1 до 1000.')
            }
            break;
        case "playGame":
            if (!getStorageData('range')) {
                return notified('Сначала введите начальный и последний диапазон чисел.')
            }
            const input = Number(inputs[0].value);
            const {startNumberInput, endNumberInput} = getStorageData('range');
            if (input < Number(startNumberInput) || input > Number(endNumberInput)) {
                return notified(`Вы ввели число ${input} и вышли за диапазон от ${startNumberInput} до ${endNumberInput}!`)
            }
            const guess = getGuessValue();

            if (input === guess) {
                return notified('Вы победили!')
            } else {
                setTryValue();
                if (input < guess) {
                    return notified('Вы не угадали, вы ввели число меньше загаданного!')
                } else {
                    return notified('Вы не угадали, вы ввели число больше загаданного!')
                }
            }
    }
}

export const formListener = () => {
    startGameForm.addEventListener('submit', formHandler);
    playGameForm.addEventListener('submit', formHandler);
}

import {clearLocalStorage, getStorageData} from "./localStorage";

export const notified = (text) => {
    const element = document.querySelector('.info__container-text');
    element.innerText = text;

    setTimeout(() => {
        element.innerText = '';
    }, 2000)
}

export const rangeValidate = (obj) => {
    const values = Object.values(obj);

    return values.some((value) => value < 1 || value > 1000);
}

export const inputLengthValidate = (inputs) => {
    return Array.from(inputs).some((input) => input.value.length === 0);
}

export const generateGuessValue = () => {
    const {startNumberInput, endNumberInput} = getStorageData('range');
    return Math.floor(Math.random() * (Number(endNumberInput) - Number(startNumberInput) + 1)) + Number(startNumberInput);
}

export const getGuessValue = () => {
    return Number(getStorageData('guess'));
}

export const setTryValueToElement = (value) => {
    const element = document.querySelector('#try');
    element.innerText = value;
}

const resetPageData = () => {
    clearLocalStorage();
    resetAllElements();
    return notified('Вы можете начать новую игру, заполните диапазон чисел.')
}

const resetAllElements = () => {
    const inputs = Array.from(document.querySelectorAll('input'));
    const tryElement = document.querySelector('#try').innerText = '0';
    inputs.forEach((input) => input.value = '');
}

export const startNewGame = () => {
    const button = document.querySelector('#startNewGame');
    button.addEventListener('click', resetPageData)
}

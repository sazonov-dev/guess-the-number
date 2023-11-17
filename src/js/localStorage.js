import {setTryValueToElement} from "./utils";

export const setRange = (obj) => {
    localStorage.setItem('range', JSON.stringify(obj));
}

export const setGuessValue = (value) => {
    localStorage.setItem('guess', JSON.stringify(value));
}

export const setTryValue = () => {
    if (!localStorage.getItem('try')) {
        localStorage.setItem('try', JSON.stringify(1));
        setTryValueToElement(1);
    } else {
        const number = Number(JSON.parse(localStorage.getItem('try')));
        localStorage.setItem('try', JSON.stringify(number + 1));
        setTryValueToElement(number + 1);
    }
}

export const clearLocalStorage = () => {
    localStorage.clear();
}

export const getStorageData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

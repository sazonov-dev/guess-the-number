import '../assets/styles/main.css';
import {formListener} from "./form";
import {startNewGame} from "./utils";

const startApp = () => {
    formListener();
    startNewGame();
}

document.addEventListener('DOMContentLoaded', startApp);

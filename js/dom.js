// DOM Targeting
export const input = document.querySelector(".io__input__textarea");
export const output = document.querySelector(".io__output");
export const mode = document.querySelector(".io__input__mode");

import { toMorse, fromMorse } from "./processor.js";

export const handleConversion = (e) => {
    e.preventDefault(); // boilerplate, probably unnessesary
    mode.selectedIndex === 0 // Dropdown option 0 is English, option 1 is Morse, there are only 2 options
        ? output.innerHTML = toMorse(input.value) // Call if Mode is English and pass user input to the Morse converter
        : output.innerHTML = fromMorse(input.value) // Call if Mode is not English (Morse) pass user input to the English converter
};

const newModeMorse = () => {
    const text = input.value; // Store the previous input value
    input.value = ""; // Reset the input value field
    input.value = toMorse(text); // Update the input field with the Morse of the prior (English) input
    output.innerHTML = fromMorse(input.value) // Call the regular conversion of the new input field
};

const newModeEnglish = () => {
    const text = input.value; // Store the previous input value
    input.value = ""; // Reset the input value field
    input.value = fromMorse(text); // Update the input field with the English of the prior (Morse) input
    output.innerHTML = toMorse(input.value) // Call the regular conversion of the new input field
};

export const handleModeChange = (e) => {
    e.preventDefault(); // boilerplate, probably unnessesary
    mode.selectedIndex === 1 // Dropdown option 1 is Morse, option 0 is English, there are only 2 options
        ? newModeMorse() // Call if Mode is switched to Morse
        : newModeEnglish()  // Call if Mode is switched to English
};
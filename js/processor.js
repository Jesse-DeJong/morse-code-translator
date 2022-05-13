import { lookupTable, invertedLookupTable } from "./data.js";
import { input, output, mode } from "./dom.js";

const cleaned = (text) => {
    return text.includes("undefined") // if unable to match the inverted lookup table (invalid entry typically " ", which will result in undefined) 
        ? text.slice(0,-1).join("") // return the joined string slicing off the last value (undefined)
        : text.join("") // otherwise return the unedited result as a joined string 
};

const toMorse = (text) => {
    return text.split("").map( // split each character from the string and map them
        (char) => lookupTable[char] // check if the user input is in the lookup table
        ? `${lookupTable[char]} ` // return the lookup value if so
        : char // else return the invalid character if not
        ).join(""); // join the map result into a string before returning
};

const fromMorse = (text) => {
    const morse = text.split(" ").map((char) => `${invertedLookupTable[char]}`); // split each morse character delimited by a space " "
    return cleaned(morse) // call the cleaner function to remove any undefined value
};

export const handleConversion = (e) => {
    e.preventDefault(); // boilerplate, probably unnessesary
    mode.selectedIndex === 0 // Dropdown option 0 is English, option 1 is Morse, there are only 2 options
        ? output.innerHTML = toMorse(input.value) // Call if Mode is English and pass user input to the Morse converter
        : output.innerHTML = fromMorse(input.value) // Call if Mode is not English (Morse) pass user input to the English converter
};
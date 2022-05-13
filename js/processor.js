import { lookupTable, invertedLookupTable } from "./data.js";
// import { input, output, mode } from "./dom.js";

const cleaned = (text) => {
    return text.includes("undefined") // if unable to match the inverted lookup table (invalid entry typically " ", which will result in undefined) 
        ? text.slice(0,-1).join("").trim() // return the joined string slicing off the last value (undefined)
        : text.join("").trim() // otherwise return the unedited result as a joined string 
};

export const toMorse = (text) => {
    return text.toLowerCase().split("").map( // split each character from the string and map them
        (char) => lookupTable[char] // check if the user input is in the lookup table
        ? `${lookupTable[char]} ` // return the lookup value if so
        : char // else return the invalid character if not
        ).join("").trim(); // join the map result into a string before returning
};

export const fromMorse = (text) => {
    const morse = text.split(" ").map( // split each morse character delimited by a space " "
        (char) => invertedLookupTable[char] // check if the user input is in the lookup table
        ? `${invertedLookupTable[char]}` // return the lookup value if so
        : char); // else return the invalid character if not
    return cleaned(morse) // call the cleaner function to remove any undefined value
};
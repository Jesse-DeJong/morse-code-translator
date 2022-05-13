import { lookupTable, invertedLookupTable } from "./data.js";

// const invertKeyValuePairs = (obj) => Object.fromEntries(Object.entries(obj).map(pair => pair.reverse()))
// const invertedLookupTable = invertKeyValuePairs(lookupTable);

import { left, right, leftMode, rightMode  } from "./dom.js";

const cleaned = (text) => {
    // feels dodgey but isn't
    if (text.includes("undefined")) { // if unable to match the inverted lookup table (invalid entry typically " ", which will result in undefined) 
        return text.slice(0,-1).join(""); // return the joined string slicing off the last value (undefined)
    } else {
        return text.join(""); // otherwise return the unedited result as a joined string 
    }
};
const toMorse = (text) => {
return text.split("").map((char) => // split each character from the string and map them
    lookupTable[char] // check if the user input is in the lookup table
    ? `${lookupTable[char]} ` // return the lookup value if so
    : char // else return the invalid character if not
    ).join(""); // join the map result into a string before returning
};
const fromMorse = (text) => {
    const morse = text.split(" ").map((char) => `${invertedLookupTable[char]}`); // split each morse character delimited by a space " "
    return cleaned(morse) // call the cleaner function to remove any undefined value
};

const handleConversion = (e) => {
    e.preventDefault(); // boilerplate, probably unnessesary

    if(leftMode.selectedIndex === 0) { // Check if Mode is English
        right.innerHTML = toMorse(left.value) // pass user input to the Morse converter
    }

    if(leftMode.selectedIndex === 1) { // Check if Mode is Morse
        right.innerHTML = fromMorse(left.value) // pass user input to the English converter
    }
}

export {
    handleConversion
}

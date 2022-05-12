import { lookupTable, invertedLookupTable } from "./data.js";

// const invertKeyValuePairs = (obj) => Object.fromEntries(Object.entries(obj).map(pair => pair.reverse()))
// const invertedLookupTable = invertKeyValuePairs(lookupTable);

import { left, right, leftMode, rightMode  } from "./dom.js";

const cleaned = (text) => {
    if (text.includes("undefined")) { // feels dodgey but isn't
        return text.slice(0,-1).join("");
    } else {
        return text.join("");
    }
};
const toMorse = (text) => {
    return text.split("").map((char) => `${lookupTable[char]} `).join("");
};
const fromMorse = (text) => {
    const morse = text.split(" ").map((char) => `${invertedLookupTable[char]}`);
    return cleaned(morse)
};

const handleConversion = (e) => {
    e.preventDefault();

    if(leftMode.selectedIndex === 0) { // Mode is English
        right.innerHTML = toMorse(left.value)
    }

    if(leftMode.selectedIndex === 1) { // Mode is Morse
        right.innerHTML = fromMorse(left.value)
    }
}

export {
    handleConversion
}

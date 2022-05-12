import lookupTable from "./data.js";
import { left, right, leftMode, rightMode  } from "./dom.js";

const toMorse = (text) => {
    return text.split("").map((char) => `${lookupTable[char]} `).join("");
};
const fromMorse = (text) => {
    return text.split(" ").map((char) => Object.values(lookupTable)[char]);
};

const handleConversion = (e) => {
    e.preventDefault();

    if(leftMode === "English") {
        right.innerHTML = toMorse(left.value)
    }

    if(leftMode === "Morse") {
        right.innerHTML = fromMorse(left.value)
    }

}

export {
    handleConversion
}

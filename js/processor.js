import lookupTable from "./data";
import { left, right, leftMode, rightMode, leftText, rightText } from "./dom";

const toMorse = (text) => {
    return text.split("").map((char) => lookupTable[char]);
};
const fromMorse = (text) => {
    return text.split(" ").map((char) => Object.values(lookupTable)[char]);
};

const handleConversion = (e) => {
    e.preventDefault();
    console.log(leftText)

    if(leftMode === "English") {
        rightText.innerHTML = toMorse(leftText)
    }

    if(leftMode === "Morse") {
        fromMorse(leftText)
    }

}

export {
    handleConversion
}

import lookupTable from "./data.js";

const invertKeyValuePairs = (obj) => Object.fromEntries(Object.entries(obj).map(pair => pair.reverse()))
const invertedLookupTable = invertKeyValuePairs(lookupTable);

// const invertKeyValuePairs = (object) => {
//     return Object.keys(object).reduce( (ret, key) => {
//         ret[object[key]] = key;
//         return ret;
//     }, {}); 
// };

// const invertedLookupTable = invertKeyValuePairs(lookupTable);

// const objectFlip = (obj) => {
//   return Object.keys(obj).reduce((ret, key) => {
//     ret[obj[key]] = key;
//     return ret;
//   }, {});
// }

import { left, right, leftMode, rightMode  } from "./dom.js";

const toMorse = (text) => {
    // console.log(text)
    return text.split("").map((char) => `${lookupTable[char]} `).join("");
};
const fromMorse = (text) => {
    console.log( text.split(" ") )
    console.log( Object.values(lookupTable) )
        console.log( text.split(" ").map((char) => Object.values(lookupTable)[char]) )



    return text.split(" ").map((char) => Object.values(lookupTable)[char]);
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

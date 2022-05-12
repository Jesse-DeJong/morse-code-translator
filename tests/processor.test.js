import { toMorse, fromMorse, handleConversion } from "../js/processor";
import { lookupTable } from "../js/data";

// beforeAll()

describe("Testing eng > morse conversion", () => {

})

describe("Testing morse > eng conversion", () => {

})

describe("Testing Handler Function", () => {

    // Convert into morse
    // Convert from morse
    // Handle wrong type (NaN/Undef/[])
    // Support alphabet, spaces, numbers

    it("should convert characters into morse correctly", () => {
        const a = "The quick brown fox jumped over the lazy dog";
        const b = "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.";

        expect(handleConversion(a).toBe(b));
    });

    it("should convert morse into characters correctly", () => {
        const a = "The quick brown fox jumped over the lazy dog";
        const b = "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.";

        expect(handleConversion(b).toBe(a));
    });

})
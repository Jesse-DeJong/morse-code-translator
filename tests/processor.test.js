import { handleConversion } from "../js/processor";

describe("Testing Conversion Function", () => {

    // Convert into morse
    // Convert from morse
    // Handle wrong type (NaN/Undef/[])
    // 

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
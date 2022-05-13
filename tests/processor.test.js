import { toMorse, fromMorse } from "../js/processor";

describe("Testing basic functionality", () => {
    it("should return a string", () => {
        expect(typeof toMorse("test text")).toBe("string");
        expect(typeof fromMorse("- . ... -  /  - . -..- - ")).toBe("string");
    });
    it("should convert spaces to / marks", () => {
        expect(toMorse(" ")).toBe("/");
    });
    it("should deliminate morse characters by spaces", () => {
        expect(fromMorse("- .... .")).toBe("the");
    });
    it("should deliminate morse words by / marks", () => {
        expect(fromMorse("- .... . / --.-")).toBe("the q");
    })
})

describe("Testing English to Morse conversion", () => {
    it("should convert characters into morse correctly", () => {
        const a = "the quick brown fox jumped over the lazy dog";
        const A = "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.";
        const b = "0400123456";
        const B = "----- ....- ----- ----- .---- ..--- ...-- ....- ..... -....";

        expect(toMorse(a)).toBe(A);
        expect(toMorse(b)).toBe(B);
    });
})

describe("Testing Morse to English conversion", () => {
    it("should convert morse into characters correctly", () => {
        const a = "the quick brown fox jumped over the lazy dog";
        const b = "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.";

        expect(fromMorse(b)).toBe(a);
    });
})

describe("Testing unsupported values", () => {
    it("should return non alphanumeric string values unchanged while converting valid values", () => {
        const a = "-";
        const b = "[";
        const c = "*";
        const d = "the quick brown ***++ fox"
        
        const A = "-";
        const B = "[";
        const C = "*";
        const D = "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ***++/ ..-. --- -..-"
    
        expect(toMorse(a)).toBe(A);
        expect(toMorse(b)).toBe(B);
        expect(toMorse(c)).toBe(C);
        expect(toMorse(d)).toBe(D);
    })
})
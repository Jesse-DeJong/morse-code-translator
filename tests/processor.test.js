import { toMorse, fromMorse } from "../js/processor";

//     // Convert into morse
//     // Convert from morse
//     // incorrect input (english in from morse, vice versa)
//     // Text includes 'undefined'
//     // Support alphabet, spaces, numbers
//     // should return a string
//     // should convert spaces to /

describe("Testing basic functionality", () => {
    it("should return a string", () => {
        expect(typeof toMorse("test text").toBe("string"));
        expect(typeof fromMorse("- . ... -  /  - . -..- - ").toBe("string"));
    });
    it("should convert spaces to /", () => {
        expect(toMorse(" ").toBe(" / "));
    });
    it("should deliminate morse characters by spaces", () => {
        expect(fromMorse("- .... .").toBe("the"));
    });
    it("should deliminate morse words by / mark", () => {
        expect(fromMorse("- .... . / --.-").toBe("the q"));
    })
})

describe("Testing English to Morse conversion", () => {
    it("should convert characters into morse correctly", () => {
        const a = "The quick brown fox jumped over the lazy dog";
        const A = "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.";
        const b = "0400123456";
        const B = "----- ....- ----- ----- .---- ..--- ...-- ....- ..... -.... ";

        expect(toMorse(a).toBe(A));
        expect(toMorse(b).toBe(B));
    });
})

describe("Testing Morse to English conversion", () => {
    it("should convert morse into characters correctly", () => {
        const a = "The quick brown fox jumped over the lazy dog";
        const b = "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. . -.. / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.";

        expect(fromMorse(b).toBe(a));
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
        const D = "- .... .  /  --.- ..- .. -.-. -.-  /  -... .-. --- .-- -.  /  ***++ /  ..-. --- -..- "
    
        expect(toMorse(a).toBe(A));
        expect(toMorse(b).toBe(B));
        expect(toMorse(c).toBe(C));
        expect(toMorse(d).toBe(D));
    })
})
// describe("Testing Handler Function", () => {



// })
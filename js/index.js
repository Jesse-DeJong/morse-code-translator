import { input } from "./dom.js";
import { handleConversion } from "./processor.js";

// Trigger for user inputing text
input.addEventListener("input", (e) => handleConversion(e));

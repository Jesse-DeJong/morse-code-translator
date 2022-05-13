import { left, right } from "./dom.js";
import { handleConversion } from "./processor.js";

// Trigger for user inputing text
left.addEventListener("input", (e) => handleConversion(e));

// right.addEventListener("input", (e) => handleConversion(e));

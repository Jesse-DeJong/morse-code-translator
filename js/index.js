import { left, right } from "./dom";
import { handleConversion } from "./processor";

// Triggers for user inputing text
left.addEventListener("input", (e) => handleConversion(e));
// right.addEventListener("input", (e) => handleConversion(e));
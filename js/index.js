import { input, mode, handleConversion, handleModeChange } from "./dom.js";
// import { handleModeChange } from "./processor.js";

// Trigger for user inputing text
input.addEventListener("input", (e) => handleConversion(e));
// Trigger for user changing conversion direction
mode.addEventListener("change", (e) => handleModeChange(e));

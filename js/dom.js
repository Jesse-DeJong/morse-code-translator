// DOM Targeting
const left = document.querySelector(".io__left__textarea");
const right = document.querySelector(".io__right__textarea");

const leftMode = document.querySelector(".io__left__option").value;
const rightMode = document.querySelector(".io__right__option").value;
const leftText = document.querySelector(".io__left__textarea").value;
const rightText = document.querySelector(".io__right__textarea").value;

export {
    left,
    right,
    leftMode,
    rightMode,
    leftText,
    rightText
}
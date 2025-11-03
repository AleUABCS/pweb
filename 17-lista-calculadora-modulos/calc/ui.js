let display = document.getElementById("display");

export function setDisplayValue (text) {
    display.value = text;
}

export function addDisplayValue (text) {
    display.value += text;
}

export function getDisplayValue () {
    return display.value;
}
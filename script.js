// RGB Colors

// Variables

// let previewBtnEl = document.getElementById("previewBtn");
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");

let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");

let widthInEl = document.getElementById("widthIn");
let heightInEl = document.getElementById("heightIn");

// Event Listner

redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);

widthInEl.addEventListener("change", changeSize);
heightInEl.addEventListener("change", changeSize);

// previewBtnEl.addEventListener("click", rgbPreview);

// Event Function

function rgbPreview() {
  // INPUT: Get red green and blue values
  let rValue = +redInEl.value;
  let gValue = +greenInEl.value;
  let bValue = +blueInEl.value;

  //   Validate Colors (Constrain colors between 0 - 255)

  //   RED
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;
  }

  //   GREEN
  if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInEl.value = 255;
  }

  //   BLUE
  if (bValue < 0) {
    bValue = 0;
    blueInEl.value = 0;
  } else if (bValue > 255) {
    bValue = 255;
    blueInEl.value = 255;
  }

  // PROCESS: Build RGB string
  let rgbString = `rgb(${rValue}, ${gValue}, ${bValue})`;

  // OUTPUT: Display RGB string and update color preview
  rgbStringOutEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}

function changeSize() {
  let wValue = +widthInEl.value;
  let hValue = +heightInEl.value;

  //   WIDTH
  if (wValue < 50) {
    wValue = 50;
    widthInEl.value = 50;
  } else if (wValue > 400) {
    wValue = 400;
    widthInEl.value = 400;
  }

  //   HEIGHT

  if (hValue < 50) {
    hValue = 50;
    heightInEl.value = 50;
  } else if (hValue > 200) {
    hValue = 200;
    heightInEl.value = 200;
  }

  displayEl.style.width = wValue + "px";
  displayEl.style.height = hValue + "px";
}

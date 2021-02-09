"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  const hour = s.slice(0, 2);
  const minSec = s.slice(2, 8);
  switch (s.slice(-2)) {
    case "AM":
      return hour === "12" ? "00" + minSec : s.slice(0, 8);
      break;
    case "PM":
      return hour === "12"
        ? s.slice(0, 8)
        : (parseInt(hour) + 12).toString() + minSec;
      break;
    default:
      break;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}

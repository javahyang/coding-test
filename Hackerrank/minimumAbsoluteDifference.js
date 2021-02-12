"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
  return arr
    .sort((a, b) => a - b)
    .reduce((acc, curr, idx) => {
      if (idx < arr.length - 1) {
        let newIdx = idx + 1;
        const absNumber = Math.abs(curr - arr[newIdx]);
        if (idx === 0) acc = absNumber;

        acc = absNumber < acc ? absNumber : acc;
      }

      return acc;
    }, 0);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = minimumAbsoluteDifference(arr);

  ws.write(result + "\n");

  ws.end();
}

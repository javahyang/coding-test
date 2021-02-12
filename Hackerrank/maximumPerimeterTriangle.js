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
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the maximumPerimeterTriangle function below.
function maximumPerimeterTriangle(sticks) {
  let max = -1;
  return sticks
    .sort((a, b) => a - b)
    .reduce(
      (acc, curr, idx) => {
        if (idx + 2 < sticks.length) {
          if (curr + sticks[idx + 1] > sticks[idx + 2]) {
            if (curr + sticks[idx + 1] + sticks[idx + 2] > max) {
              acc = [curr, sticks[idx + 1], sticks[idx + 2]];
              max = curr + sticks[idx + 1] + sticks[idx + 2];
            }
          }
        }
        return acc;
      },
      [-1]
    );
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const sticks = readLine()
    .split(" ")
    .map((sticksTemp) => parseInt(sticksTemp, 10));

  let result = maximumPerimeterTriangle(sticks);

  ws.write(result.join(" ") + "\n");

  ws.end();
}

console.log(maximumPerimeterTriangle([1, 2, 3, 4, 5, 10]));

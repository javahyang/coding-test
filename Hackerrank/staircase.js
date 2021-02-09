"use strict";

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

// Complete the staircase function below.
function staircase(n) {
  let idx = 1;
  while (idx <= n) {
    let str = "";
    let spaceCount = 1;
    while (spaceCount <= n - idx) (str += " "), spaceCount++;
    let symbolCount = 1;
    while (symbolCount <= idx) (str += "#"), symbolCount++;
    console.log(str);
    idx++;
  }
}

function main() {
  const n = parseInt(readLine(), 10);

  staircase(n);
}

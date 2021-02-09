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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const minMax = arr
    .sort((a, b) => a - b)
    .reduce(
      (acc, curr, idx) => {
        if (idx === 0) acc[0] += curr;
        else if (idx === arr.length - 1) acc[1] += curr;
        else (acc[0] += curr), (acc[1] += curr);
        return acc;
      },
      [0, 0]
    );
  console.log(minMax.join(" "));
}

function main() {
  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}

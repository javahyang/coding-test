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

function plusMinus(arr) {
  const countNumber = arr.reduce(
    (acc, curr) => {
      if (curr > 0) acc[0]++;
      else if (curr < 0) acc[1]++;
      else acc[2]++;
      return acc;
    },
    [0, 0, 0]
  );

  countNumber.map((item) => console.log((item / arr.length).toFixed(6)));
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  plusMinus(arr);
}

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

// Complete the luckBalance function below.
function luckBalance(k, contests) {
  const luck = contests
    .filter((item) => item[1] === 1)
    .map((item) => item[0])
    .sort((a, b) => b - a);
  const importantLuck = luck.splice(0, k);
  const exceptLuck = luck.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
  const unimportant = contests
    .filter((item) => item[1] === 0)
    .map((item) => item[0]);
  return (
    [...importantLuck, ...unimportant].reduce((acc, curr) => {
      importantLuck.length - k;
      acc += curr;
      return acc;
    }, 0) - exceptLuck
  );
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(" ");

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  let contests = Array(n);

  for (let i = 0; i < n; i++) {
    contests[i] = readLine()
      .split(" ")
      .map((contestsTemp) => parseInt(contestsTemp, 10));
  }

  const result = luckBalance(k, contests);

  ws.write(result + "\n");

  ws.end();
}

console.log(
  luckBalance(3, [
    [5, 1],
    [2, 1],
    [1, 1],
    [8, 1],
    [10, 0],
    [5, 0],
  ])
);

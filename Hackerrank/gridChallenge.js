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

// Complete the gridChallenge function below.
function gridChallenge(grid) {
  const sortedGrid = grid.map((item) => item.split("").sort());
  const newAcc = Array.from(Array(grid[0].length), () => Array());
  const reordered = sortedGrid.reduce((acc, curr, idx) => {
    curr.map((item, idx2) => {
      acc[idx2] = [...acc[idx2], item];
    });
    return acc;
  }, newAcc);
  return reordered.reduce((acc, curr, idx, arr) => {
    if (curr.join("") === curr.sort().join("")) {
      acc = 1;
    } else {
      acc = 0;
      arr.splice(1);
    }
    return acc;
  }, 0) === 1
    ? "YES"
    : "NO";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
      const gridItem = readLine();
      grid.push(gridItem);
    }

    let result = gridChallenge(grid);

    ws.write(result + "\n");
  }

  ws.end();
}

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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  const new_board_acc = Array.from(Array(arr.length - 2), () => Array());
  const hourglass = arr.reduce((acc, curr, idx) => {
    if (idx + 2 < arr.length) {
      curr.map((item, idx2) => {
        if (idx2 + 2 >= curr.length) return false;
        const first = item + curr[idx2 + 1] + curr[idx2 + 2];
        const second = arr[idx + 1][idx2 + 1];
        const third =
          arr[idx + 2][idx2] + arr[idx + 2][idx2 + 1] + arr[idx + 2][idx2 + 2];
        acc[idx][idx2] = first + second + third;
      });
    }
    return acc;
  }, new_board_acc);

  const hourglassSum = hourglass.reduce((acc, curr, idx) => {
    curr.map((item, idx2) => {
      if (idx === 0 && idx2 === 0) acc = item;
      else acc < item ? (acc = item) : acc;
    });
    return acc;
  }, 0);
  return hourglassSum;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  let result = hourglassSum(arr);

  ws.write(result + "\n");

  ws.end();
}

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

// Complete the flippingBits function below.
function flippingBits(N) {
  // 2진수 만들기
  // let binaryArr = [];
  // while (N >= 1) {
  //   binaryArr.unshift(N % 2 === 1 ? 0 : 1);
  //   N = parseInt(N / 2);
  // }

  let sum = 0;
  let m = 0;
  while (m < 32) {
    sum += Math.pow(2, m);
    m++;
  }
  return sum - N;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const n = parseInt(readLine(), 10);

    const result = flippingBits(n);

    ws.write(result + "\n");
  }

  ws.end();
}

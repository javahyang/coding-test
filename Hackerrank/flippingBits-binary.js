function flippingBits(N) {
  // Complete this function
  const binary = parseInt(N, 10).toString(2).split("");

  while (binary.length < 32) {
    binary.unshift("0");
  }
  return parseInt(
    binary
      .map((i) => {
        return i === "0" ? "1" : "0";
      })
      .join(""),
    2
  );
}

console.log(flippingBits(9));

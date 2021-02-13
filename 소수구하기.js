function primeNumber(n) {
  let isPrime = Array.from(Array(n)).fill(true);

  for (let i = 0; i < isPrime.length; i++) {
    if (i === 0) isPrime[i] = false;
    else if (isPrime[i] !== false) {
      let k = 2;
      while ((i + 1) * k <= n) {
        isPrime[(i + 1) * k - 1] = false;
        k++;
      }
    }
  }
  console.log(isPrime);
  const primeArr = isPrime.reduce((acc, curr, idx) => {
    if (curr !== false) {
      acc.push(idx + 1);
    }
    return acc;
  }, []);
  console.log(primeArr);

  const primeNumbers = isPrime.filter((item, idx) => item !== false);
  console.log(primeNumbers.length);
}

console.log(primeNumber(10));

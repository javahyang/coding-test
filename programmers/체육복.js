function solution(n, lost, reserve) {
  const ownClothes = n - lost.length;
  let ownSpare = reserve.filter((item) => lost.includes(item)).length;
  console.log("자기가 챙겨온 여벌:", ownSpare);
  if (ownSpare === lost.length) return n;

  let noSpare = lost.filter((item) => !reserve.includes(item));
  console.log("빌려입어야 하는 사람:", noSpare);
  let otherSpare = reserve.filter((item) => !lost.includes(item));
  console.log("이용할수 있는 여벌:", otherSpare);
  let result = otherSpare.reduce((acc, curr) => {
    if (noSpare.indexOf(curr) > -1) {
      noSpare.splice(noSpare.indexOf(curr), 1);
      acc.add(curr);
    } else if (curr - 1 >= 1 && noSpare.indexOf(curr - 1) > -1) {
      noSpare.splice(noSpare.indexOf(curr - 1), 1);
      acc.add(curr - 1);
    } else if (curr + 1 <= n && noSpare.indexOf(curr + 1) > -1) {
      noSpare.splice(noSpare.indexOf(curr + 1), 1);
      acc.add(curr + 1);
    }
    return acc;
  }, new Set());
  console.log("빌려입은 옷:", Array.from(result));
  return ownClothes + ownSpare + result.size;
}

console.log(solution(5, [2, 3, 4], [1, 2, 3])); // 4
console.log(solution(3, [3], [1])); // 2

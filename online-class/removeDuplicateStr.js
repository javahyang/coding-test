// 중복되는 단어 제거하기 - 유니크한 단어만 남기기
function solution(str) {
  return str.filter((v, i) => {
    // 처음 나오는 index를 구하기에 중복인 단어는 걸러진다.
    return str.indexOf(v) === i;
  });
}

console.log(solution(["good", "time", "good", "time", "student"]));

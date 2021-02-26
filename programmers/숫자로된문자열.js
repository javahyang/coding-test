function solution(s) {
  if (!(s.length === 4 || s.length === 6)) return false;
  else if (s.replace(/[0-9]/g, "") !== "") return false;
  else return true;
}

function solution2(s) {
  const regexp = /^\d{6}$|^\d{4}$/;
  return regexp.test(s);
}

console.log(solution("a234"));
console.log(solution("1234"));

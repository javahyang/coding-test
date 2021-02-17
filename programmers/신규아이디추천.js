function solution(new_id) {
  let new_id_lower = new_id.toLowerCase();
  let new_id_arr = [];
  const regexp = RegExp("[a-z0-9-_.]", "g");
  let array1;
  while ((array1 = regexp.exec(new_id_lower)) !== null) {
    new_id_arr.push(array1[0]);
  }
  let new_id_one_dot = [];
  while (new_id_arr.length) {
    let x = new_id_arr.shift();
    if (x === "." && new_id_one_dot.length > 0) {
      if (new_id_one_dot[new_id_one_dot.length - 1] !== ".")
        new_id_one_dot.push(x);
    } else new_id_one_dot.push(x);
  }
  if (new_id_one_dot.length > 0) {
    if (new_id_one_dot[0] === ".") new_id_one_dot.shift();
    if (new_id_one_dot[new_id_one_dot.length - 1] === ".") new_id_one_dot.pop();
  }
  if (new_id_one_dot.length === 0) {
    new_id_one_dot.push("a");
  }
  if (new_id_one_dot.length >= 16) {
    new_id_one_dot = new_id_one_dot.slice(0, 15);
    if (new_id_one_dot[new_id_one_dot.length - 1] === ".") new_id_one_dot.pop();
  } else if (new_id_one_dot.length <= 2) {
    let lastChar = new_id_one_dot[new_id_one_dot.length - 1];
    while (new_id_one_dot.length < 3) {
      new_id_one_dot.push(lastChar);
    }
  }

  return new_id_one_dot.join("");
}

// console.log(solution("...!@BaT#*..y.abcdefghijklm"));
// console.log(solution("z-+.^."));
// console.log(solution("=.="));
console.log(solution("123_.def"));

function solution2(new_id) {
  const answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "") // 특정문자(소문자, 숫자, _, -)만 허용 - 나머지는 제거
    .replace(/\.+/g, ".") // 조건에 해당하는 반복해서 나오는 문자를 하나로 치환
    .replace(/^\.|\.$/g, "") // 시작 또는 끝에 나오는 문자 제거
    .replace(/^$/, "a") // 빈문자일 때(시작과 끝 사이에 아무것도 없음) 원하는 문자로 치환
    .slice(0, 15)
    .replace(/\.$/, ""); // 조건에 맞는 끝 문자 제거
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len); // 원하는 개수만큼 반복
}

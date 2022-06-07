// 기존 코드
function solution(s) {
  if (s.length % 2 === 1) return 0;
  let sArr = s.split("");
  for (let i = 0; i < sArr.length - 1; i++) {
    if (sArr[i] === sArr[i + 1]) {
      sArr.splice(i, 2);
      i = -1;
    }
  }

  return !!sArr.length ? 0 : 1;
}

// 개선 코드
function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    const stackLength = stack.length;
    const target = s[i];
    if (stackLength === 0 || stack[stackLength - 1] !== target) stack.push(target);
    else stack.pop();
  }

  return stack.length ? 0 : 1;
}


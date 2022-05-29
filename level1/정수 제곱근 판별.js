function solution(n) {
  let tmp = 0;
  let answer = 0;
  for (let i = 1; i <= n; i += 1) {
    if (n / i === i) {
      tmp = i;
      break;
    }
  }
  if (tmp > 0) answer = (tmp + 1) ** 2;
  else answer = -1;
  return answer;
}

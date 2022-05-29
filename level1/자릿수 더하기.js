function solution(n) {
  const answer = String(n).split('').reduce((acc, cur) => Number(acc) + Number(cur), 0);
  return answer;
}

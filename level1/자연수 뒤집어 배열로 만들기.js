function solution(n) {
  const answer = String(n).split('').reverse().map((v) => Number(v));
  return answer;
}

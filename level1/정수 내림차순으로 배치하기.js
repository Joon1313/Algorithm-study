function solution(n) {
  const answer = Number(String(n).split('').sort((a, b) => b - a).join(''));
  return answer;
}

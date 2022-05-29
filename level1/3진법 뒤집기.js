function solution(n) {
  const tmp = n.toString(3).split('').reverse().join('');
  const answer = parseInt(tmp, 3);
  return answer;
}

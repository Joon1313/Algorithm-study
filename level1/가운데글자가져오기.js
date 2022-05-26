function solution(s) {
  let answer = '';
  const stringLength = [...s].length;
  const half = Math.floor(stringLength / 2);
  if (stringLength % 2 === 0) answer = [...s].slice(half - 1, half + 1).join('');
  else answer = s[half];
  return answer;
}

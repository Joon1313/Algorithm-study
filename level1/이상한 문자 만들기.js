function solution(s) {
  const answer = s.split(' ').map((v) => v.split('').map((str, j) => {
    if (j % 2 === 0) return str.toUpperCase();
    return str.toLowerCase();
  }).join('')).join(' ');
  return answer;
}

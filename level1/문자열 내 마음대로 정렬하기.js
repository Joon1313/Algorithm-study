function solution(strings, n) {
  const temp = strings.map((string, i) => string[n] + i).sort().map((v) => strings[v[1]]);
  // const answer = temp.map((string, i) => string[n + 1] + i).sort().map((v) => temp[v[1]]);
  return answer;
}

solution(['abce', 'abcd', 'cdx'], 2);

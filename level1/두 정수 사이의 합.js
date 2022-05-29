function solution(a, b) {
  let answer = 0;
  const min = a > b ? b : a;
  const max = a > b ? a : b;
  for (let i = min; i <= max; i += 1) {
    const element = i;
    answer += element;
  }
  return answer;
}

solution(3, 5);

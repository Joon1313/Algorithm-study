function solution(arr, divisor) {
  const answer = [];
  for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];
    if (element % divisor === 0) answer.push(element);
  }
  answer.sort((a, b) => a - b);
  if (answer.length === 0) answer.push(-1);
  return answer;
}

solution([5, 9, 7, 10], 5);

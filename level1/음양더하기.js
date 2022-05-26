function solution(absolutes, signs) {
  const numbers = [];
  const answer = absolutes.reduce((prev, current, i) => {
    if (signs[i]) {
      return prev + current;
    }
    return prev + (current * -1);
  }, 0);
  return answer;
}

function solution(numbers, hand) {
  const H = hand === 'left' ? 'L' : 'R';
  const numberLocation = [[1, 4, 7], [2, 5, 8, 0], [3, 6, 9]];
  let left = [0, 3];
  let right = [2, 3];
  let answer = '';
  for (let i = 0; i < numbers.length; i += 1) {
    const targetLocation = [];
    for (let j = 0; j < numberLocation.length; j += 1) {
      const isFind = numberLocation[j].findIndex((num) => num === numbers[i]);
      if (isFind !== -1) {
        targetLocation.push(j);
        targetLocation.push(isFind);
      }
    }
    if (targetLocation[0] === 0) {
      answer += 'L';
      left = targetLocation;
    } else if (targetLocation[0] === 2) {
      answer += 'R';
      right = targetLocation;
    } else {
      const 왼손 = Math.abs(left[0] - targetLocation[0]) + Math.abs(left[1] - targetLocation[1]);
      const 오른손 = Math.abs(right[0] - targetLocation[0]) + Math.abs(right[1] - targetLocation[1]);

      if (왼손 === 오른손) {
        answer += H;
        if (H === 'L') left = targetLocation;
        else right = targetLocation;
      } else if (왼손 > 오른손) {
        answer += 'R';
        right = targetLocation;
      } else {
        answer += 'L';
        left = targetLocation;
      }
    }
  }

  return answer;
}

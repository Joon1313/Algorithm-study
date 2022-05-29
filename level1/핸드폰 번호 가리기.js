function solution(phone_number) {
  const answer = phone_number.split('').map((v, i) => {
    if (i < phone_number.length - 4) return '*';
    return v;
  }).join('');
  return answer;
}

solution('01033334444');

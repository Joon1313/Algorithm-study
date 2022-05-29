function solution(price, money, count) {
  for (let i = 1; i <= count; i += 1) {
    money -= price * i;
  }

  const answer = money < 0 ? Math.abs(money) : 0;
  return answer;
}

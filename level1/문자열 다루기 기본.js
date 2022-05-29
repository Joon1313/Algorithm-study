function solution(s) {
  return (s.length === 4 || s.length === 6) ? !/[^0-9]/gi.test(s) : false;
}

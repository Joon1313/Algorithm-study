function solution(s) {
  let p = 0;
  let y = 0;
  const str = s.toLowerCase().split('');
  str.forEach((v) => {
    if (v === 'p') p += 1;
    if (v === 'y') y += 1;
  });
  return p === y;
}

solution('pPoooyY');

function solution(info, query) {
  const infoList = ['lang', 'job', 'career', 'food', 'score'];
  const answer = [];
  // db 생성
  const db = {
    lang: [],
    job: [],
    career: [],
    food: [],
    score: [],
  };
  // db 주입
  for (let index = 0; index < info.length; index += 1) {
    const arr = info[index].split(' ');
    for (let j = 0; j < arr.length; j += 1) {
      db[infoList[j]].push(arr[j]);
    }
  }
  // 쿼리
  for (let i = 0; i < query.length; i += 1) {
    const firstFindIndexList = [];
    let isFind = false;
    let findIndex = 0;
    const arr = query[i].split(' ').filter((v) => v !== 'and');
    for (let j = 0; j < arr.length; j += 1) {
      if (isFind === true) {
        findIndex = j;
        break;
      }
      if (arr[j] !== '-') {
        for (let k = 0; k < db[infoList[j]].length; k += 1) {
          if (j === arr.length - 1) {
            if (db[infoList[j]][k] >= Number(arr[j])) {
              firstFindIndexList.push(k);
              isFind = true;
            }
          } else if (db[infoList[j]][k] === arr[j]) {
            firstFindIndexList.push(k);
            isFind = true;
          }
        }
      }
    }
    if (i === 4) {
      debugger;
    }
    for (let jj = findIndex; jj < arr.length; jj += 1) {
      if (arr[jj] !== '-') {
        for (let kk = 0; kk < firstFindIndexList.length; kk += 1) {
          if (firstFindIndexList[kk] !== false) {
            if (jj === arr.length - 1) {
              if (db[infoList[jj]][firstFindIndexList[kk]] < Number(arr[jj])) firstFindIndexList[kk] = false;
            } else if (db[infoList[jj]][firstFindIndexList[kk]] !== arr[jj]) { firstFindIndexList[kk] = false; }
          }
        }
      }
    }
    const filterList = firstFindIndexList.filter((v) => v !== false);
    answer.push(filterList.length);
  }
  return answer;
}

const info = ['java backend junior pizza 150', 'python frontend senior chicken 210', 'python frontend senior chicken 150', 'cpp backend senior pizza 260', 'java backend junior chicken 80', 'python backend senior chicken 50'];
const query = ['java and backend and junior and pizza 100', 'python and frontend and senior and chicken 200', 'cpp and - and senior and pizza 250', '- and backend and senior and - 150', '- and - and - and chicken 100', '- and - and - and - 150'];
console.log(solution(info, query));

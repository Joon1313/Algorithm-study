const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
];
const k = 2;

console.log(solution(id_list, report, k));

function solution(id_list, report, k) {
  let answer = {};
  id_list.forEach((ids) => {
    answer[ids] = 0;
  });
  const 중복체크 = [];
  const report_list = {};
  report.forEach((v) => {
    if (!중복체크.includes(v)) {
      중복체크.push(v);
      const [userId, reportId] = v.split(' ');
      if (report_list[reportId]) {
        report_list[reportId].push(userId);
      } else {
        report_list[reportId] = [userId];
      }
    }
  });

  console.log(answer);
  for (const rep in report_list) {
    if (report_list[rep].length >= k) {
      report_list[rep].forEach((v) => {
        const index = id_list.findIndex((id) => id === v);
        answer[v] = answer[v] + 1;
      });
    }
  }
  answer = Object.values(answer);
  return answer;
}

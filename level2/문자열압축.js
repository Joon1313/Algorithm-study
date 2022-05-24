function solution(s) {
    const answer = [];
      for (let i = 1; i <= s.length; i += 1){
        const arr = [...s];
        let format = "";
        let count = 1;
        while(arr.length){
          const spliceStr = arr.splice(0,i).join("");
          const sliceStr = arr.slice(0,i).join("");
          if(spliceStr === sliceStr){
            count += 1;
          }else if(count > 1){
                format += `${count}${spliceStr}`;
                count = 1;
            }else{
                format += spliceStr;
            }
          
        }
        answer.push(format.length);
      }
      return Math.min(...answer);
    }
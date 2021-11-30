function runLengthEncoding(string) {
    let i =0;
    let j= 0;
    let str = '';
      while(j<string.length){
        if(string.charAt(j)===string.charAt(i))
              j++;
        else
            {
              let windowSize = j-i;
              while(windowSize>9){
              str+=(9+string.charAt(i));
              windowSize-=9;
              }
             str+=(windowSize+string.charAt(i));
             i=j;
            }
      }
      console.log(str);
      return str;
  }
  
  const res = runLengthEncoding('AAAAAAAAAAAAABBCCCCDD');
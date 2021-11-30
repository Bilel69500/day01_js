function validIPAddresses(string) {
   
      const adresseIpTrouver = [];
      for(let i = 0; i < Math.min(string.length, 4); i++){
          const adresseIP = ['', '', '', ''];
            
        
          adresseIP[0] = string.slice(0, i);
            
              if(!isValidPart(adresseIP[0])) continue;
              console.log(adresseIP[0]);
      
              for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++){
                adresseIP[1] = string.slice(i, j);
                  if(!isValidPart(adresseIP[1])) continue;
                     
              for(let k = j + 1; k < j + Math.min(string.length - j, 4); k++){
                adresseIP[2] = string.slice(j,k);
                adresseIP[3] = string.slice(k);
                  
                  if(isValidPart(adresseIP[2]) && isValidPart(adresseIP[3])){
                    adresseIpTrouver.push(adresseIP.join('.'));
                  }
              }
          }
      }
    return adresseIpTrouver;
  }
  

  function isValidPart(string){

      let stringAsInt = parseInt(string);
      
    
      if(stringAsInt > 255 || stringAsInt < 0){
          return false
      }
      
      
      return string.length === stringAsInt.toString().length;;
  }
  
  console.log(validIPAddresses("1921680"));
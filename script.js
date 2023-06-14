// function evenOrOdd(number) {
//     if(number %2 == 0){
//       return("Even");
//     } else {
//       return("Odd");
//     }
// }

let number = 8;

function opposite(number) {
  let result;
  if (!isNaN(Math.sign(number))) {
    result = number * (-1);
  }
  return result;
}

function boolToWord( bool ){
    //...
    if (bool == true) 
    {
      return 'Yes';
    } else {
      return 'No';
    }
}



function solution(str){
    return str.split('').reverse().join('');  
  }
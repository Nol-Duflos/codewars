// function evenOrOdd(number) {
//     if(number %2 == 0){
//       return("Even");
//     } else {
//       return("Odd");
//     }
// }

// let number = 8;

// function opposite(number) {
//   let result;
//   if (!isNaN(Math.sign(number))) {
//     result = number * (-1);
//   }
//   return result;
// }

// function boolToWord( bool ){
//     //...
//     if (bool == true) 
//     {
//       return 'Yes';
//     } else {
//       return 'No';
//     }
// }



// function solution(str){
//     return str.split('').reverse().join('');  
// }

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }




// positiveSum = [1,2,-3,4,5];
// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.lenght; i++){
//     if (arr[i] >=0) sum +=arr[i];
//   } 
//   return sum;
// }

// function positiveSum(arr) {
//   return arr.filter(number => number > 0).reduce((total, currentValue) => {
//     return total + currentValue;
//   }, 0);
// }

// function repeatStr (n, s) {
//   let repetition = '';
//   while (n>0) {
//     repetition += s;
//     n--;
//   }
  
//   return repetition;
// }

// //Cette version du code est plus court : 
// function repeatStr (n, s) {
//   return s.repeat(n);
// }

// function makeNegative(num) {
//   // Code?
//   return num > 0 ? -num : Math.abs(num);
// }

// function makeNegative(num) {
//   // Code?
//   if (num >= 0) {
//     return num * -1;
//   } else {
//     return num;
//   }
// }

// let bullets = 10;
// let dragons = 5;


// function hero(bullets, dragons){
//   //Get Coding!
//     if(bullets / dragons >= 2){
//       return true;
//     } else {
//       return false;
//     }
//   }


let arrayOfSheep = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

// let lenght = list.length;

// console.log(lenght);

var stringToNumber = function(str){
  // put your code here
  return Number(str);
}
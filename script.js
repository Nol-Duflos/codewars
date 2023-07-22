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


// let arrayOfSheep = [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true];

// // let lenght = list.length;

// // console.log(lenght);

// var stringToNumber = function(str){
//   // put your code here
//   return Number(str);
// }

// function person(name, age, color) {
//   this.name = name;
//   this.age = age;
//   this.Favcolor = color;
// }
// let John = new person("John", 42, "Green");
// let Amy =  new person("Amy", 21, "Red");

// console.log(John.age);
// console.log(p2.name);

// function main() {

//   var flightNumber = "SBI 3205";
//   var flightStatus = "delayed";

//   var flight1 = new Flight(flightNumber, flightStatus);

//   console.log('The flight ' + flight1.number + ' Is ' + flight.status);
// }

// function Flight(flightNumber, status) {
//   this.number = flightNumber;
//   this.status = status;
// }

// var John = {name: "John", age: 25};
// var James = {name: "James", age: 21};
// //Les objets sont fait de propriétés qui sont utilisés pour décrirent l'objet. Les valeurs de la propriété d'un objet peuvent soit contenir de de la data primaire, soit d'autres objets
// //Les méthodes sont des fonctions qui sont comprises comme des propriétés d'objets.
// nomMethode = function() {
//   //Lignes de codes
// }
// //C'est avec cette syntax qu'on accède à l'object
// nomObject.nomMethode();

// //Une méthode est une fonction qui appartient à un object. On y fait référence avec le mot-clef "This"
// function person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.changeName = function(name) {
//     this.name = name;
//   }
// }

// var p = new person("Davis", 23);
// p.changeName("John"); //Maintenant, quand on appelle p.name, on obtient "John";

// this.changeprice = function(price) {
//   this.price = price - (discount*price);
// }

// function main() {
//   var proID = readLine();
//   var price = parseInt(readLine(), 10);
//   var discount = parseInt(readLine(), 10);

//   var prod1 = new CSSMathProduct(proID, price);
//   console.log(prod1.proID + " price: " + prod1.price);

//   prod1.changeprice(discount);
//   console.log(prod1.proID + " new price: " + prod1.price);
// }

// function Product(proID, price) {
//   this.proID = proID;
//   this.price = price;

//   this.changeprice = function(discount) {
//     this.price = price - (discount*price);
//   }
// }

// //Price-((discount/100)*Price)

// function quelquun(name, age) {
//   this.name = name;
//   this.age = age;
//   this.yearOfBirth = bornYear;
// }

// function bornYear() {
//   return 2016 - this.age;
// }

// var p3 = new quelquun("A", 22);
// console.log(p3.yearOfBirth());

// var myString = "abcdef";
// console.log(myString.length);

// //Contact (name, number)

// NomMethode = function() {
//   //Ton code
//   this.contact = contact;
// }

// function contact(name, number) {
//   this.name = name;
//   this.number = number;

//   this.print = function(){
//     console/log(this.name + ": " + this.number);
//   }
// }

// function print() {
//   console.log(this.name + ": " + this.number);
// }

// var a = new contact("David", 12345);
// var b = new contact("Amy", 9363343680);

// a.print();
// b.print();

const numbers = [/*1, 5.2, 4, 0, -1*/];

function sum (numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((x,y) => x + y );
}
// let sum = numbers.reduce((x,y) => x + y ); //(accumulator, currentValue) => accumulator + currentValue,
// console.log(sum);

function sum (numbers) {
  if (numbers.length === 0 ) return 0;
  return numbers.reduce((x,y)=>x+y);
};

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
};

function lovefunc(flower1, flower2){
  // moment of truth
  if (flower1 %2 == 0 && flower2 %2 == 0) {
    return false;
  } else if (flower1 %2 != 0 && flower2 %2 == 0) {
    return true;
  } else if (flower1 %2 == 0 && flower2 %2 != 0) {
    return true;
  }
}

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

function greet(name){
  //your code here
  return `Hello, ${name} how are you doing today?`
}

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  
  classPoints.push(yourPoints);
  if (classPoints.reduce((x,y)=>x+y) <= yourPoints) {
    return true 
    } else if (classPoints.reduce((x,y)=>x+y) > yourPoints){
    return false;
    }
}

const betterThanAverage(classPoints, yourPoints) => 
  return yourPoints > classPoints.reduce((x,y)=>x+y) / classPoints.length;

function isTriangle(a,b,c)
{
   return ( a + b > c ) && ( b + c > a) && ( a + c > b );
}

function maps(x){
  return x.map(num => num * 2);
}

//créer une fontion qui retourne l'air si c'est un carrée ou le perimêtre si c'est un rectangle
//Du premier coup!!
const areaOrPerimeter = function(l , w) {
  if(l == w){
    return(l*w);
  } else {
    return((l+w)*2);
  }
  // Return your answer
};

//Inverse l'ordre d'une liste:
//Du premier coup !!
//J'ai tout de suite deviné qu'il fallait la mathode 'reverse()' :D
function reverseList(list) {
  return list.reverse();
}

//Créer une fonction qui retourne le volume d'un cuboïde
//Du premier coup !
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
    return length*width*height;
  }
}

//Ecrit une fonction qui convertie les cm/s en km/h
function cockroachSpeed(s) {
  return parseInt(s*100000 / 3600);
  //Good Luck!
}

//Est-ce qu'il y auras assez d'espace ?
//J'ai galéré pour celle là alros que le calcul est simple T_T

function enough(cap, on, wait) {
  // your code here
  if(cap - (on + wait) >= 0){
    return 0;
  } else {
    return (on + wait) - cap;
  }
}
//You only need one - Beginner
//Ecrit une fonction qui vérifie si un nombre x se trouve dans une array a
function check(a, x) {
  // your code here
  return a.includes(x);
}

//
//écrit une fonction qui prend en compte le status de la personne 
//Si name = Owner, retourner "Hello boss"
function greet (name, owner) {
  // Add code here
  if(name == owner){
    return "Hello boss";
  }else{
    return "Hello guest";
  }
}

//écrit une fonction qui retourne la position dans l'alphabet d'une lettre
//Je me suis aidé d'internet pour trouver la méthode employé "CharCodeAt()" et l'importance de calculer par -96 pour le code ASCII

function position(letter){
//Write your own Code!
  let position = letter.charCodeAt() - 96;
  return `Position of alphabet: ${position}`;
}

let dec = parseInt(prompt("Entrez un nombre decimal : "));

console.log(dec);//<-- Cette valeur sera modifier, donc n'utilise PAS de const
let reponse = `La valeur de ${dec} en hexadécimal est : `;


const listConv = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

let hex = "";
let calcul; 

while(dec > 0){
    calcul = dec % 16;
    hex = listConv[calcul] + hex;
    dec = Math.floor(dec / 16);
}
console.log(reponse, hex);


let dec = parseInt(prompt("Entrez un nombre decimal : "));

console.log(dec);//<-- Cette valeur sera modifier, donc n'utilise PAS de const
let reponse = `La valeur de ${dec} en hexadécimal est : `;


const listConv = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

let hex = "";
let calcul; 

while(dec > 0){
    calcul = dec % 16;
    hex = listConv[calcul] + hex;
    dec = Math.floor(dec / 16);
}
console.log(reponse, hex);


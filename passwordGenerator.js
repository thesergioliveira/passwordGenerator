//1ST Resolution
const generatePassword = () => {
  let length = 30;
  let charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (let i = 0; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * charset.length - 1));
  }
  console.log(retVal);
};
generatePassword();

console.log("--------2ND Resolution--------------------------");

let charSet = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "i",
  "o",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
let charNumSp = [
  "0",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "_",
  "=",
  "{",
  "}",
  "|",
  "]",
  "[",
  ":",
  "'",
  ";",
  "?",
  ">",
  "<",
  ".",
  "`",
  "~",
];
/* 
const passGen = (size) => {
  let newSize = size / 2;
  let password = "";
  for (let i = 1; i <= newSize; i++) {
    if (i % 2 == 0) {
      password += charSet[Math.floor(Math.random() * charSet.length - 1)];
    } else {
      password += charSet[
        Math.floor(Math.random() * charSet.length - 1)
      ].toUpperCase();
    }
  }
  for (let i = 1; i <= newSize; i++) {
    password += charNumSp[Math.floor(Math.random() * charNumSp.length - 1)];
  }

  return password;
}; */

//console.log(passGen(20));
//passGen();
console.log("----------VivSolution----------------------");
const passwordGen = () => {
  let numb = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
  let alphaLc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  //                     0,   1,   2,   3,   4,   5,  6,     7 = 8
  let specialCharacters = ["!", "§", "$", "%", "&", "?", "@", "€"];
  let password = "";
  for (let i = 0; i < 30; i++) {
    let spChr =
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    let alpha = alphaLc[Math.floor(Math.random() * alphaLc.length)];
    let alphaUpper = alpha.toUpperCase();

    if (i % 2 == 0) {
      //((Math.floor(Math.random()) * 100) % 2 == 0)
      password += alpha;
    } else if (i % 3 == 0) {
      //((Math.floor(Math.random()) * 100) % 3 == 0)
      password += alphaUpper;
    } else if (i % 5 == 0) password += Math.floor(Math.random()) * 10;
    //((Math.floor(Math.random()) * 100) % 5 == 0)
    else {
      password += spChr;
    }
  }
  return password;
};
console.log(passwordGen());

// console.log(passwordGen());
// other way

console.log("----------HadiSolution----------------------");
let numbers = [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
let alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let charactersSp = ["!", "§", "$", "%", "&", "?", "@", "€"];
const passGen = () => {
  let result = "";
  const randomNumGetter = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };
  for (let i = 0; i <= 17; i++) {
    // #18
    if (i % 2 == 0) {
      //0,2,4,6,8,10,12,14,16 = #9
      result += numbers[randomNumGetter(numbers)];
    }
    if (i % 3 == 0) {
      // 3,9,15 = #3
      result += alpha[randomNumGetter(alpha)].toUpperCase();
    } else {
      // 1,7,11,13,17 + #5
      result += alpha[randomNumGetter(alpha)];
    }
    if (i % 5 == 0) {
      // 5 +#1
      result += charactersSp[randomNumGetter(charactersSp)];
    }
  }
  return result;
};

console.log(passGen());

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
};

console.log(passGen(20));
//passGen();

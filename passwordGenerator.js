//1ST Resolution
  const generatePassword = () => {
    let length = 30;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(retVal);
}
generatePassword();

//2ND Resolution

let charset =  ["q", "w","e", "r", "t", "y", "i", "o", "a", "s", "d", "f", "g", "h", "j","k", "l", "z", "x", "c", "v", "b","n","m"];
let numbers = ["0", "2", "3", "4", "5", "6", "7", "8", "9"];
let charSp = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", "{", "}", "|", "]", "[", ":", "'", ";", "?", ">", "<", ".", "`", "~", """,]
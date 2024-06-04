const score =55;

const balance = new Number(100);
console.log(balance);
console.log(score);

//to convert number to string
const balance1 = balance.toString();
console.log(typeof balance1);

//To use decimal 
console.log(balance.toFixed(2));

//To get roundup value of decimal
const otherNumber = 152.9245;
console.log(otherNumber.toPrecision(3));

//To get comma , on numbers
const num = 10000000;
console.log(num.toLocaleString());


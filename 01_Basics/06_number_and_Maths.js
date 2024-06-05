const score = 55;

const balance = new Number(100);
// console.log(balance);
// console.log(score);

//to convert number to string
const balance1 = balance.toString();
// console.log(typeof balance1);

//To use decimal
// console.log(balance.toFixed(2));

//To get roundup value of decimal
const otherNumber = 152.9245;
// console.log(otherNumber.toPrecision(3));

//To get comma , on numbers
const num = 10000000;
// console.log(num.toLocaleString());

//******************MATHS***************************//

console.log(Math);
//To get absoluate of a number
console.log(Math.abs(-8));

//To roundup value
console.log(Math.round(3.566));

//To generate random value 0-1
console.log(Math.random());
//To get a value in singe digits
console.log(Math.floor(Math.random() * 10 + 1));
console.log(Math.random() * 10 + 1);
//TO generate number between 1-100
const max=1;
const min=100;

console.log(Math.floor(Math.random() * (max-min+1))+min);



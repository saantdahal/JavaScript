//Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

//Months are starts with 0 in this formatjs
let myCreateDate = new Date(2024, 5, 24);
console.log(myCreateDate.toDateString());
//Another format (like :  DD-MM-YY)
 myCreateDate = new Date("06-05-2024");
console.log(myCreateDate.toString());

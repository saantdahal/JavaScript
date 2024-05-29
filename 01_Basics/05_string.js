const name = "santosh";
const repo = 30;

//console.log(name + repo + " Hello"); Outdated concatinate

console.log(`Hello my name is ${name} and my repo is ${repo}`);

//Declare string through object

const gameName = new String('Clash of Clans');
console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('o'));
console.log(gameName.charAt(9));
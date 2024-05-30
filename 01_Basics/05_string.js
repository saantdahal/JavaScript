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

const newString = gameName.substring(0,4);//Print range of 0-3 .slice gave negative values
console.log(newString);

//.trim() functions use to remove unicerssary spaces"    hello   "

//replace() is used to replca value on url

const url = "https//:www.santosh%20dahal.info.np";
console.log(url.replace('%20',' '));




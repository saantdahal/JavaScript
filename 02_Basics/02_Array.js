const marvel_heros = ["Thor", "ironman", "Spiderman"];
const dc_heros = ["Supreman", "Flash", "Antman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);

console.log(marvel_heros[3][1]);
//USe to combine array without changing original array it creates a new array
const allHero = marvel_heros.concat(dc_heros);
console.log(allHero);

//Spread operator
//It seprate all item

const all_New_Heros = [...marvel_heros, ...dc_heros];
console.log(all_New_Heros);

//Making array from string

console.log(Array.from("Santosh"));
console.log(Array.from({ name: "Santosh" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
console.log(Array.of(score1, score2, score3, score4));

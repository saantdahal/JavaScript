// Stack -> Store premetive
// Heap -> non-premetives or refrence

//-----------Stack----------------
let myCollegeName = "JMC";
let antoherName = myCollegeName;

console.log(myCollegeName);
console.log(antoherName);

//--------------Heap----------------

let user1 = {
  name: "santosh",
  email: "email@google.com",
};

let user2 = user1;

user2.name = "User 2";

console.log(user1.name);
console.log(user2.name);

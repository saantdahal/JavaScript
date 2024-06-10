// Singleton
//object literals

//create a object
//create a object through constructor method

//Object.create

//To declare Symbol

const mySym = Symbol("Key1");

const jsUser = {
  name: "Santosh",
  //This "full name" cant accesed fron .operator for access we can use [].
  "full name": "Santosh Dahal",
  age: 20,
  // Use symbol in object ue use []
  [mySym]: "Key1",
  city: "Kathmandu",
  isOnline: true,
  email: "santosh@google.com",
};

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(typeof [mySym]);

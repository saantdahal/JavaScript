//Array
const myArr = [5, 3, 2, 1, 0];
// console.log(myArr[3]);

const myArray = new Array(5, 4, 3, 2);
// console.log(myArray[3]);

//Array Methods

//Add value in Array

// myArr.push(6);
// console.log(myArr);

//Remove item from last
// myArr.pop();

//To join array after join it change data types into string from objects
   const newArr = myArr.join();
  console.log(newArr);

//Slice Splice

console.log("A", myArr);

const myN1= myArr.slice(1,3);
console.log(myN1);
console.log("B", myArr);

//Splice change the value in an array
const myN2 = myArr.splice(1,3);
console.log("C", myArr);

console.log(myN2);







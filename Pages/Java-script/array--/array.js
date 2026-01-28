//CREATE ARRAY 
let numbers = [10, 20, 30, 40, 50];

//index 0,1,2,3,4

let strings = ["string1", "string2", "string3"];
let answers = [true, false];

//ARRAY is collection of similar data type
let array = ["string", 10]

//ARRAY Head

console.log(numbers);
console.log(typeof (numbers[2]));

console.log(numbers[2], strings[1]);

numbers[0] = 50;
numbers[1] = 60;
numbers[2] = 70;
numbers[3] = 80;
array[1]="Pranay";
console.log(numbers);
console.log(array)



//array push 
numbers.push(200);
console.log("using push function")
console.log(numbers);


//array shift
numbers.unshift(100);
console.log("using shift function")
console.log(numbers);


console.log("pranay",numbers)



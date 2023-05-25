// Calls and displays the new array in a table format
console.table(createArray(100));

// This function creates an array of random numbers up to a specified "size"
function createArray(size) {
  // new Date will create a new object of that exact moment
  const start = new Date();
  // console.log(start);

  // Here is where we create the random array that the function will output
  const array = [];
  // for loop to go up to the size
  for (let i = 0; i < size; i++) {
    // push the random numbers to the array
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  // Tells user in console and gives the amount of time it took to make the array
  // Divides by 1000 to convert to milliseconds
  // console.log(`creating array: ${new Date()} - ${start}`);
  console.log("creating array:", (new Date() - start) / 1000);
  return array;
}

// As an object:
// const person = {
//   name: "John Doe",
//   age: 30,
//   profession: "Developer",
// };

// console.table(person);
// // Note that not all browsers or JavaScript environments support the console.table() function. If it is not supported, calling console.table() will output a simple text representation of the data instead of a table.

// const randomArray = [42, 17, 9, 81, 33, 55, 27, 68, 91, 12];
// console.table(randomArray);

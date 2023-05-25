// Calls and displays the new array in a table format and gives the array it's size
console.table(createArray(100));
// We can play with the size to see the difference in size and time it take to create the array

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
  // Divides by 1000 to convert to milliseconds (but let's look at milliseconds...)
  console.log("creating array:", (new Date() - start) / 1000);
  // Can be displayed in templaate literal to see actual dates and times
  // console.log(`creating array: ${start} - ${new Date()}`);
  return array;
}

// Examples of how console.table() works with different datatypes

// As an object:
// const person = {
//   name: "John Doe",
//   age: 30,
//   profession: "Developer",
// };

// console.table(person);
// Not all browsers or JavaScript environments support the console.table() function

// const randomArray = [42, 17, 9, 81, 33, 55, 27, 68, 91, 12];
// console.table(randomArray);

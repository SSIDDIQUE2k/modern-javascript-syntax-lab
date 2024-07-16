const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];


//Excersice 1

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const newArray = nums.map((currentElement) => {
    return currentElement * 2;  
}   );

console.log(newArray);

//  Array destructuring

const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet,] = petsArray;

console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'
 


 
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'

//   Exercise 2

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstTopping, secondTopping] = pizzaToppings;
 console.log(firstTopping);
    console.log(secondTopping);

// Object destructuring
const person = {
    name: 'Alex',
    role: 'Software Engineer',
  };
  
  // Object destructuring:
  const { name, role } = person;
  
  console.log(name); // 'Alex'
  console.log(role); // 'Software Engineer'
  
  // Equivalent in traditional dot notation:
  console.log(person.name); // 'Alex'
  console.log(person.role); // 'Software Engineer'
  
//   Exercise 3: Destructuring objects

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here

    const {make, model} = car;
    console.log(make);
    console.log(model);
  
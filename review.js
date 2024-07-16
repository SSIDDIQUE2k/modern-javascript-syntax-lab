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
  
    // Applying the spread operator on arrays

    const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];

console.log(duplicateArray); // [1, 2, 3]


// Exercise 4: Spread operator

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings2 = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppings2];
console.log(controversialPizzaToppings);

// Applying the spread operator on objects

const originalObject = {
    foo: 'Hello',
    bar: 100,
  };


  const clonedObject = { ...originalObject };
  console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }
    // reference to the original object

    const clonedObject2 = originalObject;
clonedObject2.foo = 'Goodbye';

console.log(originalObject); // { foo: 'Goodbye', bar: 100 }

//   Exercise 5: Spread operator

// Duplicate the following object and spread its values into a new variable `myCar`.

const car3 = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
const  cloneCar3 = { ...car3 };
cloneCar3.model = 'q7';
console.log(cloneCar3);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------//

// Dynamic keys in objects

const fruitInventory = {
    apples: 2,
    oranges: 4,
  };
  
  const selectedFruit = 'apples'; // Variable as a dynamic key
  const selectedFruitCount = fruitInventory[selectedFruit];
  
  console.log(selectedFruitCount); // 2
  
// Exercise 6: Dynamic keys in objects

// Create an object named userProfile. 


// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const propertyName = 'username';
const userProfile = {
    [propertyName]: 'Alex',
  };
  console.log(userProfile); // ask ashley about this one
  

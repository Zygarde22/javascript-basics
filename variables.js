{
    var x = 2;
  }
  console.log(x);  // Prints 2
  
  {
    let x = 12;
    console.log(Number(x));  // Converts x to a number (though it's already a number)
  }
  
  {
    const x = 15;
    console.log(String(x));  // Converts the number to a string and prints "15"
  }
  
  {
    let y = 130;
    console.log(Boolean(y));  // Converts y to a boolean and prints "true"
  }
  
  {
    // Object
    const person = {
      name: "Alice",
      age: 30
    };
    console.log(person);  // Prints the object: { name: "Alice", age: 30 }
    console.log(person.name);  // Accesses a property: Prints "Alice"
  }
  
  {
    // Array
    const fruits = ["Apple", "Banana", "Cherry"];
    console.log(fruits);  // Prints the array: ["Apple", "Banana", "Cherry"]
    console.log(fruits[1]);  // Accesses an element: Prints "Banana"
  }
  
  {
    // Null
    const emptyValue = null;
    console.log(emptyValue);  // Prints "null"
  }
  
  {
    // Undefined
    let notAssigned;
    console.log(notAssigned);  // Prints "undefined" because no value was assigned
  }
  
  
  let x = prompt("Enter a value for x:");
console.log(x); 

let y = prompt("Enter a value for y:");
console.log(y); 
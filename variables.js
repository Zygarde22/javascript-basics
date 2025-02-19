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
  
  let x = Number(prompt("Enter a value for x:"));
  console.log("Value of x:", x);
  
  let y = Number(prompt("Enter a value for y:"));
  console.log("Value of y:", y);
  
  // Arithmetic Operators
  console.log("Sum of x and y:", x + y);  // Addition
  console.log("Difference of x and y:", x - y);  // Subtraction
  console.log("Product of x and y:", x * y);  // Multiplication
  console.log("Quotient of x and y:", x / y);  // Division
  console.log("Remainder of x and y:", x % y);  // Modulus
  
  // Assignment Operators
  x += 5;  // Adds 5 to x
  console.log("x after x += 5:", x);
  
  y -= 2;  // Subtracts 2 from y
  console.log("y after y -= 2:", y);
  
  // Comparison Operators
  console.log("x is equal to y:", x == y);   // Equal to
  console.log("x is not equal to y:", x != y);   // Not equal to
  console.log("x is greater than y:", x > y);    // Greater than
  console.log("x is less than y:", x < y);    // Less than
  
  // Logical Operators
  console.log("x is greater than 5 AND y is less than 10:", x > 5 && y < 10);  // AND
  console.log("x is less than 10 OR y is greater than 10:", x < 10 || y > 10);  // OR
  console.log("Not (x is equal to y):", !(x == y));  // NOT
  
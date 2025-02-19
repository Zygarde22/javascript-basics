const person= {
    name: "Khriston",
    age: 29,
};

console.log(person.name);
console.log(person.age);

person["name"] = "Khris";
person["age"] = "30";

console.log(person["name"]); 
console.log(person["age"]);


const person = {
    name: "Khriston",
    age: 29,
    job: "Developer"
  };
  
  // Using a variable to dynamically access properties
  let property = "name";
  console.log(person[property]);  // Prints "Khriston"
  
  property = "age";
  console.log(person[property]);  // Prints 29
  
  property = "job";
  console.log(person[property]);  // Prints "Developer"
  
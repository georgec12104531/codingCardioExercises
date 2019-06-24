// Pure Function 

// Same input always has the same output
const pureFunction = (x, y) => x + y;

// Impure function
// Relies on shared state 
// Relies on time dependency 

let x = 2;
const impureFunction = (y) => {
  x += y
}

impureFunction(4);
console.log(x)
impureFunction(4)
console.log(x)

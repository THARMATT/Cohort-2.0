
### Loops

Loops are used to repeat a block of code multiple times. JavaScript supports several types of loops, including `for`, `while`, and `do...while`.

1. **for loop**:
   - **Definition**: The `for` loop repeats a block of code as long as a specified condition is true.
   - **Syntax**:
     ```javascript
     for (initialization; condition; increment) {
       // code block to be executed
     }
     ```
   - **Example**:
     ```javascript
     for (let i = 0; i < 5; i++) {
       console.log(i);
     }
     // Output: 0 1 2 3 4
     ```

2. **while loop**:
   - **Definition**: The `while` loop repeats a block of code as long as a specified condition is true.
   - **Syntax**:
     ```javascript
     while (condition) {
       // code block to be executed
     }
     ```
   - **Example**:
     ```javascript
     let i = 0;
     while (i < 5) {
       console.log(i);
       i++;
     }
     // Output: 0 1 2 3 4
     ```

3. **do...while loop**:
   - **Definition**: The `do...while` loop repeats a block of code once, and then continues to repeat the loop as long as a specified condition is true.
   - **Syntax**:
     ```javascript
     do {
       // code block to be executed
     } while (condition);
     ```
   - **Example**:
     ```javascript
     let i = 0;
     do {
       console.log(i);
       i++;
     } while (i < 5);
     // Output: 0 1 2 3 4
     ```

### Functions

Functions are blocks of code designed to perform particular tasks. They can be defined once and executed multiple times. Functions can take parameters and return a value.

1. **Function Declaration**:
   - **Definition**: A function declaration defines a named function.
   - **Syntax**:
     ```javascript
     function functionName(parameters) {
       // code block to be executed
     }
     ```
   - **Example**:
     ```javascript
     function greet(name) {
       return `Hello, ${name}`;
     }
     
     console.log(greet('Alice')); // Output: Hello, Alice
     ```

2. **Function Expression**:
   - **Definition**: A function expression defines a function as part of an expression. It can be anonymous or named.
   - **Syntax**:
     ```javascript
     const functionName = function(parameters) {
       // code block to be executed
     };
     ```
   - **Example**:
     ```javascript
     const greet = function(name) {
       return `Hello, ${name}`;
     };
     
     console.log(greet('Bob')); // Output: Hello, Bob
     ```

3. **Arrow Functions**:
   - **Definition**: Arrow functions provide a shorter syntax for writing functions.
   - **Syntax**:
     ```javascript
     const functionName = (parameters) => {
       // code block to be executed
     };
     ```
   - **Example**:
     ```javascript
     const greet = (name) => `Hello, ${name}`;
     
     console.log(greet('Charlie')); // Output: Hello, Charlie
     ```

### Callbacks

A callback is a function passed as an argument to another function. This technique allows a function to call another function.

1. **Definition**:
   - A callback function is a function that is passed as an argument to another function, to be "called back" at a later time.

2. **Example**:
   - **Example with a Simple Callback**:
     ```javascript
     function greet(name, callback) {
       console.log(`Hello, ${name}`);
       callback();
     }

     function sayGoodbye() {
       console.log('Goodbye!');
     }

     greet('Alice', sayGoodbye);
     // Output:
     // Hello, Alice
     // Goodbye!
     ```

   - **Example with Asynchronous Callbacks**:
     ```javascript
     function fetchData(callback) {
       setTimeout(() => {
         console.log('Data fetched');
         callback();
       }, 2000);
     }

     function processData() {
       console.log('Processing data');
     }

     fetchData(processData);
     // Output after 2 seconds:
     // Data fetched
     // Processing data
     ```

### Combining Concepts

Here's a comprehensive example that combines loops, functions, and callbacks:

```javascript
// Function to simulate fetching data
function fetchData(id, callback) {
  setTimeout(() => {
    console.log(`Data fetched for id: ${id}`);
    callback(id);
  }, 1000);
}

// Function to process fetched data
function processData(id) {
  console.log(`Processing data for id: ${id}`);
}

// Fetch and process data for multiple ids using a loop
const ids = [1, 2, 3, 4, 5];
for (let i = 0; i < ids.length; i++) {
  fetchData(ids[i], processData);
}

// Example Output:
// Data fetched for id: 1
// Processing data for id: 1
// Data fetched for id: 2
// Processing data for id: 2
// Data fetched for id: 3
// Processing data for id: 3
// Data fetched for id: 4
// Processing data for id: 4
// Data fetched for id: 5
// Processing data for id: 5
```

In this example, we use a `for` loop to fetch and process data for multiple ids, demonstrating how loops, functions, and callbacks can be combined to create more complex logic in JavaScript.
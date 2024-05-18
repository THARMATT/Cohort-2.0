

### Why so many languages are needed?

Different programming languages are designed to solve different types of problems and cater to various needs. Some languages are more suited for web development, others for scientific computing, mobile app development, game development, etc. Also, different languages have different syntaxes, paradigms, and ecosystems, which appeal to different developers or projects.

### Interpreted vs Compiled languages

| Aspect              | Interpreted Languages                            | Compiled Languages                      |
|---------------------|--------------------------------------------------|----------------------------------------|
| **Execution**       | Interpreted line by line as program runs         | Compiled into machine code beforehand   |
| **Performance**     | Generally slower due to interpretation overhead  | Generally faster due to pre-compilation |
| **Examples**        | Python, Ruby, JavaScript                          | C, C++, Go, Rust                       |

### Why JS >> Other languages?

JavaScript (JS) is highly popular due to its versatility. It's the primary language for web development, both frontend and backend (via Node.js). Additionally, it's supported by all major browsers, making it a ubiquitous choice for client-side scripting.

### Strict vs Dynamic Languages

| Aspect             | Strictly Typed Languages              | Dynamically Typed Languages                  |
|--------------------|---------------------------------------|----------------------------------------------|
| **Type Checking**  | Types are strictly enforced           | Types are checked at runtime                 |
| **Flexibility**    | Less flexible, but catches errors early | More flexible, but errors may surface later |
| **Examples**       | Java, C#, Swift                       | JavaScript, Python, Ruby                    |

### Single-threaded nature of JS

JavaScript is inherently single-threaded, meaning it can only execute one task at a time. This is due to its event-driven and asynchronous nature, which allows it to handle I/O operations efficiently without blocking the main thread.

### Simple Primitives in JS

- **Loops**: Iterating over an array using a `for` loop:
  ```javascript
  const array = [1, 2, 3, 4, 5];
  for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
  }
  ```

- **Variables**: Declaring and assigning values to variables:
  ```javascript
  let x = 5;
  const y = 10;
  ```

### Complex Primitives in JS

- **Arrays**: Creating and manipulating arrays:
  ```javascript
  const fruits = ['apple', 'banana', 'orange'];
  fruits.push('grape');
  console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']
  ```

- **Objects**: Creating and accessing properties of objects:
  ```javascript
  const person = {
      name: 'John',
      age: 30,
      city: 'New York'
  };
  console.log(person.name); // Output: 'John'
  ```

### Functions

Functions in JavaScript are blocks of reusable code that perform a specific task. They can be defined using the `function` keyword or as arrow functions (`=>`).

```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression (arrow function)
const add = (a, b) => a + b;

console.log(greet('World')); // Output: 'Hello, World!'
console.log(add(2, 3));      // Output: 5
```

### Callback Functions

A callback function is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of action.

```javascript
function doSomethingAsync(callback) {
    setTimeout(() => {
        callback('Done');
    }, 1000);
}

function callbackFunction(message) {
    console.log(message);
}

doSomethingAsync(callbackFunction); // Output after 1 second: 'Done'
```


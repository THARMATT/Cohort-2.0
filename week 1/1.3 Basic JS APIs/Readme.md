## Level-1

### A. Strings

1. **length**: Returns the length of a string.
    ```javascript
    const str = "Hello, world!";
    console.log(str.length); // Output: 13
    ```

2. **indexOf**: Returns the index of the first occurrence of a specified value in a string.
    ```javascript
    const str = "Hello, world!";
    console.log(str.indexOf('o')); // Output: 4
    ```

3. **lastIndexOf**: Returns the index of the last occurrence of a specified value in a string.
    ```javascript
    const str = "Hello, world!";
    console.log(str.lastIndexOf('o')); // Output: 7
    ```

4. **slice**: Extracts a section of a string and returns it as a new string.
    ```javascript
    const str = "Hello, world!";
    console.log(str.slice(0, 5)); // Output: "Hello"
    ```

5. **substr**: Returns the characters in a string beginning at the specified location through the specified number of characters.
    ```javascript
    const str = "Hello, world!";
    console.log(str.substr(7, 5)); // Output: "world"
    ```

6. **replace**: Replaces a specified value with another value in a string.
    ```javascript
    const str = "Hello, world!";
    console.log(str.replace('world', 'John')); // Output: "Hello, John!"
    ```

7. **split**: Splits a string into an array of substrings based on a specified separator.
    ```javascript
    const str = "Hello, world!";
    console.log(str.split(' ')); // Output: ["Hello,", "world!"]
    ```

8. **trim**: Removes whitespace from both ends of a string.
    ```javascript
    const str = "  Hello, world!  ";
    console.log(str.trim()); // Output: "Hello, world!"
    ```

9. **toUpperCase**: Converts all characters in a string to uppercase.
    ```javascript
    const str = "Hello, world!";
    console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
    ```

10. **toLowerCase**: Converts all characters in a string to lowercase.
    ```javascript
    const str = "Hello, world!";
    console.log(str.toLowerCase()); // Output: "hello, world!"
    ```

### Custom Slice Method in JavaScript

```javascript
String.prototype.customSlice = function(start, end) {
    let result = '';
    const length = this.length;
    if (start < 0) start = length + start;
    if (end < 0) end = length + end;
    for (let i = start; i < end; i++) {
        result += this[i];
    }
    return result;
};

const str = "Hello, world!";
console.log(str.customSlice(0, 5)); // Output: "Hello"
```

This custom `slice` method extracts a section of a string similarly to the built-in `slice` method.

### B. Numbers

1. **parseInt**: Parses a string and returns an integer.
    ```javascript
    console.log(parseInt("10")); // Output: 10
    ```

2. **parseFloat**: Parses a string and returns a floating point number.
    ```javascript
    console.log(parseFloat("10.5")); // Output: 10.5
    ```

### C. Arrays

1. **push**: Adds one or more elements to the end of an array and returns the new length.
    ```javascript
    const arr = [1, 2, 3];
    arr.push(4);
    console.log(arr); // Output: [1, 2, 3, 4]
    ```

2. **pop**: Removes the last element from an array and returns that element.
    ```javascript
    const arr = [1, 2, 3];
    const removed = arr.pop();
    console.log(removed); // Output: 3
    ```

3. **shift**: Removes the first element from an array and returns that element.
    ```javascript
    const arr = [1, 2, 3];
    const removed = arr.shift();
    console.log(removed); // Output: 1
    ```

4. **unshift**: Adds one or more elements to the beginning of an array and returns the new length.
    ```javascript
    const arr = [2, 3];
    arr.unshift(1);
    console.log(arr); // Output: [1, 2, 3]
    ```

5. **concat**: Combines two or more arrays and returns a new array.
    ```javascript
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const newArr = arr1.concat(arr2);
    console.log(newArr); // Output: [1, 2, 3, 4]
    ```

6. **forEach**: Executes a provided function once for each array element.
    ```javascript
    const arr = [1, 2, 3];
    arr.forEach(item => console.log(item)); // Output: 1, 2, 3
    ```

7. **map**: Creates a new array populated with the results of calling a provided function on every element in the calling array.
    ```javascript
    const arr = [1, 2, 3];
    const newArr = arr.map(item => item * 2);
    console.log(newArr); // Output: [2, 4, 6]
    ```

8. **filter**: Creates a new array with all elements that pass the test implemented by the provided function.
    ```javascript
    const arr = [1, 2, 3, 4, 5];
    const filteredArr = arr.filter(item => item % 2 === 0);
    console.log(filteredArr); // Output: [2, 4]
    ```

9. **sort**: Sorts the elements of an array in place and returns the sorted array.
    ```javascript
    const arr = [3, 1, 2];
    arr.sort();
    console.log(arr); // Output: [1, 2, 3]
    ```

10. **reduce**: Executes a reducer function on each element of the array, resulting in a single output value.
    ```javascript
    const arr = [1, 2, 3, 4];
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum); // Output: 10
    ```

11. **find**: Returns the value of the first element in the array that satisfies the provided testing function.
    ```javascript
    const arr = [1, 2, 3, 4, 5];
    const found = arr.find(item => item > 2);
    console.log(found); // Output: 3
    ```
## Level-2

1. **Date**:
   - **new**: Used to create a new Date object.
     ```javascript
     const currentDate = new Date();
     console.log(currentDate);
     ```
   - **getDate**: Returns the day of the month (from 1-31).
     ```javascript
     const currentDate = new Date();
     console.log(currentDate.getDate());
     ```
   - **getFullYear**: Returns the year (four digits).
     ```javascript
     const currentDate = new Date();
     console.log(currentDate.getFullYear());
     ```
   - **getYear**: Returns the year (usually two or four digits).
     ```javascript
     const currentDate = new Date();
     console.log(currentDate.getYear());
     ```
   - **getHours**: Returns the hour (from 0-23).
     ```javascript
     const currentDate = new Date();
     console.log(currentDate.getHours());
     ```
   - **getSeconds**: Returns the seconds (from 0-59).
     ```javascript
     const currentDate = new Date();
     console.log(currentDate.getSeconds());
     ```
   - **setFullYear**: Sets the year of the Date object.
     ```javascript
     const currentDate = new Date();
     currentDate.setFullYear(2025);
     console.log(currentDate.getFullYear());
     ```
2. **JSON**:
   - **parse**: Parses a JSON string and returns a JavaScript object.
     ```javascript
     const jsonString = '{"name":"John","age":30}';
     const obj = JSON.parse(jsonString);
     console.log(obj.name); // Output: John
     ```
   - **stringify**: Converts a JavaScript object to a JSON string.
     ```javascript
     const obj = { name: 'John', age: 30 };
     const jsonString = JSON.stringify(obj);
     console.log(jsonString); // Output: {"name":"John","age":30}
     ```
3. **Math**:
   - **ceil**: Returns the smallest integer greater than or equal to a given number.
     ```javascript
     console.log(Math.ceil(5.4)); // Output: 6
     ```
   - **random**: Returns a random number between 0 (inclusive) and 1 (exclusive).
     ```javascript
     console.log(Math.random()); // Output: (e.g.,) 0.4850912315985368
     ```
   - **floor**: Returns the largest integer less than or equal to a given number.
     ```javascript
     console.log(Math.floor(5.9)); // Output: 5
     ```
   - **pow**: Returns the base to the exponent power, that is, baseexponent.
     ```javascript
     console.log(Math.pow(2, 3)); // Output: 8 (2^3)
     ```
   - **sqrt**: Returns the square root of a number.
     ```javascript
     console.log(Math.sqrt(16)); // Output: 4
     ```
4. **Objects**:
   - **keys**: Returns an array of a given object's own enumerable property names.
     ```javascript
     const obj = { a: 1, b: 2, c: 3 };
     console.log(Object.keys(obj)); // Output: ['a', 'b', 'c']
     ```
   - **values**: Returns an array of a given object's own enumerable property values.
     ```javascript
     const obj = { a: 1, b: 2, c: 3 };
     console.log(Object.values(obj)); // Output: [1, 2, 3]
     ```
   - **assign**: Copies the values of all enumerable own properties from one or more source objects to a target object.
     ```javascript
     const target = { a: 1, b: 2 };
     const source = { b: 3, c: 4 };
     const result = Object.assign(target, source);
     console.log(result); // Output: { a: 1, b: 3, c: 4 }
     ```
   - **hasOwnProperty**: Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
     ```javascript
     const obj = { a: 1, b: 2 };
     console.log(obj.hasOwnProperty('a')); // Output: true
     console.log(obj.hasOwnProperty('c')); // Output: false
     ```
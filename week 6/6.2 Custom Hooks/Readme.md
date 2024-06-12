#  Hooks 

### useMemo
The `useMemo` hook in React is used to optimize performance by memoizing the result of a computation. This means that it only recalculates the value when one of its dependencies changes, preventing unnecessary computations on every render.

### Basic Syntax

The `useMemo` hook takes two arguments:

1. A function that returns the computed value.
2. An array of dependencies.

```javascript
const memoizedValue = useMemo(() => {
  // Computation logic
  return computedValue;
}, [dependency1, dependency2, ...]);
```

### Key Concepts

1. **Memoization**: Memoization is an optimization technique that stores the result of expensive function calls and returns the cached result when the same inputs occur again.

2. **Dependencies**: The array of dependencies specifies when the memoized value should be recalculated. If none of the dependencies change between renders, `useMemo` returns the cached value from the previous render.

### Example

Consider a scenario where you have an expensive computation that shouldn't run on every render unless its dependencies change:

```javascript
import React, { useMemo, useState } from 'react';

function ExpensiveComponent({ a, b }) {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value');
    return a * b;
  }, [a, b]);

  return (
    <div>
      <p>Expensive value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <p>Render count: {count}</p>
    </div>
  );
}

export default ExpensiveComponent;
```

In this example:

- The `expensiveValue` computation will only run when either `a` or `b` changes.
- Clicking the button to increment `count` will re-render the component, but `expensiveValue` will not be recalculated unless `a` or `b` changes.

### When to Use `useMemo`

- **Expensive Calculations**: When you have a computation that is costly in terms of performance and should only be recalculated when specific dependencies change.
- **Referential Equality**: When you need to ensure that a value remains the same across renders to prevent unnecessary re-renders of child components relying on that value.

### Note

While `useMemo` can be a powerful optimization tool, it should be used judiciously. Overusing `useMemo` can lead to premature optimization and make the code harder to understand and maintain. Use it when you notice performance bottlenecks that can be alleviated by memoizing expensive computations.
### useCallback
The `useCallback` hook in React is a fundamental tool for performance optimization in functional components. It allows you to memoize callback functions, ensuring that they are only recreated when their dependencies change. This can help prevent unnecessary re-renders and optimize the rendering process.

Here's a detailed look into `useCallback`:

### Basic Syntax

```javascript
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

- `useCallback` takes two arguments:
  - The function that you want to memoize.
  - An array of dependencies.

### How It Works

- The `useCallback` hook returns a memoized version of the callback function that only changes if one of the dependencies has changed.
- If the dependencies do not change, the hook returns the same function instance on every render.

### Why Use `useCallback`?

1. **Performance Optimization**: 
   - Prevents the creation of new function instances on every render.
   - Particularly useful when passing callbacks to child components that rely on `React.memo`.

2. **Avoiding Unnecessary Re-renders**:
   - Helps in preventing child components from re-rendering when the parent component re-renders, which would happen if a new callback function is created each time.

### Example Scenario

Consider a parent component passing a callback to a child component:

```javascript
import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent render');
  return <button onClick={onClick}>Click me</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); // No dependencies, function is memoized once

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
};

export default ParentComponent;
```

### Explanation of Example

- The `ParentComponent` has a state variable `count`.
- A memoized callback `handleClick` is created using `useCallback`.
- `ChildComponent` is memoized using `React.memo` to prevent unnecessary re-renders.
- If `handleClick` were not memoized, `ChildComponent` would re-render every time `ParentComponent` re-renders, even if `count` didn’t change.

### Dependency Array

- Dependencies are values from the component scope that the callback relies on.
- If any dependency changes, `useCallback` will return a new function reference.

```javascript
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b], // Dependencies
);
```

### Common Pitfalls

1. **Stale Closures**:
   - Make sure all necessary dependencies are included in the dependency array to avoid stale closures.

2. **Overusing `useCallback`**:
   - Not every function needs to be memoized. Use it judiciously for performance-critical scenarios.

### When Not to Use `useCallback`

- For small components where re-renders are not performance-intensive.
- For functions that don't change on every render.

### Practical Tips

- Combine `useCallback` with `React.memo` to prevent unnecessary re-renders of child components.
- Monitor and profile your application to identify performance bottlenecks before over-optimizing with `useCallback`.

### Conclusion

`useCallback` is a powerful hook for optimizing performance in React applications by memoizing functions. Understanding when and how to use it can significantly improve the efficiency of your components, especially in large and complex applications.

### usememo vs React Memo vs useCallback vs useEffect
React.memo when you want to optimize functional component re-renders based on props, and choose useMemo when you want to optimize expensive calculations within functional components. They can also be used together in some cases for optimal performance.


| **Feature**       | **useMemo**                                      | **React.memo**                                 | **useEffect**                                 | **useCallback**                                |
|-------------------|--------------------------------------------------|------------------------------------------------|----------------------------------------------|------------------------------------------------|
| **Purpose**       | Memoizes the result of a computation             | Memoizes a functional component                | Performs side effects                         | Memoizes a callback function                   |
| **Usage**         | Optimize expensive calculations                  | Optimize functional component re-renders       | Handle side effects like data fetching, subscriptions, and DOM manipulations | Optimize functions that change infrequently    |
| **Return Value**  | Memoized value                                   | Memoized component                             | None                                          | Memoized function                              |
| **Dependencies**  | Recomputes when dependencies change              | Re-renders when props change (if shallow comparison fails) | Runs effect when dependencies change          | Recreates function when dependencies change    |
| **Syntax**        | `useMemo(() => computeExpensiveValue(a, b), [a, b])` | `React.memo(Component)`                        | `useEffect(() => { /* effect */ return () => { /* cleanup */ }; }, [dependencies])` | `useCallback(() => { /* callback */ }, [dependencies])` |
| **Example**       | ```jsx import React, { useMemo } from 'react'; const MyComponent = ({ a, b }) => { const memoizedValue = useMemo(() => a + b, [a, b]); return <div>{memoizedValue}</div>; }; ``` | ```jsx import React from 'react'; const MyComponent = React.memo(({ a, b }) => { return <div>{a + b}</div>; }); ``` | ```jsx import React, { useState, useEffect } from 'react'; const MyComponent = () => { const [data, setData] = useState(null); useEffect(() => { fetch('https://api.example.com/data').then(response => response.json()).then(data => setData(data)); }, []); return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>; }; ``` | ```jsx import React, { useCallback } from 'react'; const ParentComponent = () => { const handleClick = useCallback(() => { console.log('Button clicked'); }, []); return <button onClick={handleClick}>Click me</button>; }; ``` |
| **Main Benefit**  | Avoids recalculating expensive values on every render | Avoids re-rendering functional components when props haven't changed | Manages side effects in a controlled way       | Prevents unnecessary re-creations of functions |
| **Common Use Case** | Filtering lists, heavy computations             | Optimizing functional components receiving the same props | Fetching data, subscriptions, modifying the DOM | Event handlers, functions passed to child components |


### What happen when reference changes?
In React, when the value remains the same but the reference changes, it typically means that a new object or value with the same content has been created. This can happen when dealing with immutable data structures or when a new instance of an object is created.

Here's a simple example to illustrate this concept:

```javascript
import React, { useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState({ name: 'John', age: 30 });

  const updateData = () => {
    // Although the content remains the same, a new object reference is created
    setData({ name: 'John', age: 30 });
  };

  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <button onClick={updateData}>Update Data</button>
    </div>
  );
};

export default MyComponent;
```

In this example, `data` is an object with properties `name` and `age`. When the button is clicked, the `updateData` function is called, which sets the state using a new object `{ name: 'John', age: 30 }`. Even though the content of the object remains the same, React sees it as a new reference and triggers a re-render of the component.

React uses reference equality (`===`) to compare state and props. If the references of the old and new state/props are different, React assumes that the component needs to re-render, regardless of whether the content has actually changed. This is why it's important to be mindful of how you update state in React to avoid unnecessary re-renders.



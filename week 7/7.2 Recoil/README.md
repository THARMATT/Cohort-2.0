# Recoil
- Atom
    ---
    ### Atom in Recoil
    
    Recoil is a state management library for React. An **atom** in Recoil represents a piece of state. It is a unit of state that components can read from and write to. When an atom is updated, any component that subscribes to it will re-render to reflect the new state.
    
    ### How to Define an Atom
    
    To define an atom, you use the `atom` function from the Recoil library. Here's an example:
    
    ```jsx
    import { atom } from 'recoil';
    
    const exampleAtom = atom({
      key: 'exampleAtom', // unique ID (with respect to other atoms/selectors)
      default: 'Hello, world!', // default value (aka initial value)
    });
    
    ```
    
    In this example, `exampleAtom` is an atom with a default value of "Hello, world!".
    
    ### How to Consume an Atom
    
    To consume an atom in a component, you can use several Recoil hooks, including `useRecoilState`, `useRecoilValue`, and `useSetRecoilState`.
    
    1. **useRecoilState**: This hook returns a tuple with the current state and a setter function to update the state. It is similar to the `useState` hook in React.
        
        ```jsx
        import { useRecoilState } from 'recoil';
        import exampleAtom from './path/to/exampleAtom';
        
        function MyComponent() {
          const [value, setValue] = useRecoilState(exampleAtom);
        
          return (
            <div>
              <p>{value}</p>
              <button onClick={() => setValue('New value')}>Update</button>
            </div>
          );
        }
        
        ```
        
    2. **useRecoilValue**: This hook returns the current state value of an atom or a selector. It is used when you only need to read the state without writing to it.
        
        ```jsx
        import { useRecoilValue } from 'recoil';
        import exampleAtom from './path/to/exampleAtom';
        
        function MyComponent() {
          const value = useRecoilValue(exampleAtom);
        
          return <p>{value}</p>;
        }
        
        ```
        
    3. **useSetRecoilState**: This hook returns a setter function for updating the state of an atom or a selector. It is used when you only need to write to the state without reading it.
        
        ```jsx
        import { useSetRecoilState } from 'recoil';
        import exampleAtom from './path/to/exampleAtom';
        
        function MyComponent() {
          const setValue = useSetRecoilState(exampleAtom);
        
          return (
            <button onClick={() => setValue('New value')}>Update</button>
          );
        }
        
        ```
        
    
    ### In Summary
    
    - **Atom**: A unit of state in Recoil that components can read and write to.
    - **Defining an Atom**: Use the `atom` function to define it with a unique key and a default value.
    - **Consuming an Atom**:
        - **useRecoilState**: For reading and writing state.
        - **useRecoilValue**: For reading state only.
        - **useSetRecoilState**: For writing state only.
    
    These hooks allow you to integrate Recoil state management seamlessly into your React components.

    Selector
    ---

   
    ### Selector in Recoil
    
    A **selector** in Recoil represents a piece of derived state. It allows you to compute state based on atoms or other selectors. Selectors can be thought of as dynamic queries to the Recoil state.
    
    ### How to Define a Selector
    
    To define a selector, you use the `selector` function from the Recoil library. Here's an example:
    
    ```jsx
    import { selector } from 'recoil';
    import exampleAtom from './path/to/exampleAtom';
    
    const exampleSelector = selector({
      key: 'exampleSelector', // unique ID (with respect to other atoms/selectors)
      get: ({ get }) => {
        const exampleValue = get(exampleAtom);
        return `Derived value: ${exampleValue}`;
      },
    });
    
    ```
    
    In this example, `exampleSelector` is a selector that derives its value from `exampleAtom`.
    
    ### How to Consume a Selector
    
    To consume a selector in a component, you can use the `useRecoilValue`, `useRecoilState`, or `useSetRecoilState` hooks, similar to atoms. However, most commonly, you'll use `useRecoilValue` because selectors are often read-only:
    
    1. **useRecoilValue**: This hook returns the current state value of a selector.
        
        ```jsx
        import { useRecoilValue } from 'recoil';
        import exampleSelector from './path/to/exampleSelector';
        
        function MyComponent() {
          const derivedValue = useRecoilValue(exampleSelector);
        
          return <p>{derivedValue}</p>;
        }
        
        ```
        
    2. **useRecoilState**: This hook can be used if the selector has both a `get` and a `set` function, allowing you to read and write derived state. This is less common but possible.
        
        ```jsx
        import { useRecoilState } from 'recoil';
        import exampleSelector from './path/to/exampleSelector';
        
        function MyComponent() {
          const [value, setValue] = useRecoilState(exampleSelector);
        
          return (
            <div>
              <p>{value}</p>
              <button onClick={() => setValue('New derived value')}>Update</button>
            </div>
          );
        }
        
        ```
        
    3. **useSetRecoilState**: This hook is used if the selector has a `set` function, allowing you to write to the derived state.
        
        ```jsx
        import { useSetRecoilState } from 'recoil';
        import exampleSelector from './path/to/exampleSelector';
        
        function MyComponent() {
          const setValue = useSetRecoilState(exampleSelector);
        
          return (
            <button onClick={() => setValue('New derived value')}>Update</button>
          );
        }
        
        ```
        
    
    ### In Summary
    
    - **Selector**: A unit of derived state in Recoil that computes its value based on atoms or other selectors.
    - **Defining a Selector**: Use the `selector` function with a unique key and a `get` function to compute its value.
    - **Consuming a Selector**:
        - **useRecoilValue**: For reading derived state.
        - **useRecoilState**: For reading and writing derived state if the selector has a `set` function.
        - **useSetRecoilState**: For writing derived state if the selector has a `set` function.
    
    Selectors provide a powerful way to manage derived state and encapsulate complex state logic in Recoil.
## Reconciliation & Hooks
Reconciliation is the process in React where it compares the current state of the UI with the previous one and determines the minimum number of changes needed to update the UI to reflect the new state. It's a key part of React's virtual DOM algorithm, ensuring efficient and optimized rendering by minimizing unnecessary updates.

### Two way vs One way binding

| Feature                | One-Way Binding                                 | Two-Way Binding                                   |
|------------------------|--------------------------------------------------|---------------------------------------------------|
| Data Flow              | Unidirectional (Parent to Child)                 | Bidirectional (Parent to Child & Child to Parent) |
| Syntax                 | Props are passed from parent to child components | Props are passed from parent to child components, and child components can also emit events to update parent state |
| Reactivity             | Changes in parent data won't automatically update child components | Changes in parent data will update child components, and changes in child components can update parent state |
| Implementation         | Typically used for read-only data                | Used for data that needs to be both displayed and updated |
| Example                | `<ChildComponent data={someData} />`             | `<ChildComponent data={someData} onDataChange={handleDataChange} />` |
| Child Component Usage  | Reads data passed via props                      | Reads data passed via props and emits events to update parent data |
| Parent Component Usage | Passes data as props                             | Passes data as props and handles events to update its state |


### Controlled Components
Controlled components are a pattern in React where form elements such as input, textarea, and select maintain their state in the component's state itself. This means that the value of the form element is controlled by React state and not by the DOM itself.

In a controlled component:

1. The component state is the single source of truth for the input value.
2. The value of the input element is set by the state.
3. An event handler (typically `onChange` for input elements) updates the state when the input value changes.
4. Since the value of the input is controlled by React state, any changes to it are reflected immediately.

Here's an example of a controlled component using a text input:

```jsx
import React, { useState } from 'react';

function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Value: {inputValue}</p>
    </div>
  );
}

export default ControlledInput;
```

In this example:

- The `inputValue` state variable holds the value of the input field.
- The `handleChange` function updates the `inputValue` state whenever the input changes.
- The value of the input field is set to `inputValue` and is controlled by React state.

Controlled components offer several advantages, including predictable behavior and easy manipulation of input values. They are also often preferred in React because they make it easier to implement features like form validation or dynamically updating UI elements based on user input.

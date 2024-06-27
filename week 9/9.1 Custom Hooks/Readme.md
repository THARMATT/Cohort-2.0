# Custom Hooks
Custom hooks in React are a way to encapsulate reusable logic that can be shared across multiple components. They are JavaScript functions that can use built-in React hooks or other custom hooks to create reusable logic for managing state, side effects, or any other behavior.

### Key Points about Custom Hooks

1. **Reusability**:
   - Custom hooks allow you to extract and reuse logic across different components without repeating code.
   
2. **Naming Convention**:
   - Custom hooks follow the naming convention of starting with "use", such as `useFetch`, `useForm`, etc.

3. **Function Composition**:
   - Custom hooks can call other hooks, including `useState`, `useEffect`, and other custom hooks, to compose complex functionality.

4. **Encapsulation**:
   - They help in encapsulating logic, making components cleaner and easier to manage.

### Example

Here’s a simple example of a custom hook that fetches data from an API:

```javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return { data, loading };
}

export default useFetch;
```

Usage in a component:

```javascript
import React from 'react';
import useFetch from './useFetch';

function App() {
  const { data, loading } = useFetch('https://api.example.com/data');

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
```

### Benefits

- **Code Organization**: Keeps your component logic organized and modular.
- **Maintenance**: Makes your code easier to maintain and update.
- **Testing**: Simplifies testing of isolated logic.

### Resources
- [React Documentation on Custom Hooks](https://reactjs.org/docs/hooks-custom.html)

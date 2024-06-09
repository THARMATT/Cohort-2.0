# React foundations

## How re-rendering and DOM manuplation occurs in REACT vs Vanilla JS?
In React, rendering and DOM manipulation are abstracted and optimized through the Virtual DOM and React's reconciliation process, whereas in vanilla JavaScript, developers typically directly manipulate the actual DOM.

**Rendering in React**:

1. **Virtual DOM**:
   - React maintains a lightweight, in-memory representation of the actual DOM known as the Virtual DOM.
   - When a component's state or props change, React creates a new Virtual DOM representation of the UI based on the updated state.

2. **Reconciliation**:
   - React's reconciliation process compares the previous Virtual DOM with the new Virtual DOM to determine the differences.
   - React identifies the minimal set of changes needed to update the actual DOM to match the new Virtual DOM.
   - This process optimizes performance by avoiding unnecessary DOM updates and re-renders.

3. **Component Re-rendering**:
   - When a component's state or props change, React re-renders the component and its children.
   - React efficiently updates the Virtual DOM and performs a diffing algorithm to determine which parts of the actual DOM need to be updated.

4. **Batched Updates**:
   - React batches multiple updates into a single render cycle to improve performance.
   - This batching mechanism reduces the number of DOM updates and ensures that changes are applied in an optimal manner.

**DOM Manipulation in Vanilla JavaScript**:

1. **Direct DOM Manipulation**:
   - In vanilla JavaScript, developers directly manipulate the actual DOM using methods like `document.createElement`, `appendChild`, `removeChild`, `setAttribute`, etc.
   - Changes made to the actual DOM are immediately reflected in the browser, potentially causing layout thrashing and performance issues.

2. **Imperative Updates**:
   - DOM manipulation in vanilla JavaScript typically involves imperative, low-level operations.
   - Developers manually specify each step of the update process, including creating, modifying, and removing DOM elements.

3. **Event Handling**:
   - Event handling in vanilla JavaScript involves attaching event listeners directly to DOM elements using methods like `addEventListener`.
   - Developers are responsible for managing event propagation, handling, and cleanup.

4. **Performance Considerations**:
   - Direct DOM manipulation can be inefficient, especially when dealing with large or complex UIs.
   - Making frequent changes to the actual DOM can result in layout recalculations and reflows, impacting performance and user experience.

In summary, React abstracts and optimizes rendering and DOM manipulation through its Virtual DOM and reconciliation process, providing a more efficient and declarative approach to building UIs. In contrast, vanilla JavaScript requires developers to directly manipulate the actual DOM, which can be less efficient and more error-prone, especially in complex applications.

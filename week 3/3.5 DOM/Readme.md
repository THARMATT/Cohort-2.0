# DOM


### 1. DOM (Document Object Model):
The DOM represents the structure of an HTML document as a tree of objects. You can interact with these objects using JavaScript to manipulate the content and structure of a webpage.

Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>
    <div id="myDiv">Hello, World!</div>
    <script>
        // Accessing and modifying a DOM element
        const divElement = document.getElementById('myDiv');
        divElement.textContent = 'Hello, OpenAI!';
    </script>
</body>
</html>
```

### 2. Event Listener:
An event listener is a function that waits for a specific event to occur on a DOM element and then executes a callback function in response.

Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Event Listener Example</title>
</head>
<body>
    <button id="myButton">Click me!</button>
    <script>
        // Adding an event listener to a button
        const button = document.getElementById('myButton');
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    </script>
</body>
</html>
```

### 3. DOM Events:
DOM events are actions or occurrences that happen in the DOM, such as clicking a button, hovering over an element, or pressing a key.

Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Events Example</title>
</head>
<body>
    <button id="myButton">Click me!</button>
    <script>
        // Handling a click event on a button
        const button = document.getElementById('myButton');
        button.addEventListener('click', function() {
            console.log('Button clicked!');
        });
    </script>
</body>
</html>
```

### 4. DOM Nodes:
DOM nodes are individual elements in the DOM tree, including elements, text nodes, comments, etc.

Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Nodes Example</title>
</head>
<body>
    <div id="myDiv">Hello, World!</div>
    <script>
        // Accessing a DOM node
        const divElement = document.getElementById('myDiv');
        console.log(divElement.nodeName); // Outputs: DIV
    </script>
</body>
</html>
```

### 5. Adding and Deleting Elements in DOM:
You can dynamically add or remove elements from the DOM using JavaScript.

Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Adding and Deleting Elements Example</title>
</head>
<body>
    <div id="container"></div>
    <button onclick="addElement()">Add Element</button>
    <button onclick="deleteElement()">Delete Element</button>
    <script>
        function addElement() {
            const newElement = document.createElement('p');
            newElement.textContent = 'New Paragraph';
            document.getElementById('container').appendChild(newElement);
        }

        function deleteElement() {
            const container = document.getElementById('container');
            const lastElement = container.lastElementChild;
            container.removeChild(lastElement);
        }
    </script>
</body>
</html>
```

### 6. Changing HTML Elements:
You can change the content and attributes of HTML elements dynamically using JavaScript.

Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Changing HTML Elements Example</title>
</head>
<body>
    <p id="myParagraph">Hello, World!</p>
    <button onclick="changeText()">Change Text</button>
    <script>
        function changeText() {
            const paragraph = document.getElementById('myParagraph');
            paragraph.textContent = 'Hello, OpenAI!';
        }
    </script>
</body>
</html>
```




#### Comparison between NodeList and HTMLCollection.

| Feature                | NodeList                              | HTMLCollection                        |
|------------------------|---------------------------------------|---------------------------------------|
| **Definition**         | A collection of nodes, which can be elements or other node types. | A collection specifically of HTML elements. |
| **Live Collection**    | Can be live (e.g., `childNodes`) or static (e.g., `querySelectorAll`). | Always live, meaning they update automatically when the document changes. |
| **Access by Index**    | Yes, using bracket notation or `item(index)`. | Yes, using bracket notation or `item(index)`. |
| **Access by Name/ID**  | No, only by index.                    | Yes, can access elements by their `name` or `id` attributes. |
| **Methods**            | Few, mainly `item(index)` and `forEach()` if it’s a static NodeList. | Few, mainly `item(index)` and named item access. |
| **Type of Nodes**      | Can include any node type (element, text, comment, etc.). | Contains only element nodes. |
| **Common Methods**     | `querySelectorAll()`, `childNodes`    | `getElementsByTagName()`, `getElementsByClassName()`, `forms`, `images`, `links` |
| **Iteration**          | Iterable using `forEach()` if it’s a static NodeList; otherwise, `for` loop. | Iterable using `for` loop. |


#### Comparison between event bubbling and event capturing 

| Feature              | Event Bubbling                                    | Event Capturing                                    |
|----------------------|---------------------------------------------------|----------------------------------------------------|
| **Direction**        | Events propagate from the target element up to the ancestors. | Events propagate from the topmost ancestor down to the target element. |
| **Phases**           | Bubbling Phase                                    | Capturing Phase                                    |
| **Order of Handlers**| Ancestors first, then target element              | Topmost ancestor first, then descendants           |
| **Use Cases**        | Commonly used because it's the default behavior. | Less common, typically used for special cases.     |
| **Implementation**   | Event handlers attached using `addEventListener()` without specifying capturing phase. | Event handlers attached with `addEventListener()` with third parameter set to `true` (indicating capturing phase). |
| **Stopping Propagation** | Event propagation can be stopped using `stopPropagation()` method. | Event propagation can also be stopped using `stopPropagation()` method. |

### Event bubbling and Event capturing
Event bubbling and event capturing are two mechanisms in the DOM (Document Object Model) for handling the propagation of events from the target element to its ancestors or from the root of the DOM hierarchy to the target element.

1. **Event Bubbling**:
   - In event bubbling, when an event occurs on a particular element, the event is first triggered on the innermost element and then bubbles up through its ancestors in the DOM hierarchy.
   - The event handlers attached to parent elements are executed after the event handlers on the target element have been executed.
   - Event bubbling is the default behavior in most modern browsers.
   - It allows you to handle events at different levels of the DOM hierarchy without needing to attach event listeners to each individual element.

2. **Event Capturing**:
   - In event capturing, when an event occurs on a particular element, the event is first captured at the root of the DOM hierarchy and then propagates down through the ancestors to the target element.
   - The event handlers attached to parent elements are executed before the event handlers on the target element are executed.
   - Event capturing is less commonly used than event bubbling but can be useful in certain scenarios, especially when you want to intercept events at a higher level in the DOM hierarchy before they reach the target element.
   - Event capturing is explicitly specified by setting the third parameter of the `addEventListener()` method to `true`.

In summary, event bubbling propagates events from the target `element to its ancestors`, while event capturing propagates events from the `root of the DOM hierarchy to the target element`. Both mechanisms allow developers to handle events at different levels of the DOM hierarchy, depending on their specific requirements.

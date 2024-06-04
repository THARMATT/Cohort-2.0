## Why variables declared globally can add more todos?
In your previous code, you declared the variables `title`, `description`, `titleElement`, and `descriptionElement` outside of the `AddTodo()` function:

```javascript
const title = document.getElementById('title').value;
const description = document.getElementById('description').value;
const todolist = document.getElementById('todolist');
const descriptionElement = document.createElement('p');
const titleElement = document.createElement('p');
```

When you declare variables like this at the global scope (outside of any function), they are executed immediately when the script runs. So, when the page loads, these variables are assigned values based on the initial values of the input fields (`title` and `description`). 

This means that `title` and `description` will always have the same values throughout the lifespan of your webpage unless you manually update them. Similarly, `titleElement` and `descriptionElement` are created once and always refer to the same `<p>` elements, which are empty at the time of creation.

Now, let's understand why multiple todos were not added to the DOM:

When you call the `AddTodo()` function, it sets the `textContent` of `titleElement` and `descriptionElement` to the values of `title` and `description` respectively and appends them to the `todolist` div. However, since `title` and `description` are set only once when the page loads, they always contain the same values.

To allow the addition of multiple todos with different titles and descriptions, you need to capture the current values of the input fields (`title` and `description`) inside the `AddTodo()` function. This ensures that each time the function is called, it uses the latest values entered by the user.

Therefore, in the corrected code, I moved the variable declarations for `title`, `description`, `titleElement`, and `descriptionElement` inside the `AddTodo()` function. This way, each time `AddTodo()` is called, it captures the current values of the input fields and creates new elements accordingly, allowing multiple todos to be added correctly.
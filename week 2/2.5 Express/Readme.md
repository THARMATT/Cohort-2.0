# Express

1. **Query Parameters**: These are parameters passed to a web server as part of the URL. They are usually in the form of key-value pairs and are used to modify the behavior of a web page or API endpoint. For example, in the URL `https://example.com/search?q=apple`, `q` is the query parameter with the value `apple`.

2. **Request and Response**: In web development, a request is made by a client (e.g., a web browser) to a server for some resource, such as a webpage or data. The server then processes the request and sends back a response containing the requested resource or an error message.

3. **Types of Request Methods**: There are several types of HTTP request methods, including:
   - GET: Used to retrieve data from a server.
   - POST: Used to submit data to be processed by a server.
   - PUT: Used to update a resource on the server.
   - DELETE: Used to delete a resource on the server.
   - PATCH: Used to apply partial modifications to a resource.

4. **Status Codes**: HTTP status codes are three-digit numbers returned by a server in response to a client's request. They indicate the outcome of the request. Some common status codes include:
   - 200 OK: The request was successful.
   - 404 Not Found: The requested resource could not be found on the server.
   - 500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.
   - 401 Unauthorized: The request requires user authentication.
   - 403 Forbidden: The server understood the request, but refuses to authorize it.
# Code
- Simple todo server for CRUD.
```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let tasks = [];

// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Update a task
app.put('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    tasks[taskId] = updatedTask;
    res.status(200).json(updatedTask);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    tasks.splice(taskId, 1);
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

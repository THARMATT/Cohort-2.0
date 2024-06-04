# DOM

### Static vs Dynamic Websites

| Feature               | Static Websites                                  | Dynamic Websites                                 |
|-----------------------|--------------------------------------------------|-------------------------------------------------|
| **Content**           | Fixed content that doesn't change unless manually updated. | Content can change dynamically based on user interactions or other factors. |
| **Technology Used**   | HTML, CSS, JavaScript (for basic interactivity). | Server-side languages like PHP, Python, Ruby, along with databases. |
| **Server Interaction**| Minimal server interaction, typically only when a page is loaded. | Frequent server interaction, content can be generated on-the-fly. |
| **Performance**       | Generally faster to load since content is pre-built. | May be slower due to server-side processing and database queries. |
| **Ease of Update**    | Requires manual updates for any content change. | Can be updated through a CMS or based on data changes. |
| **Cost**              | Cheaper to host as it requires fewer resources. | More expensive due to server resources and potential database costs. |
| **Examples**          | Portfolio sites, blogs (without CMS), landing pages. | E-commerce sites, social networks, web applications. |

### Role of DOM in Dynamic Websites
The Document Object Model (DOM) is crucial in dynamic websites for the following reasons:
- **Dynamic Content Updates**: JavaScript can manipulate the DOM to update content dynamically without needing to reload the entire page.
- **User Interaction**: Event listeners can be added to DOM elements to handle user interactions like clicks, form submissions, etc.
- **Asynchronous Operations**: Using technologies like AJAX or Fetch API, JavaScript can retrieve data from servers and update the DOM based on this data without a full page refresh.

### Fetch API

**Fetch Basics**:
- **Fetch** is a modern, promise-based API used to make network requests similar to `XMLHttpRequest`.
- **Promise-Based**: Fetch returns a Promise that resolves to the Response object.

**Why Fetch Returns Promises Twice**:
- **First Promise**: When you make a `fetch` request, it immediately returns a Promise that resolves once the HTTP response headers are received, not the complete body.
- **Second Promise**: You need to call a method like `.json()`, `.text()`, or `.blob()` on the Response object to read the actual content. This method also returns a Promise that resolves when the body is fully read.

**High-Level Overview of Fetch**:
1. **Initiating a Request**: 
    ```javascript
    fetch('https://api.example.com/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    ```
2. **Processing the Response**:
    - The first `.then()` handles the HTTP response and checks if it was successful.
    - The `.json()` method reads the response body and returns a promise resolving to the actual JSON data.
    - The second `.then()` handles the JSON data.
    - The `catch()` method handles any network errors or issues with the request.

### Axios vs Fetch

| Feature                | Fetch API                                       | Axios                                             |
|------------------------|-------------------------------------------------|---------------------------------------------------|
| **API Type**           | Built-in browser API, promise-based.            | Third-party library, promise-based.               |
| **Request Configuration** | Simple for basic requests, more complex for advanced features. | Simplified syntax for complex requests with built-in features. |
| **Response Handling**  | Requires manual handling of HTTP errors.        | Automatic handling of HTTP status codes.          |
| **Interceptors**       | No built-in interceptors.                       | Built-in request/response interceptors for handling or modifying requests/responses. |
| **Data Transformation**| Requires manual transformation of request/response data. | Automatic JSON data transformation.               |
| **Node.js Support**    | Limited to browser environments without polyfills. | Native support for both browser and Node.js environments. |
| **Cancel Requests**    | More complex, requires using `AbortController`. | Built-in cancellation support.                    |
| **Error Handling**     | More boilerplate for handling different types of errors. | Simplified error handling with detailed error objects. |

### Example:
**Fetch Example**:
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

**Axios Example**:
```javascript
axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```

Axios provides a more feature-rich and easier-to-use interface, especially for handling complex request scenarios.

### Why axios resolve promises in one go while fetch don't?
The difference in how Axios and Fetch handle promises stems from their design and how they abstract the process of making HTTP requests.

### Fetch API

With Fetch, the process involves two steps, each returning a promise:

1. **Initial Request**: When you call `fetch()`, it returns a promise that resolves once the HTTP response headers are received. This initial promise does not contain the response body.
2. **Reading the Response Body**: To access the response body, you need to call a method like `.json()`, `.text()`, or `.blob()` on the Response object, which also returns a promise. This second promise resolves with the parsed data.

Example:
```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // This returns another promise
  })
  .then(data => {
    console.log(data); // This is the parsed JSON data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
```

### Axios

Axios abstracts this two-step process into a single step. When you make a request using Axios, it handles the entire process of sending the request, receiving the response, and parsing the response body internally. This allows Axios to resolve the promise in one go.

Here’s what happens when you use Axios:

1. **Single Request and Response Handling**: Axios sends the HTTP request and waits for the complete response, including the response body. It automatically parses the response based on the `Content-Type` header (e.g., JSON, text).
2. **Single Promise**: Axios returns a single promise that resolves with the complete response object, including the parsed data, status code, headers, etc.

Example:
```javascript
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);  // Direct access to the parsed response data
    console.log(response.status); // HTTP status code
    console.log(response.headers); // HTTP headers
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Summary

- **Fetch**: Requires two promises—one for the initial response and another for reading the response body.
- **Axios**: Combines these steps into one, returning a single promise that resolves with the full response and parsed data.



### Fetch API

With Fetch, the process involves two steps, each returning a promise:

1. **Initial Request**: When you call `fetch()`, it returns a promise that resolves once the HTTP response headers are received. This initial promise does not contain the response body.
2. **Reading the Response Body**: To access the response body, you need to call a method like `.json()`, `.text()`, or `.blob()` on the Response object, which also returns a promise. This second promise resolves with the parsed data.

Example:
```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // This returns another promise
  })
  .then(data => {
    console.log(data); // This is the parsed JSON data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
```

### Axios

Axios abstracts this two-step process into a single step. When you make a request using Axios, it handles the entire process of sending the request, receiving the response, and parsing the response body internally. This allows Axios to resolve the promise in one go.

Here’s what happens when you use Axios:

1. **Single Request and Response Handling**: Axios sends the HTTP request and waits for the complete response, including the response body. It automatically parses the response based on the `Content-Type` header (e.g., JSON, text).
2. **Single Promise**: Axios returns a single promise that resolves with the complete response object, including the parsed data, status code, headers, etc.

Example:
```javascript
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);  // Direct access to the parsed response data
    console.log(response.status); // HTTP status code
    console.log(response.headers); // HTTP headers
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Summary

- **Fetch**: Requires two promises—one for the initial response and another for reading the response body.
- **Axios**: Combines these steps into one, returning a single promise that resolves with the full response and parsed data.

### Why Axios Resolves in One Go

Axios is designed to simplify HTTP requests and responses by handling the details internally:

1. **Abstraction**: Axios abstracts the details of sending requests and receiving responses. It automatically processes the response data, making it available in a single promise resolution.
2. **Response Parsing**: Axios automatically parses the response data based on the `Content-Type` header, eliminating the need for additional parsing steps. For example, if the response is JSON, Axios will parse it into a JavaScript object automatically.
3. **Consistent API**: Axios provides a consistent API across different environments (browser and Node.js), making it easier to work with compared to the native Fetch API, which is only available in the browser.

By handling these details internally, Axios can resolve the promise in one go, providing a more straightforward and efficient way to work with HTTP requests.
### Debouncing vs Throttling

| Feature                | Throttling                                           | Debouncing                                           |
|------------------------|------------------------------------------------------|------------------------------------------------------|
| Purpose                | Limits the rate of function execution                | Delays function execution until a pause in activity  |
| Execution Control      | Ensures a function is called at most once within a specified time interval | Delays function execution until after a specified period of inactivity |
| Event Handling         | Handles events by ensuring they are processed at a controlled rate | Handles events by consolidating multiple rapid event triggers into a single execution |
| Delay Behavior         | Function may execute at regular intervals if events occur frequently | Function execution is delayed until after a period of inactivity following the last event trigger |
| Typical Use Cases      | Prevents performance degradation due to excessive function calls during rapid event triggering (e.g., scrolling, resizing) | Reduces the frequency of function calls in response to frequently occurring events (e.g., input events, search suggestions) |
| Example Implementation | Throttles scroll events to prevent excessive layout recalculations | Debounces input events to delay search queries until the user has stopped typing |
| Implementation Mechanism | Uses a timer to enforce a minimum time interval between function calls | Uses a timer to delay function execution until after a specified period of inactivity |

Both throttling and debouncing are valuable techniques for managing function execution in response to event triggers, and the choice between them depends on the specific requirements of the application and the behavior desired for event handling.
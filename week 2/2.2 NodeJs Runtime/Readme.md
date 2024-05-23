# NodeJs 

## JS vs EcmeScript vs Nodejs vs Bun

| **Feature/Aspect**   | **JavaScript**                          | **ECMAScript**                     | **Node.js**                              | **Bun**                                |
|----------------------|-----------------------------------------|------------------------------------|------------------------------------------|----------------------------------------|
| **Definition**       | Scripting language for web development  | Specification for scripting languages | JavaScript runtime environment based on Chrome's V8 engine | JavaScript runtime bundler, transpiler, and package manager |
| **Origin**           | Netscape                                | ECMA International                 | Ryan Dahl                                | Jarred Sumner                          |
| **Usage**            | Front-end web development               | Standard for JavaScript and other languages | Server-side scripting, building network applications | Modern web development, faster builds, alternative to Node.js |
| **Standardization**  | Informally by the community             | Formalized by ECMA                  | Not standardized                          | Not standardized                       |
| **Environment**      | Browser (primarily)                     | Not an environment, but a specification | Server-side (primarily), also supports some desktop applications | Server-side and modern web applications |
| **Examples**         | React, Angular, Vanilla JS              | ES5, ES6, ES7 (versions of ECMAScript) | Express.js, Next.js                      | No specific frameworks yet, but similar to Node.js usage |
| **Execution Engine** | Browser engines like V8, SpiderMonkey   | Not executed directly               | V8 (same as Chrome)                       | JavaScriptCore (WebKit's engine)       |
| **Modules Support**  | ES Modules (import/export)              | Defines module formats and syntax  | CommonJS (require) and ES Modules        | ES Modules, faster module resolution   |
| **Performance**      | Depends on browser implementation       | N/A                                | High (due to V8 optimizations)            | Claims to be faster than Node.js       |
| **Package Manager**  | N/A (Uses npm in Node.js)               | N/A                                | npm (default), also supports yarn, pnpm  | Comes with its own package manager     |
| **Versioning**       | Varies (ES5, ES6, etc.)                 | Yearly versions (ES2015, ES2016, etc.) | Continuous updates                        | Continuous updates, still relatively new |
| **Transpiling**      | Typically Babel is used                 | Babel compiles ES6+ to ES5         | Not required but can use Babel           | Built-in transpiling (TypeScript, JSX) |
| **Developer Tools**  | Browser DevTools                        | Not applicable                     | Node.js Debugger, npm, third-party tools | Built-in bundler, transpiler, package manager |

### Key Points:
- **JavaScript** is the actual language used for scripting on the web.
- **ECMAScript** is the standard that defines the rules and specifications for JavaScript and other scripting languages.
- **Node.js** is a runtime environment that allows JavaScript to be run on the server side.
- **Bun** is a newer, high-performance JavaScript runtime that includes additional tools for modern web development.
## Bun
Bun is a new JavaScript runtime, bundler, transpiler, and package manager designed to be a faster and more modern alternative to Node.js. Here's an overview in tabular form focusing on Bun:

| **Feature/Aspect**   | **Bun**                                |
|----------------------|----------------------------------------|
| **Definition**       | JavaScript runtime bundler, transpiler, and package manager |
| **Origin**           | Created by Jarred Sumner              |
| **Usage**            | Modern web development, server-side scripting, faster builds |
| **Standardization**  | Not standardized                      |
| **Environment**      | Server-side and modern web applications |
| **Execution Engine** | JavaScriptCore (WebKit's engine)      |
| **Modules Support**  | ES Modules, faster module resolution  |
| **Performance**      | Claims to be faster than Node.js due to optimized module resolution and bundling |
| **Package Manager**  | Comes with its own package manager    |
| **Versioning**       | Continuous updates, still relatively new |
| **Transpiling**      | Built-in transpiling (supports TypeScript, JSX) |
| **Developer Tools**  | Built-in bundler, transpiler, package manager |
| **Notable Features** | - Fast startup and execution time due to JavaScriptCore engine <br> - Integrated development tools for a streamlined workflow <br> - Supports native ECMAScript modules and common JavaScript tools |

### Key Points about Bun:
1. **Performance**: Bun aims to be significantly faster than Node.js by using the JavaScriptCore engine (also used by Safari) and optimizing module resolution and bundling processes.
2. **All-in-One Tool**: Unlike Node.js, which relies on external tools like npm or Yarn for package management and tools like Babel for transpiling, Bun integrates these features directly into the runtime, making it more efficient and easier to use.
3. **Modern Features**: Bun supports modern JavaScript features out of the box, including TypeScript and JSX transpiling, making it suitable for contemporary web development practices.
4. **Ease of Use**: By bundling multiple tools into one, Bun simplifies the development workflow, reducing the need for configuration and setup of multiple separate tools.

Overall, Bun is designed to streamline the development process by combining multiple functionalities into a single, high-performance tool, positioning itself as a modern alternative to the existing JavaScript runtime environments like Node.js.
## Http Server
An HTTP server is a software application or a hardware device that serves web content to clients over the Hypertext Transfer Protocol (HTTP). Here's a detailed breakdown of what an HTTP server is:

### Definition:
- **HTTP Server**: A server that handles HTTP requests from clients (typically web browsers) and returns HTTP responses. This server can deliver web pages, APIs, or other web resources to the client.

### Key Functions:
1. **Request Handling**: An HTTP server listens for incoming requests on a specified port. When a request is received, the server processes it and determines how to respond.
2. **Response Generation**: Based on the request, the server generates an appropriate HTTP response. This response can include HTML pages, JSON data, images, or other types of content.
3. **Static and Dynamic Content**: 
   - **Static Content**: Serves files from the filesystem (e.g., HTML, CSS, JavaScript, images).
   - **Dynamic Content**: Generates content on-the-fly, often using server-side scripts or applications (e.g., PHP, Node.js, Python).

### Components:
- **Listener**: Monitors a network port for incoming HTTP requests.
- **Processor**: Interprets the request, possibly involving routing to different parts of the application.
- **Response**: Constructs and sends back an appropriate HTTP response.

### Common Features:
- **Routing**: Directs requests to different handlers based on URL patterns.
- **Middleware**: Software that sits between the HTTP request and the final request handler, used for logging, authentication, etc.
- **Security**: Implements security measures like HTTPS, SSL/TLS encryption, and various forms of access control.
- **Performance**: Techniques like caching, load balancing, and connection pooling to handle large volumes of traffic efficiently.

### Examples of HTTP Servers:
- **Apache HTTP Server**: One of the most popular and widely used web servers. Known for its flexibility and extensive module system.
- **Nginx**: Known for its high performance and low resource usage. Often used as a reverse proxy and load balancer.
- **Microsoft IIS (Internet Information Services)**: A feature-rich web server for Windows servers.
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine, often used to build custom HTTP servers using frameworks like Express.js.
- **Bun**: As previously mentioned, Bun can also act as an HTTP server, combining performance and modern features.

### How It Works:
1. **Client Request**: A client (such as a web browser) sends an HTTP request to the server.
2. **Server Processing**: The server receives the request and processes it. This may involve reading a file from disk (for static content) or running a script/application (for dynamic content).
3. **Server Response**: The server sends back an HTTP response. This includes a status code (e.g., 200 OK, 404 Not Found) and the requested content.

### Diagram of a Simple HTTP Request-Response Cycle:

```text
Client (Browser)                       HTTP Server
     |                                      |
     |------ HTTP Request ----------------->|
     |                                      |
     |<----- HTTP Response -----------------|
     |                                      |
```

### Practical Example:
Here is a simple example using Node.js to create an HTTP server:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

In this example:
- An HTTP server is created.
- It listens on port 3000.
- For every request, it responds with "Hello, World!".

### Conclusion:
An HTTP server is a fundamental component of web infrastructure, enabling the delivery of web content to users' browsers and facilitating the operation of web applications by handling HTTP requests and generating appropriate responses.

## HTTP server in different ways

### Rust

Using the `hyper` crate:

```rust
use hyper::service::{make_service_fn, service_fn};
use hyper::{Body, Request, Response, Server};
use std::convert::Infallible;

async fn handle_request(_req: Request<Body>) -> Result<Response<Body>, Infallible> {
    Ok(Response::new(Body::from("Hello, World!")))
}

#[tokio::main]
async fn main() {
    let make_svc = make_service_fn(|_conn| {
        let service = service_fn(handle_request);
        async { Ok::<_, Infallible>(service) }
    });

    let addr = ([127, 0, 0, 1], 3000).into();
    let server = Server::bind(&addr).serve(make_svc);

    println!("Server running at http://{}", addr);
    if let Err(e) = server.await {
        eprintln!("Server error: {}", e);
    }
}
```

### C++

Using the Boost.Beast library:

```cpp
#include <boost/beast/core.hpp>
#include <boost/beast/http.hpp>
#include <boost/beast/version.hpp>
#include <boost/asio/ip/tcp.hpp>
#include <boost/asio/strand.hpp>
#include <iostream>
#include <memory>
#include <string>
#include <thread>

namespace beast = boost::beast;
namespace http = beast::http;
namespace net = boost::asio;
using tcp = net::ip::tcp;

void do_session(tcp::socket socket) {
    bool close = false;
    beast::error_code ec;

    beast::flat_buffer buffer;

    http::request<http::string_body> req;
    http::read(socket, buffer, req, ec);

    if(ec == http::error::end_of_stream)
        return;

    http::response<http::string_body> res{http::status::ok, req.version()};
    res.set(http::field::server, "Beast");
    res.set(http::field::content_type, "text/plain");
    res.body() = "Hello, World!";
    res.prepare_payload();

    http::write(socket, res, ec);
}

int main() {
    try {
        auto const address = net::ip::make_address("127.0.0.1");
        unsigned short port = 3000;

        net::io_context ioc{1};

        tcp::acceptor acceptor{ioc, {address, port}};
        for(;;) {
            tcp::socket socket{ioc};
            acceptor.accept(socket);

            std::thread{std::bind(&do_session, std::move(socket))}.detach();
        }
    } catch (std::exception const& e) {
        std::cerr << "Error: " << e.what() << "\n";
        return EXIT_FAILURE;
    }
}
```

### C

Using `libmicrohttpd`:

```c
#include <microhttpd.h>
#include <stdio.h>
#include <string.h>

#define PORT 3000

int answer_to_connection(void *cls, struct MHD_Connection *connection,
                         const char *url, const char *method,
                         const char *version, const char *upload_data,
                         size_t *upload_data_size, void **con_cls) {
    const char *page = "Hello, World!";
    struct MHD_Response *response;
    int ret;

    response = MHD_create_response_from_buffer(strlen(page), (void *)page,
                                               MHD_RESPMEM_PERSISTENT);
    ret = MHD_queue_response(connection, MHD_HTTP_OK, response);
    MHD_destroy_response(response);

    return ret;
}

int main() {
    struct MHD_Daemon *daemon;

    daemon = MHD_start_daemon(MHD_USE_SELECT_INTERNALLY, PORT, NULL, NULL,
                              &answer_to_connection, NULL, MHD_OPTION_END);
    if (NULL == daemon) return 1;

    printf("Server running at http://127.0.0.1:%d/\n", PORT);

    getchar();  // Wait for the user to press Enter

    MHD_stop_daemon(daemon);
    return 0;
}
```


### Hono (Node.js Framework)

First, install Hono and its peer dependencies:

```sh
npm install hono
```

Then, create the server:

```javascript
const { Hono } = require('hono');

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```
## HTTP Protocol
An HTTP (Hypertext Transfer Protocol) server is a software application or a computer system that delivers web content to clients over the internet or an intranet. It operates on the client-server model, where clients, typically web browsers, make requests for resources (such as HTML pages, images, scripts, etc.) and the server responds with the requested content.

Key characteristics of an HTTP server include:

1. **Protocol Implementation**: It implements the HTTP protocol, which is a set of rules for transferring files (such as text, graphic images, sound, video, and other multimedia files) on the web.

2. **Request Handling**: It receives and processes HTTP requests from clients, interpreting the request method (e.g., GET, POST, PUT, DELETE), headers, and body to determine the appropriate response.

3. **Resource Management**: It manages the resources available on the server, such as web pages, files, databases, or applications, and serves them to clients upon request.

4. **Response Generation**: It generates HTTP responses based on the client's request, including status codes (indicating the success or failure of the request), headers (providing additional information about the response), and the actual content being served.

5. **Concurrency Handling**: It supports handling multiple concurrent connections from clients, allowing it to serve content to multiple users simultaneously.

6. **Security**: It may implement security measures such as encryption (e.g., HTTPS) to protect data transmitted between clients and the server, authentication mechanisms to verify the identity of clients, and access control to restrict access to certain resources.

Examples of popular HTTP server software include Apache HTTP Server, Nginx, Microsoft Internet Information Services (IIS), and Node.js (which can act as an HTTP server using frameworks like Express.js).

Overall, an HTTP server forms the backbone of the World Wide Web, enabling the delivery of web content and services to users across the globe.

**Frontend**: The frontend refers to the part of a software application or website that users interact with directly. It encompasses the user interface, design elements, and functionalities visible to the user in their web browser or mobile app. Frontend technologies include HTML, CSS, and JavaScript, which are used to create and render web pages or app interfaces.

**Backend**: The backend, also known as the server-side, refers to the behind-the-scenes functionalities of a software application or website that users don't see directly. It includes server-side logic, databases, APIs, and other components responsible for processing requests, managing data, and performing operations on the server. Backend technologies often include programming languages like Python, Java, or Node.js, along with frameworks and tools for building server-side applications.

## Body parser
In web development, particularly when working with Node.js and Express.js, `body-parser` is a middleware that helps parse incoming request bodies before your handlers receive them. It makes the request data available under `req.body`.

### Why Use Body Parser?

- **Form Data Handling**: Parses URL-encoded data from forms.
- **JSON Data Handling**: Parses JSON payloads, which is common in API requests.
- **Simplifies Access**: Simplifies accessing the data sent by the client in a structured way.

### Integrating Body Parser in Express

As of Express 4.16.0, body-parser middleware is included in Express itself. You don't need to install the `body-parser` module separately; instead, you can use `express.json()` and `express.urlencoded()` directly.

### Example Usage

Here’s how you can set it up:

#### 1. Using `express.json()` and `express.urlencoded()`

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/conversation', (req, res) => {
    res.send({
        name: "nigam",
        age: 78
    });
});

app.post('/post', (req, res) => {
    const { name, age } = req.body;
    console.log(req.body, "body");
    console.log(req.headers, "headers");
    res.send('post');
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
```

### Explanation:

1. **`express.json()`**:
   - This middleware is used to parse incoming requests with JSON payloads.
   - It converts the JSON payload into a JavaScript object and attaches it to `req.body`.

2. **`express.urlencoded({ extended: true })`**:
   - This middleware is used to parse URL-encoded payloads (typically from HTML forms).
   - The `extended: true` option allows for rich objects and arrays to be encoded into the URL-encoded format. If `extended` is set to `false`, it uses the classic encoding of the `querystring` library.

### Parsing Data:

- **JSON Data**:
  - When a client sends a JSON payload, the `express.json()` middleware parses it and makes it available under `req.body`.
  - Example:
    ```json
    {
      "name": "John",
      "age": 30
    }
    ```

- **URL-encoded Data**:
  - When a client sends form data, the `express.urlencoded()` middleware parses it.
  - Example:
    ```
    name=John&age=30
    ```

### Accessing Parsed Data:
In the `POST /post` route, you access the parsed data as follows:
```javascript
app.post('/post', (req, res) => {
    const { name, age } = req.body;
    console.log(req.body, "body");
    console.log(req.headers, "headers");
    res.send('post');
});
```
- `req.body` contains the parsed data from the request body.
- `req.headers` contains the headers of the incoming request.

**JIT Compilation**
Just-In-Time (JIT) compilation is a technique used by JavaScript engines to improve the performance of executing JavaScript code. It involves dynamically translating JavaScript code into machine code at runtime, allowing for faster execution.

**Why express dont parse body by default?**
Express doesn't parse the request body by default to give developers more control over how they handle incoming data. Parsing the request body can introduce overhead, especially for requests that don't contain any body data or for applications that only need to handle certain types of requests.

By not parsing the body by default, Express allows developers to choose when and how they want to parse the body based on their specific requirements. This approach promotes flexibility and performance optimization, as developers can implement parsing middleware only for routes that actually need it, reducing unnecessary processing for other routes. Additionally, it enables developers to choose the parsing method that best fits their application, whether it's JSON, URL-encoded, or other formats.

Overall, the decision not to parse the body by default aligns with Express's minimalist philosophy, giving developers the freedom to tailor their applications according to their needs while maintaining performance efficiency.
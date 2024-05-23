

### HTTP Server in C

Here's a simple HTTP server in C using sockets:

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>

#define PORT 8080
#define BUFFER_SIZE 1024

int main() {
    int server_fd, new_socket;
    struct sockaddr_in address;
    int addrlen = sizeof(address);
    char buffer[BUFFER_SIZE] = {0};
    const char *hello = "HTTP/1.1 200 OK\nContent-Type: text/plain\nContent-Length: 12\n\nHello world";

    // Creating socket file descriptor
    if ((server_fd = socket(AF_INET, SOCK_STREAM, 0)) == 0) {
        perror("socket failed");
        exit(EXIT_FAILURE);
    }

    // Attaching socket to the port 8080
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(PORT);

    if (bind(server_fd, (struct sockaddr *)&address, sizeof(address)) < 0) {
        perror("bind failed");
        close(server_fd);
        exit(EXIT_FAILURE);
    }

    if (listen(server_fd, 3) < 0) {
        perror("listen");
        close(server_fd);
        exit(EXIT_FAILURE);
    }

    while (1) {
        if ((new_socket = accept(server_fd, (struct sockaddr *)&address, (socklen_t *)&addrlen)) < 0) {
            perror("accept");
            close(server_fd);
            exit(EXIT_FAILURE);
        }

        read(new_socket, buffer, BUFFER_SIZE);
        printf("%s\n", buffer);
        write(new_socket, hello, strlen(hello));
        close(new_socket);
    }

    return 0;
}
```

### HTTP Server in Rust using Actix Web

```rust
use actix_web::{web, App, HttpServer, Responder};

async fn hello() -> impl Responder {
    "Hello world"
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(hello))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
```

### HTTP Server in Go using Gorilla

```go
package main

import (
    "fmt"
    "net/http"
    "github.com/gorilla/mux"
)

func HelloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello world")
}

func main() {
    r := mux.NewRouter()
    r.HandleFunc("/", HelloHandler).Methods("GET")

    http.ListenAndServe(":8080", r)
}
```

### HTTP Server in Java using Spring Boot

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class HelloWorldApplication {

    public static void main(String[] args) {
        SpringApplication.run(HelloWorldApplication.class, args);
    }

    @RestController
    class HelloWorldController {
        @GetMapping("/")
        public String hello() {
            return "Hello world";
        }
    }
}
```

### Comparison with Express Server in Node.js

Here's a simple Express server in Node.js:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
```
### In Nodejs
```js
// Import the built-in 'http' module, which allows Node.js to transfer data over HTTP.
const http = require('http');

// Define the hostname (address) and port the server will listen on.
const hostname = '127.0.0.1';  // This is localhost.
const port = 8080;  // Standard non-privileged port for web servers.

// Create the server using the 'http.createServer' method.
// The callback function is executed each time the server receives a request.
const server = http.createServer((req, res) => {
    // Log the requested URL and method to the console.
    console.log(`${req.method} request for ${req.url}`);

    // Set the response HTTP headers.
    // 200 status code means OK.
    // 'Content-Type' header specifies the type of content, here it's plain text.
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Write the response body. This is the content that will be sent back to the client.
    res.end('Hello world\n');  // 'res.end' also ends the response process.
});

// Tell the server to listen on the defined hostname and port.
// The callback function is executed once the server starts listening.
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

### Comparison

- **C**:
  - **Pros**: Extremely low-level and high performance, fine-grained control over resources.
  - **Cons**: Complex and verbose, manual memory management, less safe due to potential for errors like buffer overflows.

- **Rust**:
  - **Pros**: Memory safety without a garbage collector, modern syntax, and powerful concurrency model.
  - **Cons**: Steeper learning curve due to ownership and borrowing concepts, more verbose than higher-level languages.

- **Go**:
  - **Pros**: Simplicity and ease of use, strong standard library, built-in support for concurrent programming.
  - **Cons**: Limited type system compared to Rust, less expressive.

- **Java with Spring Boot**:
  - **Pros**: Rich ecosystem, mature and widely used framework, strong community support, excellent for building enterprise-level applications.
  - **Cons**: Verbose, longer startup times, higher memory usage.

- **Express (Node.js)**:
  - **Pros**: Simple and easy to use, vast ecosystem of libraries, non-blocking I/O, very popular for web development.
  - **Cons**: Single-threaded (though non-blocking), not as performant for CPU-bound tasks.

### Summary

- **C** is best for low-level programming where performance is critical.
- **Rust** offers a balance of performance and safety.
- **Go** is ideal for its simplicity and efficient concurrency model.
- **Spring Boot (Java)** is suited for large-scale, enterprise applications.
- **Express** is perfect for quick development and prototyping in web applications.

Each of these languages and frameworks has its own strengths and weaknesses, and the best choice depends on the specific requirements and context of the project.
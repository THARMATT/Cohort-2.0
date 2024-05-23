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

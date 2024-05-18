## Notes
### What is Browser?
A browser is a software application that enables users to interact with websites over the internet.
### How Browsers Render Websites ?

Rendering a website involves several key steps. Here is a simplified overview of the process:

1. User Input: The process begins when a user enters a URL into the browser's address bar or clicks on a link.

2. DNS Lookup: The browser sends a request to a DNS (Domain Name System) server to resolve the domain name into an IP address, which it uses to locate the web server hosting the website.

3. HTTP Request: The browser sends an HTTP (Hypertext Transfer Protocol) or HTTPS (HTTP Secure) request to the web server for the desired web page.

4. Server Response: The server responds with the HTML (Hypertext Markup Language) of the requested web page, along with associated resources like CSS (Cascading Style Sheets), JavaScript files, images, and other media.

5. HTML Parsing and DOM Construction:

  - Parsing HTML: The browser parses the HTML document and constructs the DOM (Document Object Model) tree. The DOM is a hierarchical representation of the HTML structure, where each node corresponds to an element in the HTML.

6. CSS Parsing and Style Computation:

 - Parsing CSS: The browser parses the CSS files, both external and embedded within HTML, to understand the styling rules.
 - Style Computation: These styles are applied to the DOM nodes, creating a render tree that represents the visual presentation of the document.

7. JavaScript Execution:

- Downloading and Executing: The browser downloads and executes JavaScript files, which can manipulate the DOM and CSSOM (CSS Object Model), handle events, and perform other dynamic operations.
- Updating the DOM: JavaScript can modify the DOM in real-time, adding, removing, or altering elements and their styles.

8. Layout:

  - Calculating Layout: The browser calculates the geometry of the render tree elements, determining their exact position and size on the screen. This process is also known as reflow or layout.

9. Painting:

 - Rendering Pixels: The browser converts the render tree into actual pixels on the screen. This involves painting the content, which includes text, images, backgrounds, borders, shadows, etc.

10. Compositing:

 - Layers and Compositing: Modern browsers often break the rendering into multiple layers for better performance. These layers are then composited together to form the final visible output.

 ### Why JS,CSS and HTML?
 - Because standardization, learning curve, web ecosystem and browser support. 
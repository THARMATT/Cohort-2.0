# Authentication & Databases

##  Cryptography concepts

### 1. Hashing

Hashing is a process of converting data into a fixed-size string of characters, which is typically a hash code. It's commonly used for securely storing passwords.

#### Example: Hashing a Password using SHA-256

To hash a password in JavaScript, you can use the built-in Web Crypto API.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hashing Example</title>
</head>
<body>
    <div>
        <input type="password" id="password" placeholder="Enter password">
        <button onclick="hashPassword()">Hash Password</button>
        <pre id="hashResult"></pre>
    </div>

    <script>
        async function hashPassword() {
            const password = document.getElementById('password').value;
            const encoder = new TextEncoder();
            const data = encoder.encode(password);
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            document.getElementById('hashResult').textContent = hashHex;
        }
    </script>
</body>
</html>
```

### 2. Encryption

Encryption is the process of converting data into a code to prevent unauthorized access. AES (Advanced Encryption Standard) is commonly used.

#### Example: Encrypting and Decrypting Text

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encryption Example</title>
</head>
<body>
    <div>
        <input type="text" id="plainText" placeholder="Enter text">
        <button onclick="encryptText()">Encrypt</button>
        <button onclick="decryptText()">Decrypt</button>
        <pre id="result"></pre>
    </div>

    <script>
        const key = crypto.subtle.generateKey(
            {
                name: "AES-GCM",
                length: 256,
            },
            true,
            ["encrypt", "decrypt"]
        ).then(key => {
            window.cryptoKey = key;
        });

        async function encryptText() {
            const plainText = document.getElementById('plainText').value;
            const encoded = new TextEncoder().encode(plainText);
            const iv = crypto.getRandomValues(new Uint8Array(12));
            const encrypted = await crypto.subtle.encrypt(
                {
                    name: "AES-GCM",
                    iv: iv
                },
                window.cryptoKey,
                encoded
            );
            const encryptedArray = new Uint8Array(encrypted);
            const result = {
                iv: Array.from(iv),
                encrypted: Array.from(encryptedArray)
            };
            document.getElementById('result').textContent = JSON.stringify(result);
        }

        async function decryptText() {
            const data = JSON.parse(document.getElementById('result').textContent);
            const iv = new Uint8Array(data.iv);
            const encryptedArray = new Uint8Array(data.encrypted);
            const decrypted = await crypto.subtle.decrypt(
                {
                    name: "AES-GCM",
                    iv: iv
                },
                window.cryptoKey,
                encryptedArray
            );
            const decoded = new TextDecoder().decode(decrypted);
            document.getElementById('result').textContent = decoded;
        }
    </script>
</body>
</html>
```

### 3. JSON Web Tokens (JWT)

JWTs are used for securely transmitting information between parties as a JSON object.

#### Example: Creating and Verifying JWTs

For this example, you will need a backend to generate and verify JWTs, typically done with libraries like `jsonwebtoken` in Node.js. Here's a simple illustration:

**Node.js (Backend) Example:**

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.use(express.json());

const secretKey = 'your-secret-key';

app.post('/login', (req, res) => {
    const user = { id: 1, username: 'user' };
    const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
    res.json({ token });
});

app.get('/protected', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.sendStatus(403);
    }
    try {
        const decoded = jwt.verify(token, secretKey);
        res.json({ message: 'This is protected data.', user: decoded });
    } catch (err) {
        res.sendStatus(403);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
```

**HTML + Fetch (Frontend) Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JWT Example</title>
</head>
<body>
    <button onclick="login()">Login</button>
    <button onclick="getProtectedData()">Get Protected Data</button>
    <pre id="result"></pre>

    <script>
        let token = '';

        async function login() {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: 'user', password: 'password' })
            });
            const data = await response.json();
            token = data.token;
            document.getElementById('result').textContent = 'Logged in. Token: ' + token;
        }

        async function getProtectedData() {
            const response = await fetch('http://localhost:3000/protected', {
                headers: {
                    'Authorization': token
                }
            });
            const data = await response.json();
            document.getElementById('result').textContent = JSON.stringify(data, null, 2);
        }
    </script>
</body>
</html>
```

### 4. LocalStorage

LocalStorage is used for storing data in the browser that persists even after the browser is closed.

#### Example: Storing and Retrieving Data from LocalStorage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LocalStorage Example</title>
</head>
<body>
    <input type="text" id="dataInput" placeholder="Enter data">
    <button onclick="saveData()">Save Data</button>
    <button onclick="loadData()">Load Data</button>
    <pre id="result"></pre>

    <script>
        function saveData() {
            const data = document.getElementById('dataInput').value;
            localStorage.setItem('myData', data);
            document.getElementById('result').textContent = 'Data saved to LocalStorage.';
        }

        function loadData() {
            const data = localStorage.getItem('myData');
            document.getElementById('result').textContent = data ? `Loaded data: ${data}` : 'No data found.';
        }
    </script>
</body>
</html>
```
## Databases
Databases are structured collections of data that are managed and stored in a way that enables efficient retrieval, modification, and management. Here’s a brief overview:

### Types of Databases
1. **Relational Databases (RDBMS)**
   - **Examples**: MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server
   - **Characteristics**: Use tables to store data, which can be queried using SQL (Structured Query Language). They support ACID properties (Atomicity, Consistency, Isolation, Durability).

2. **NoSQL Databases**
   - **Examples**: MongoDB, Cassandra, Redis, CouchDB
   - **Characteristics**: Designed for more flexible data models, including document, key-value, wide-column, and graph formats. They often provide high performance and scalability, but may sacrifice some ACID properties.

3. **NewSQL Databases**
   - **Examples**: Google Spanner, CockroachDB, VoltDB
   - **Characteristics**: Aim to provide the scalability of NoSQL systems while maintaining the ACID properties of traditional RDBMS.

4. **In-Memory Databases**
   - **Examples**: Redis, Memcached
   - **Characteristics**: Store data primarily in memory rather than on disk, providing extremely fast data access speeds.

5. **Time Series Databases**
   - **Examples**: InfluxDB, TimescaleDB, OpenTSDB
   - **Characteristics**: Optimized for time-stamped or time-series data, often used for monitoring, IoT applications, and real-time analytics.

6. **Graph Databases**
   - **Examples**: Neo4j, ArangoDB, Amazon Neptune
   - **Characteristics**: Designed to represent and store data in graph structures, focusing on relationships and connections between data points.

### Key Concepts in Databases
- **Schema**: Defines the structure of the database, including tables, fields, relationships, and constraints.
- **Normalization**: Process of organizing data to reduce redundancy and improve data integrity.
- **Indexing**: Technique to improve the speed of data retrieval operations.
- **Transactions**: Sequences of database operations that are treated as a single unit, ensuring data integrity.
- **Replication**: Process of copying data from one database to another for redundancy and availability.
- **Sharding**: Dividing a database into smaller, more manageable pieces called shards, often to improve performance and scalability.

### Common Use Cases
- **Business Applications**: Inventory management, customer relationship management (CRM), enterprise resource planning (ERP).
- **Web Applications**: User accounts, content management, e-commerce.
- **Big Data and Analytics**: Data warehousing, real-time analytics, predictive modeling.
- **IoT and Monitoring**: Sensor data collection, system monitoring, time-series data analysis.

### Choosing a Database
Selecting the right database depends on various factors:
- **Data Model**: Structured (relational) vs. unstructured (NoSQL).
- **Scalability Needs**: Horizontal vs. vertical scaling.
- **Performance Requirements**: Read-heavy vs. write-heavy workloads.
- **Consistency Needs**: Strong consistency vs. eventual consistency.
- **Query Complexity**: Simple key-value lookups vs. complex joins and aggregations.

Databases are fundamental to modern computing, enabling efficient data management and powering a wide range of applications across industries.


## High-Level Overview of MongoDB

#### Key Features
- **Document-Oriented Storage**: MongoDB stores data in flexible, JSON-like documents (BSON). Each document can have a different structure, and this schema-less design allows for easy data model evolution.
- **Dynamic Schema**: MongoDB’s schema is dynamic, allowing for modifications without affecting existing documents.
- **Horizontal Scalability**: MongoDB supports sharding, which partitions data across multiple servers, enabling horizontal scaling.
- **Replication and High Availability**: Through replica sets, MongoDB ensures data redundancy and high availability. A replica set consists of primary and secondary nodes; the primary node handles writes, while secondary nodes replicate the data.
- **Rich Query Language**: MongoDB’s query language is powerful and expressive, supporting a range of operations such as CRUD, aggregation, text search, and geospatial queries.
- **Aggregation Framework**: Provides a way to process data and perform operations like filtering, grouping, and transforming within the database.

### Comparison with SQL Databases

#### Data Model
- **SQL (Relational Databases)**: Use a structured schema defined by tables, rows, and columns. Data is stored in a tabular format with relationships enforced through foreign keys.
- **NoSQL (MongoDB)**: Uses a flexible, document-based data model. Documents can have nested structures and varying fields, making it suitable for hierarchical data.

#### Schema
- **SQL**: Enforces a strict schema, requiring predefined structures for tables and relationships.
- **NoSQL (MongoDB)**: Allows for a dynamic schema, where documents can be modified without schema changes.

#### Scalability
- **SQL**: Traditionally scales vertically by adding more power to a single server. Horizontal scaling (sharding) is more complex.
- **NoSQL (MongoDB)**: Designed for horizontal scalability, making it easier to distribute data across multiple servers.

#### Transactions
- **SQL**: Supports ACID (Atomicity, Consistency, Isolation, Durability) transactions, ensuring strong consistency.
- **NoSQL (MongoDB)**: Supports multi-document ACID transactions, but typically prioritizes scalability and flexibility over strict consistency.

### Why Choose NoSQL (MongoDB) Over SQL?

1. **Flexibility**: NoSQL databases like MongoDB offer flexible schemas, allowing for rapid iteration and changes to the data model without downtime.
2. **Scalability**: NoSQL databases are designed to scale horizontally, accommodating growing datasets and high throughput.
3. **Performance**: For certain types of workloads, such as large-scale data ingestion and real-time analytics, NoSQL databases can provide better performance.
4. **Unstructured Data**: MongoDB excels at handling unstructured or semi-structured data, which is common in modern applications like social media, IoT, and big data analytics.

### Why MongoDB is Famous

1. **Developer-Friendly**: MongoDB’s document model aligns well with how developers structure data in applications, especially those using JSON.
2. **Community and Ecosystem**: MongoDB has a large, active community, comprehensive documentation, and a rich ecosystem of tools and integrations.
3. **Versatility**: MongoDB’s support for a variety of use cases, from web applications to big data analytics, makes it a versatile choice for many organizations.
4. **Enterprise Features**: Robust features such as sharding, replica sets, and the aggregation framework make it suitable for enterprise applications.

### System Design Principles for Selecting a Database

#### Data Model Considerations
- **Data Structure**: Determine whether your data is structured, semi-structured, or unstructured. Choose a database that aligns with the complexity and variability of your data.
- **Flexibility**: If your application requires frequent schema changes or handles diverse data types, a NoSQL database like MongoDB might be more suitable.

#### Scalability Needs
- **Horizontal vs. Vertical Scaling**: Assess whether you need to scale out (adding more servers) or scale up (adding more resources to a single server). MongoDB’s sharding makes horizontal scaling straightforward.
- **Data Distribution**: Consider how your data will be partitioned and distributed. MongoDB’s sharding and replication provide robust solutions for distributed data.

#### Performance Requirements
- **Read/Write Patterns**: Analyze your workload to determine if it’s read-heavy, write-heavy, or balanced. MongoDB’s indexing and replication options can be optimized for different access patterns.
- **Latency and Throughput**: Ensure the database can meet your application’s latency and throughput requirements. MongoDB’s in-memory storage engine and indexing capabilities can enhance performance.

#### Consistency and Availability
- **CAP Theorem**: Understand the trade-offs between consistency, availability, and partition tolerance. MongoDB provides tunable consistency settings to balance these aspects based on your needs.
- **Replication Strategy**: Ensure the database supports replication to achieve high availability and fault tolerance. MongoDB’s replica sets offer automatic failover and data redundancy.

#### Transactional Integrity
- **ACID Compliance**: Determine if your application requires strict transactional integrity. While MongoDB supports multi-document transactions, traditional SQL databases might be preferred for complex transaction requirements.

#### Query and Indexing Capabilities
- **Complex Queries**: Evaluate the complexity of the queries your application will execute. MongoDB’s aggregation framework and rich query language support a wide range of query operations.
- **Indexing**: Ensure the database supports the necessary indexing strategies to optimize query performance. MongoDB provides various indexing options, including compound and geospatial indexes.

#### Operational Considerations
- **Management and Monitoring**: Assess the tools available for database management and monitoring. MongoDB offers robust tools like MongoDB Atlas for cloud management and MongoDB Compass for GUI-based management.
- **Cost**: Consider the total cost of ownership, including licensing, infrastructure, and operational expenses. MongoDB’s open-source version and flexible cloud pricing can be cost-effective.

### Conclusion

MongoDB is a popular NoSQL database due to its flexibility, scalability, and developer-friendly features. When choosing between SQL and NoSQL, consider factors such as data model, scalability, performance, consistency, and operational requirements. MongoDB’s strengths in handling dynamic schemas, horizontal scaling, and a wide range of use cases make it a strong contender for modern applications. Understanding your application’s specific needs and aligning them with the database’s capabilities is crucial for making an informed decision.

## Mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model application data, including built-in type casting, validation, query building, and business logic hooks. Essentially, Mongoose serves as a bridge between the application and MongoDB, making it easier to interact with the database using a more structured and object-oriented approach.

### Key Features of Mongoose

1. **Schema Definition**:
   - Mongoose allows you to define schemas for your documents. A schema represents the structure of a document, including its data types, default values, and validation rules.
   - Example:
     ```javascript
     const mongoose = require('mongoose');
     const Schema = mongoose.Schema;

     const userSchema = new Schema({
       name: { type: String, required: true },
       age: { type: Number, min: 0 },
       email: { type: String, unique: true, required: true },
       createdAt: { type: Date, default: Date.now }
     });

     const User = mongoose.model('User', userSchema);
     ```

2. **Validation**:
   - Mongoose provides built-in validation for schema fields, ensuring data integrity.
   - Example:
     ```javascript
     userSchema.path('email').validate((email) => {
       return email.includes('@');
     }, 'Email must contain @');
     ```

3. **Middleware (Hooks)**:
   - Middleware functions are executed at specific stages in the lifecycle of a Mongoose document. They are useful for running pre- and post-operations like validation, saving, and removing.
   - Example:
     ```javascript
     userSchema.pre('save', function(next) {
       console.log('A user is being saved.');
       next();
     });
     ```

4. **Instance Methods**:
   - You can define custom methods on schema instances, enabling complex operations on documents.
   - Example:
     ```javascript
     userSchema.methods.greet = function() {
       return `Hello, ${this.name}`;
     };

     const user = new User({ name: 'John Doe', email: 'john@example.com' });
     console.log(user.greet()); // Output: Hello, John Doe
     ```

5. **Static Methods**:
   - Static methods are attached to the model itself and can be used for operations related to the entire collection.
   - Example:
     ```javascript
     userSchema.statics.findByEmail = function(email) {
       return this.findOne({ email });
     };

     User.findByEmail('john@example.com').then(user => console.log(user));
     ```

6. **Virtual Properties**:
   - Virtuals are document properties that are not stored in MongoDB. They are typically used for computed properties.
   - Example:
     ```javascript
     userSchema.virtual('fullName').get(function() {
       return `${this.firstName} ${this.lastName}`;
     });
     ```

7. **Population**:
   - Mongoose supports the concept of population, which allows you to automatically replace specified paths in the document with documents from other collections.
   - Example:
     ```javascript
     const postSchema = new Schema({
       title: String,
       author: { type: Schema.Types.ObjectId, ref: 'User' }
     });

     Post.find().populate('author').exec((err, posts) => {
       console.log(posts);
     });
     ```

### Why Use Mongoose?

1. **Schema Enforcement**:
   - Unlike native MongoDB, which is schema-less, Mongoose enforces schemas at the application level, ensuring that documents adhere to a defined structure.

2. **Enhanced Data Integrity**:
   - With built-in validation and middleware, Mongoose ensures data integrity and consistency.

3. **Object-Oriented Approach**:
   - Mongoose provides an object-oriented approach to database operations, making the code more readable and maintainable.

4. **Rich Ecosystem**:
   - Mongoose has a rich ecosystem of plugins and tools that extend its functionality, such as plugins for pagination, soft delete, and more.

### Example: Using Mongoose in a Node.js Application

```javascript
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0 },
  email: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Compile the schema into a model
const User = mongoose.model('User', userSchema);

// Create a new user
const newUser = new User({
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
});

// Save the user to the database
newUser.save((err) => {
  if (err) return console.error(err);
  console.log('User saved successfully!');
});

// Find a user by email
User.findOne({ email: 'john.doe@example.com' }, (err, user) => {
  if (err) return console.error(err);
  console.log('User found:', user);
});
```


Mongoose is a powerful ODM library that simplifies working with MongoDB in Node.js applications by providing schema enforcement, validation, middleware, and more. It is widely used for its ability to bring structure and reliability to applications that use MongoDB, making it an excellent choice for developers looking for a robust and feature-rich solution for managing their data.



| Feature                      | ODM                                        | ORM                                       |
|------------------------------|--------------------------------------------|-------------------------------------------|
| **Definition**               | ODM is a method for mapping data between a document-oriented database and an object-oriented language. | ORM is a method for mapping data between a relational database and an object-oriented language. |
| **Database Type**            | NoSQL (e.g., MongoDB)                      | SQL (e.g., MySQL, PostgreSQL, Oracle)     |
| **Data Structure**           | Document-based (e.g., JSON, BSON)          | Table-based (rows and columns)            |
| **Schema Flexibility**       | Dynamic schemas; can evolve without downtime | Fixed schemas; changes require migrations |
| **Query Language**           | Native API, query builders                 | SQL                                       |
| **Examples**                 | Mongoose (for MongoDB)                     | Hibernate (for Java), Entity Framework (for .NET), SQLAlchemy (for Python) |
| **Relationships**            | Embedding and linking documents            | Foreign keys, joins, and associations     |
| **Suitability**              | Unstructured or semi-structured data, hierarchical data | Structured data with complex relationships |
| **Transaction Support**      | Varies by implementation; often limited    | Strong ACID transactions support          |
| **Scalability**              | Horizontal scaling (sharding)              | Vertical scaling (adding resources to a single server) |
| **Use Case Examples**        | Content management systems, social media, IoT | Enterprise applications, financial systems, e-commerce |
| **Data Consistency**         | Eventual consistency                       | Strong consistency                        |
| **Performance**              | Optimized for high read/write throughput   | Optimized for complex queries and transactions |
| **Data Retrieval**           | Typically through APIs provided by the database (e.g., MongoDB API) | Through SQL queries                       |
| **Migrations**               | Less complex; schema changes are more flexible | More complex; schema changes require migrations and version control |



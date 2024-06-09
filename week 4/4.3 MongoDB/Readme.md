# MongoDB and Databases

## Database
A database is a structured collection of data that is stored and accessed electronically. Databases are designed to manage, store, and retrieve large amounts of information efficiently. They are used in various applications to support the operations, administration, and analytics of organizations. Here are some key points about databases:

1. **Structure**:
   - Databases can store data in different formats, including tables, documents, key-value pairs, graphs, and more.
   - The structure is defined by a schema, which specifies how data is organized and how relationships between data are managed.

2. **Types**:
   - **Relational Databases (RDBMS)**: Data is organized into tables with rows and columns, and relationships between tables are established through keys. Examples include MySQL, PostgreSQL, and Oracle.
   - **NoSQL Databases**: Designed to handle unstructured or semi-structured data, these include document stores (e.g., MongoDB), key-value stores (e.g., Redis), column-family stores (e.g., Cassandra), and graph databases (e.g., Neo4j).
   - **In-Memory Databases**: Data is stored in the main memory to provide faster data retrieval. Examples include Redis and Memcached.

3. **Components**:
   - **Database Engine**: The core service for accessing and managing the database.
   - **Database Schema**: The structure that defines how data is organized, including tables, views, indexes, and relationships.
   - **Query Language**: A language used to perform operations on the data. SQL (Structured Query Language) is commonly used in relational databases.
   - **Transactions**: A sequence of operations performed as a single logical unit of work, ensuring data integrity.

4. **Functions**:
   - **Data Storage**: Efficiently storing large volumes of data.
   - **Data Retrieval**: Providing mechanisms to query and retrieve specific data.
   - **Data Manipulation**: Allowing the insertion, updating, and deletion of data.
   - **Data Management**: Ensuring data integrity, security, and consistency.

5. **Uses**:
   - **Business Applications**: Managing customer data, inventory, financial transactions, etc.
   - **Web Applications**: Storing user data, content management, etc.
   - **Analytics and Reporting**: Analyzing data for business intelligence and decision-making.

In summary, a database is a critical component in the digital infrastructure, enabling the efficient management of data to support various applications and services.

## Why dont we let user to hit database directly?
Allowing users to interact directly with a database is generally discouraged due to several important reasons related to security, performance, data integrity, and user experience. Here are the main reasons:

### 1. **Security**

- **Unauthorized Access**: Direct access can lead to unauthorized users accessing sensitive data. Limiting access through controlled interfaces helps enforce security policies and restricts access based on user roles and permissions.
- **Injection Attacks**: Direct interaction with the database, especially through SQL queries, can expose the system to SQL injection attacks, where malicious users can manipulate queries to gain unauthorized access or cause damage.

### 2. **Data Integrity**

- **Uncontrolled Changes**: Users with direct access can inadvertently or maliciously modify or delete critical data, leading to data corruption and loss.
- **Consistency**: Database integrity constraints and business rules might not be properly enforced if users bypass application-level logic, potentially leading to inconsistent or invalid data.

### 3. **Performance**

- **Inefficient Queries**: Users might execute poorly optimized queries that can degrade database performance, causing slow response times and affecting other users.
- **Resource Management**: Applications can manage resources more effectively by controlling the number and type of queries that are executed against the database.

### 4. **Abstraction and User Experience**

- **Complexity**: Direct interaction with the database requires users to understand the underlying data structures and query languages, which can be complex and error-prone.
- **User Interface**: Applications provide user-friendly interfaces tailored to specific tasks, hiding the complexity of the database and providing a better user experience.

### 5. **Scalability**

- **Load Management**: Applications can implement caching, load balancing, and other techniques to manage database load more effectively than direct user access would allow.
- **Connection Management**: Direct access could lead to too many open connections, overwhelming the database. Applications can manage connections more efficiently.

### 6. **Audit and Compliance**

- **Tracking Changes**: Applications can log user actions, providing an audit trail for compliance and troubleshooting. Direct database access makes it harder to track changes accurately.
- **Enforcing Policies**: Regulatory and organizational policies can be enforced more effectively through controlled application interfaces.

### Solutions to Mediate Access

To address these issues while still providing necessary data access, the following solutions are commonly implemented:

- **APIs (Application Programming Interfaces)**: APIs provide controlled access to the database through well-defined endpoints. This allows for validation, authentication, and authorization, ensuring secure and efficient data access.
- **ORM (Object-Relational Mapping)**: ORMs abstract the database interactions, providing a layer of safety and consistency while allowing developers to work with data in a more intuitive way.
- **Stored Procedures and Views**: These database objects can encapsulate complex queries and provide controlled access to data, ensuring that users cannot modify the underlying tables directly.
- **User Roles and Permissions**: Database access can be restricted based on user roles, ensuring that only authorized users can access or modify data.

By using these methods, organizations can ensure secure, efficient, and user-friendly access to their databases, protecting data integrity and system performance.

## Mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level abstraction over the MongoDB native driver, allowing developers to define schemas for their data, enforce data validation, and interact with MongoDB in a more structured and convenient way. Here are some key features and concepts of Mongoose:

### Key Features of Mongoose

1. **Schemas**:
   - Mongoose allows you to define schemas for your collections. A schema defines the structure of documents within a collection, including fields, data types, validation rules, and default values.

2. **Models**:
   - Models are constructors compiled from schemas. Instances of models represent documents which can be saved and retrieved from the database. Models provide an interface for interacting with the database.

3. **Validation**:
   - Mongoose provides built-in validators for data validation, ensuring that data adheres to the schema before it is saved to the database. Custom validation logic can also be defined.

4. **Middleware**:
   - Middleware (or pre and post hooks) allows you to execute functions during specific stages of the document lifecycle, such as before saving, updating, or removing documents.

5. **Plugins**:
   - Mongoose supports plugins, which allow you to reuse code across multiple schemas and models. Plugins can add custom behavior to schemas.

6. **Population**:
   - Mongoose provides a way to reference documents in other collections and automatically replace the references with the actual documents. This is known as population.

7. **Query Building**:
   - Mongoose provides a powerful and flexible API for building queries. It supports chaining query methods, promises, and async/await syntax.

### Example Usage of Mongoose

Here is a basic example to illustrate how to use Mongoose in a Node.js application:

#### 1. Install Mongoose

First, you need to install Mongoose using npm:

```bash
npm install mongoose
```

#### 2. Define a Schema and Model

```javascript
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase');

// Define a schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    min: 0
  }
});

// Compile the schema into a model
const User = mongoose.model('User', userSchema);
```

#### 3. Create and Save a Document

```javascript
async function createUser() {
  const user = new User({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30
  });

  try {
    const savedUser = await user.save();
    console.log('User saved:', savedUser);
  } catch (error) {
    console.error('Error saving user:', error);
  }
}

createUser();
```

#### 4. Query Documents

```javascript
async function findUsers() {
  try {
    const users = await User.find({ age: { $gte: 18 } });
    console.log('Users found:', users);
  } catch (error) {
    console.error('Error finding users:', error);
  }
}

findUsers();
```

#### 5. Update and Delete Documents

```javascript
async function updateUser(userId) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { age: 35 },
      { new: true, runValidators: true }
    );
    console.log('User updated:', updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
  }
}

async function deleteUser(userId) {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    console.log('User deleted:', deletedUser);
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}
```

### Conclusion

Mongoose simplifies working with MongoDB in Node.js by providing a rich set of features for schema definition, data validation, middleware, and query building. It helps enforce data consistency and provides a more organized and maintainable way to interact with MongoDB.

## CRUD API's
Mongoose provides several methods for performing CRUD (Create, Read, Update, Delete) operations. Below is a list of commonly used Mongoose methods for each CRUD operation:

### Create

1. **Model.create(doc(s), [callback])**: Shortcut for creating one or more documents and saving them to the database.
   ```javascript
   const user = await User.create({ name: 'John Doe', email: 'john@example.com', age: 30 });
   ```

2. **new Model(doc).save([callback])**: Create a new document instance and save it to the database.
   ```javascript
   const user = new User({ name: 'John Doe', email: 'john@example.com', age: 30 });
   const savedUser = await user.save();
   ```

### Read

1. **Model.find(conditions, [projection], [options], [callback])**: Retrieve multiple documents that match the conditions.
   ```javascript
   const users = await User.find({ age: { $gte: 18 } });
   ```

2. **Model.findOne(conditions, [projection], [options], [callback])**: Retrieve a single document that matches the conditions.
   ```javascript
   const user = await User.findOne({ email: 'john@example.com' });
   ```

3. **Model.findById(id, [projection], [options], [callback])**: Retrieve a single document by its `_id` field.
   ```javascript
   const user = await User.findById('60d5f3c8f1b6b72a3c8e4f5e');
   ```

4. **Model.countDocuments(conditions, [callback])**: Count the number of documents that match the conditions.
   ```javascript
   const count = await User.countDocuments({ age: { $gte: 18 } });
   ```

### Update

1. **Model.updateOne(conditions, doc, [options], [callback])**: Update a single document that matches the conditions.
   ```javascript
   const result = await User.updateOne({ email: 'john@example.com' }, { age: 31 });
   ```

2. **Model.updateMany(conditions, doc, [options], [callback])**: Update multiple documents that match the conditions.
   ```javascript
   const result = await User.updateMany({ age: { $lt: 18 } }, { status: 'minor' });
   ```

3. **Model.findByIdAndUpdate(id, update, [options], [callback])**: Find a document by `_id` and update it.
   ```javascript
   const user = await User.findByIdAndUpdate('60d5f3c8f1b6b72a3c8e4f5e', { age: 31 }, { new: true });
   ```

4. **Model.findOneAndUpdate(conditions, update, [options], [callback])**: Find a single document that matches the conditions and update it.
   ```javascript
   const user = await User.findOneAndUpdate({ email: 'john@example.com' }, { age: 31 }, { new: true });
   ```

### Delete

1. **Model.deleteOne(conditions, [callback])**: Delete a single document that matches the conditions.
   ```javascript
   const result = await User.deleteOne({ email: 'john@example.com' });
   ```

2. **Model.deleteMany(conditions, [callback])**: Delete multiple documents that match the conditions.
   ```javascript
   const result = await User.deleteMany({ age: { $lt: 18 } });
   ```

3. **Model.findByIdAndDelete(id, [options], [callback])**: Find a document by `_id` and delete it.
   ```javascript
   const user = await User.findByIdAndDelete('60d5f3c8f1b6b72a3c8e4f5e');
   ```

4. **Model.findOneAndDelete(conditions, [options], [callback])**: Find a single document that matches the conditions and delete it.
   ```javascript
   const user = await User.findOneAndDelete({ email: 'john@example.com' });
   ```

### Additional Useful Methods

1. **Model.replaceOne(conditions, doc, [options], [callback])**: Replace a single document that matches the conditions.
   ```javascript
   const result = await User.replaceOne({ email: 'john@example.com' }, { name: 'John Doe', email: 'john@example.com', age: 31 });
   ```

2. **Model.findOneAndReplace(conditions, replacement, [options], [callback])**: Find a single document that matches the conditions and replace it.
   ```javascript
   const user = await User.findOneAndReplace({ email: 'john@example.com' }, { name: 'John Doe', email: 'john@example.com', age: 31 }, { new: true });
   ```

## Jargons

### Cluster
A **cluster** in MongoDB is a group of servers that work together to maintain high availability and data redundancy. It can be a **replica set**, which replicates data across multiple servers, or a **sharded cluster**, which distributes data across multiple servers to balance load and manage large datasets.

### Database
A **database** in MongoDB is a container for collections, serving as a namespace for organizing data. Each database has its own set of collections and is isolated from other databases on the same MongoDB instance.

### Collection
A **collection** in MongoDB is a grouping of documents, analogous to a table in relational databases. Collections are schema-less, meaning documents within a collection can have different structures, though they typically serve similar purposes.
# JWT 


1. **Install `jsonwebtoken`**:
   ```
   npm install jsonwebtoken
   ```

2. **Generate a JWT**:
   ```javascript
   const jwt = require('jsonwebtoken');

   // Define your payload and secret key
   const payload = { username: 'exampleUser' };
   const secret = 'my-secret';

   // Sign the token [generate]
   const token = jwt.sign(payload, secret, { expiresIn: '1h' });

   console.log('Generated Token:', token);
   ```

3. **Decode a JWT**:
   ```javascript
   // Decode the token without verifying
   const decoded = jwt.decode(token);

   console.log('Decoded Token:', decoded);
   ```

4. **Verify a JWT**:
   ```javascript
   // Verify the token
   jwt.verify(token, secret, (err, decoded) => {
       if (err) {
           console.error('Token verification failed:', err);
       } else {
           console.log('Verified Token:', decoded);
       }
   });
   ```

Here’s the complete script together:

```javascript
const jwt = require('jsonwebtoken');

// Define your payload and secret key
const payload = { username: 'exampleUser' };
const secret = 'your-256-bit-secret';

// Sign the token
const token = jwt.sign(payload, secret, { expiresIn: '1h' });
console.log('Generated Token:', token);

// Decode the token without verifying
const decoded = jwt.decode(token);
console.log('Decoded Token:', decoded);

// Verify the token
jwt.verify(token, secret, (err, decoded) => {
    if (err) {
        console.error('Token verification failed:', err);
    } else {
        console.log('Verified Token:', decoded);
    }
});
```

### Explanation:
- **Sign**: Create a JWT using the `sign` method. The payload contains the data you want to include in the token, and the secret is used to sign the token.
- **Decode**: Use the `decode` method to decode the token without verifying its signature. This can be useful for inspecting the token.
- **Verify**: Use the `verify` method to ensure the token's signature is valid and it hasn't expired.


- Advanced TS API’s
    - Pick
        
        In TypeScript, the `Pick` utility type allows you to create a new type by picking some properties from an existing type. Here's how you can use it:
        
        ```tsx
        type Person = {
            name: string;
            age: number;
            address: string;
            email: string;
        };
        
        // Pick only 'name' and 'email' properties from Person type
        type BasicInfo = Pick<Person, 'name' | 'email'>;
        
        // Usage example
        const personInfo: BasicInfo = {
            name: 'John Doe',
            email: 'john.doe@example.com'
        };
        
        ```
        
        In this example:
        
        - `Person` is the original type with four properties (`name`, `age`, `address`, `email`).
        - `BasicInfo` is a new type created using `Pick`, which selects only the `name` and `email` properties from `Person`.
        
        This is particularly useful when you want to create new types that are derived from existing types but with a subset of properties.
        
    - Partial
        
        In TypeScript, the `Partial<T>` utility type allows you to make all properties of a type optional. This means you can create a new type where each property may or may not be present.
        
        Here's how `Partial<T>` works:
        
        ```tsx
        type Person = {
            name: string;
            age: number;
            address: string;
            email: string;
        };
        
        // Make all properties of Person type optional
        type PartialPerson = Partial<Person>;
        
        // Usage example
        const partialPerson: PartialPerson = {
            name: 'John Doe'
            // age, address, and email are optional now
        };
        
        ```
        
        In this example:
        
        - `Person` is the original type with four required properties (`name`, `age`, `address`, `email`).
        - `Partial<Person>` creates a new type `PartialPerson` where all properties (`name`, `age`, `address`, `email`) are optional.
        
        This is handy when you want to define objects that might not have all properties defined at once or when you want to progressively build up an object by adding properties one at a time.
        
    - `Readonly`
        
        In TypeScript, the `Readonly<T>` utility type is used to create an immutable version of a type `T`. It marks all properties of the type as readonly, meaning once they are assigned a value, they cannot be changed thereafter.
        
        Here's how you can use `Readonly<T>`:
        
        ```tsx
        type Person = {
            name: string;
            age: number;
            address: string;
        };
        
        // Create a readonly version of Person type
        type ReadonlyPerson = Readonly<Person>;
        
        // Usage example
        const person: ReadonlyPerson = {
            name: 'Alice',
            age: 30,
            address: '123 Main St'
        };
        
        // Attempting to modify properties will result in an error
        // person.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.
        
        ```
        
        In this example:
        
        - `Person` is the original type with three properties (`name`, `age`, `address`).
        - `Readonly<Person>` creates a new type `ReadonlyPerson` where all properties (`name`, `age`, `address`) are readonly.
        
        Using `Readonly<T>` ensures that once an object of type `ReadonlyPerson` is created, its properties cannot be modified. This is useful when you want to prevent accidental mutation of object properties, especially in scenarios where immutability is desired for better code predictability and maintainability.
        
    - Record & Map
        
        In TypeScript, `Record<K, T>` and `Map<K, V>` are two constructs used for different purposes related to storing and accessing data:
        
        ### `Record<K, T>`
        
        The `Record<K, T>` type is a utility type that represents an object type whose keys are of type `K` and whose values are of type `T`. It's commonly used when you want to define a type for an object literal with known keys and a uniform value type.
        
        Here's how you can use `Record<K, T>`:
        
        ```tsx
        type Person = {
            name: string;
            age: number;
        };
        
        // Record type with string keys and Person values
        type PeopleByName = Record<string, Person>;
        
        // Usage example
        const people: PeopleByName = {
            'john': { name: 'John Doe', age: 30 },
            'alice': { name: 'Alice Smith', age: 25 }
        };
        
        ```
        
        In this example:
        
        - `PeopleByName` is a type alias using `Record<string, Person>`, which means it's an object where keys are strings (`'john'`, `'alice'`) and values are objects of type `Person`.
        
        ### `Map<K, V>`
        
        The `Map<K, V>` is a built-in JavaScript data structure available in TypeScript as well. It allows you to store key-value pairs where keys can be of any type (`K`) and values can be of any type (`V`). Unlike object literals (`Record<K, T>`), `Map<K, V>` provides additional methods and functionalities for managing and manipulating key-value pairs.
        
        Here's how you can use `Map<K, V>`:
        
        ```tsx
        // Define a map where keys are strings and values are numbers
        let ageMap = new Map<string, number>();
        
        // Set values in the map
        ageMap.set('John', 30);
        ageMap.set('Alice', 25);
        
        // Get values from the map
        console.log(ageMap.get('John')); // Output: 30
        console.log(ageMap.get('Alice')); // Output: 25
        
        ```
        
        In this example:
        
        - `ageMap` is a `Map<string, number>` where keys are strings (names) and values are numbers (ages).
        - `set()` is used to add key-value pairs to the map, and `get()` retrieves the value associated with a specific key.
        
        ### Key Differences:
        
        - **Usage**: Use `Record<K, T>` when you want to define a type for an object literal with specific keys and uniform values. Use `Map<K, V>` when you need a more versatile data structure with built-in methods for managing key-value pairs.
        - **Mutability**: Objects created using `Record<K, T>` are mutable (properties can be modified directly), while `Map<K, V>` provides methods (`set`, `delete`, etc.) to modify its contents.
        - **API**: `Map<K, V>` offers a rich set of methods (`set`, `get`, `delete`, `has`, etc.) for interacting with its data, making it suitable for more complex data management scenarios compared to plain object literals.
        
        Both `Record<K, T>` and `Map<K, V>` serve distinct purposes depending on whether you need a straightforward object structure with known keys and types (`Record`) or a more dynamic, feature-rich key-value store (`Map`).
        
    - Exclude
        
        In TypeScript, the `Exclude<T, U>` utility type is used to exclude from `T` those types that are assignable to `U`. It effectively creates a new type by removing types from `T` that overlap with `U`.
        
        Here's how you can use `Exclude<T, U>`:
        
        ```tsx
        type A = 'a' | 'b' | 'c';
        type B = 'a' | 'b';
        
        // Exclude types from A that are assignable to B
        type Excluded = Exclude<A, B>; // Results in 'c'
        
        // Usage example
        let value: Excluded;
        value = 'c'; // Allowed
        // value = 'a'; // Error: 'a' is assignable to type 'B'
        
        ```
        
        In this example:
        
        - `type A = 'a' | 'b' | 'c';` defines a union type containing three string literals: `'a'`, `'b'`, and `'c'`.
        - `type B = 'a' | 'b';` defines a union type containing two of those literals: `'a'` and `'b'`.
        - `Exclude<A, B>` results in a type that excludes from `A` any types that are assignable to `B`, leaving `'c'` as the only remaining type.
        
        ### Practical Example:
        
        ```tsx
        type AllowedRoles = 'admin' | 'user' | 'manager';
        type RestrictedRoles = 'user';
        
        // Exclude restricted roles from allowed roles
        type FinalRoles = Exclude<AllowedRoles, RestrictedRoles>; // Results in 'admin' | 'manager'
        
        // Usage example
        let userRole: FinalRoles;
        userRole = 'admin'; // Allowed
        userRole = 'user'; // Error: 'user' is excluded from FinalRoles
        
        ```
        
        In this case:
        
        - `AllowedRoles` defines a set of roles that are permissible (`'admin'`, `'user'`, `'manager'`).
        - `RestrictedRoles` specifies roles that are not allowed (`'user'`).
        - `Exclude<AllowedRoles, RestrictedRoles>` results in a type `FinalRoles` that excludes `'user'` from `AllowedRoles`, allowing only `'admin'` and `'manager'`.
        
        The `Exclude<T, U>` type is particularly useful when you want to create a subset of types from a larger set based on some exclusion criteria defined by another type.
        
    - Type Inference In Zod
        
        In Zod, type inference plays a crucial role in defining schemas and validating data. Zod is a TypeScript-first schema validation library, which means it leverages TypeScript's type system for defining and inferring schema types. Here’s how type inference works in Zod:
        
        ### Basic Type Inference
        
        When you define a schema using Zod, TypeScript can infer the type of the validated data based on the schema definition. Here’s a simple example:
        
        ```tsx
        import { z } from 'zod';
        
        const schema = z.object({
            name: z.string(),
            age: z.number(),
            isActive: z.boolean()
        });
        
        // TypeScript infers the type of data that matches the schema
        type Data = z.infer<typeof schema>;
        
        // Usage example
        const validData: Data = {
            name: 'John Doe',
            age: 30,
            isActive: true
        };
        
        // Incorrect usage - TypeScript will show an error
        // const invalidData: Data = {
        //     name: 'Alice', // Missing age and isActive
        // };
        
        ```
        
        In this example:
        
        - `z.object({...})` defines a schema using Zod, specifying an object with `name` as a string, `age` as a number, and `isActive` as a boolean.
        - `z.infer<typeof schema>` extracts the inferred type of data that matches `schema`. Here, `Data` is inferred as `{ name: string; age: number; isActive: boolean; }`.
        - TypeScript ensures that `validData` conforms to `Data`, preventing compilation if `invalidData` does not match the inferred type.
        
        ### Type Narrowing and Validation
        
        Zod allows for more advanced schema definitions that can narrow down types based on conditional logic or validation rules. For instance:
        
        ```tsx
        import { z } from 'zod';
        
        const schema = z.object({
            role: z.enum(['admin', 'user']),
            isAdmin: z.boolean().optional()
        }).refine(data => data.isAdmin === true ? data.role === 'admin' : true, {
            message: 'If isAdmin is true, role must be admin'
        });
        
        type Data = z.infer<typeof schema>;
        
        // Usage examples
        const validData: Data = {
            role: 'admin',
            isAdmin: true
        };
        
        // Incorrect usage - TypeScript will show an error
        // const invalidData: Data = {
        //     role: 'user',
        //     isAdmin: true // role must be 'admin' if isAdmin is true
        // };
        
        ```
        
        ### Benefits of Type Inference in Zod:
        
        1. **Type Safety**: TypeScript ensures that only data conforming to the inferred schema type (`Data` in the examples) is accepted, preventing runtime errors.
        2. **Code Integrity**: Changes to schema definitions automatically propagate type changes throughout your codebase, reducing the risk of inconsistent data handling.
        3. **Developer Productivity**: By leveraging TypeScript’s type inference, Zod allows developers to focus more on defining data structures and validation rules rather than manually maintaining type definitions.
        
        Overall, Zod’s integration with TypeScript provides robust type inference capabilities, enhancing type safety and developer productivity in handling schema validation and data manipulation.
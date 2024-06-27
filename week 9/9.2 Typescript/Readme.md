# Typescript
## Interfaces

Interfaces are a way to define the structure of an object. They are primarily used for declaring the shape of objects and can be extended or implemented by classes.

#### Example of Interface:

```typescript
interface User {
  name: string;
  age: number;
  email?: string; // optional property
}

const user: User = {
  name: "John",
  age: 25
};
```

#### Extending Interfaces:

You can extend an interface to inherit properties from another interface.

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: "Jane",
  age: 30,
  employeeId: 1234
};
```

#### Implementing Interfaces in Classes:

Classes can implement interfaces to ensure they adhere to a particular structure.

```typescript
interface Animal {
  name: string;
  sound: () => void;
}

class Dog implements Animal {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }

  sound() {
    console.log("Woof!");
  }
}

const myDog = new Dog("Buddy");
myDog.sound(); // Output: Woof!
```

### Types

Types are more flexible than interfaces. They can be used to define a wide range of types including primitive types, union types, intersection types, and more.

#### Example of Type:

```typescript
type User = {
  name: string;
  age: number;
  email?: string;
};

const user: User = {
  name: "John",
  age: 25
};
```

#### Union and Intersection Types:

Types can be used to create union or intersection types.

```typescript
type Animal = {
  name: string;
};

type Bird = Animal & {
  canFly: boolean;
};

const parrot: Bird = {
  name: "Parrot",
  canFly: true
};

type Pet = Dog | Bird; // Union type
```

### Key Differences

1. **Declaration Merging**: Interfaces support declaration merging, meaning you can declare the same interface multiple times, and TypeScript will merge them. Types do not support this.

    ```typescript
    interface Person {
      name: string;
    }

    interface Person {
      age: number;
    }

    const person: Person = {
      name: "Alice",
      age: 28
    };
    ```

2. **Flexibility**: Types are more flexible and can represent more complex type constructs like union, intersection, and tuple types.

3. **Use Cases**: Interfaces are generally preferred for defining the shape of an object, especially when using object-oriented programming with classes. Types are preferred for more complex type definitions and when you need to use features like union or intersection types.

In summary, use interfaces when you need to define the structure of objects or when you need declaration merging. Use types when you need more flexibility or when defining complex type constructs.

## Types
Types in TypeScript are a powerful feature that allow you to define the structure of your data, ensuring type safety and reducing runtime errors. Here’s a detailed look at the different kinds of types you can define in TypeScript:

### Basic Types

#### Primitive Types:
1. **Number**: Represents all numeric values.
    ```typescript
    let age: number = 25;
    ```

2. **String**: Represents text data.
    ```typescript
    let name: string = "John";
    ```

3. **Boolean**: Represents true or false values.
    ```typescript
    let isActive: boolean = true;
    ```

4. **Null and Undefined**: Represent the absence of a value.
    ```typescript
    let value: null = null;
    let notAssigned: undefined = undefined;
    ```

5. **Symbol**: Represents unique and immutable values.
    ```typescript
    let sym: symbol = Symbol("unique");
    ```

6. **BigInt**: Represents large integers.
    ```typescript
    let bigNumber: bigint = 123456789012345678901234567890n;
    ```

### Object Types

#### Object:
An object type represents any non-primitive value.
```typescript
let user: { name: string; age: number } = {
  name: "Alice",
  age: 30
};
```

### Arrays

You can define arrays using two ways: `Type[]` or `Array<Type>`.

```typescript
let numbers: number[] = [1, 2, 3, 4];
let strings: Array<string> = ["a", "b", "c"];
```

### Tuples

Tuples are fixed-length arrays with specific types for each element.

```typescript
let person: [string, number] = ["John", 25];
```

### Enums

Enums allow you to define a set of named constants.

```typescript
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
```

### Any

The `any` type disables type checking, allowing any type to be assigned.

```typescript
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
```

### Unknown

The `unknown` type is similar to `any`, but safer as it requires a type assertion before using it.

```typescript
let value: unknown = "Hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

### Union Types

Union types allow a variable to hold multiple types.

```typescript
let id: number | string;
id = 10;
id = "abc";
```

### Intersection Types

Intersection types combine multiple types into one.

```typescript
type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

let staff: Staff = { name: "Alice", employeeId: 123 };
```

### Literal Types

Literal types allow you to specify exact values a variable can have.

```typescript
let direction: "up" | "down";
direction = "up"; // valid
direction = "left"; // invalid
```

### Type Aliases

Type aliases let you create custom types using the `type` keyword.

```typescript
type User = {
  name: string;
  age: number;
};

let user: User = { name: "John", age: 25 };
```

### Function Types

You can define types for functions, including the parameters and return type.

```typescript
type Add = (a: number, b: number) => number;

const add: Add = (x, y) => x + y;
```

### Generics

Generics allow you to create reusable components that work with any data type.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(42);
```

### Advanced Types

#### Conditional Types:

Conditional types enable you to create types that depend on a condition.

```typescript
type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"
```

#### Mapped Types:

Mapped types allow you to create new types by transforming existing ones.

```typescript
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type User = { name: string; age: number };
type ReadOnlyUser = ReadOnly<User>;
```

#### Utility Types:

TypeScript provides several utility types to help with common type transformations.

1. **Partial**: Makes all properties in a type optional.
    ```typescript
    type PartialUser = Partial<User>;
    ```

2. **Required**: Makes all properties in a type required.
    ```typescript
    type RequiredUser = Required<User>;
    ```

3. **Pick**: Constructs a type by picking a set of properties from another type.
    ```typescript
    type PickUser = Pick<User, "name">;
    ```

4. **Omit**: Constructs a type by excluding a set of properties from another type.
    ```typescript
    type OmitUser = Omit<User, "age">;
    ```

### Summary

Types in TypeScript are versatile and allow you to create complex, type-safe structures in your code. By using types, you can catch errors early in the development process, make your code more readable and maintainable, and leverage TypeScript's powerful type inference and checking mechanisms.

## Types vs Interfaces
| Feature                       | Type                                             | Interface                                      |
|-------------------------------|--------------------------------------------------|------------------------------------------------|
| **Definition Syntax**         | `type Alias = { ... }`                           | `interface Name { ... }`                       |
| **Usage**                     | Used for defining various types, including unions, intersections, and primitives. | Primarily used for defining object shapes.     |
| **Declaration Merging**       | Not supported                                    | Supported                                      |
| **Extensibility**             | Can use intersection types (`type A = B & C`)    | Can be extended using `extends` keyword        |
| **Implementation by Classes** | Cannot be directly implemented by classes        | Can be implemented by classes using `implements` keyword |
| **Function Types**            | Defined using `type`                             | Can be defined but less common                 |
| **Tuples**                    | Can define tuples                                | Not applicable                                 |
| **Mapped Types**              | Can use mapped types                             | Not applicable                                 |
| **Generics**                  | Supported                                        | Supported                                      |
| **Complex Types**             | Can define union and intersection types, conditional types, etc. | Limited to object shapes                       |
| **Syntax for Optional Properties** | `{ propertyName?: type }`                  | `{ propertyName?: type }`                      |
| **Extending Multiple Types**  | Possible using intersection types                | Can extend multiple interfaces using `extends` |
| **Compatibility**             | Types and interfaces are often interchangeable when defining object shapes | Types and interfaces are often interchangeable when defining object shapes |
| **Aliases for Primitives**    | Can create aliases for primitive types           | Cannot create aliases for primitive types      |

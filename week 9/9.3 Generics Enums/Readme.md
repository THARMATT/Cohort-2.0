- Generics & Enums
    - Enums
        
        Enums (short for enumerations) in TypeScript are a way of defining a set of named constants. They can be used to represent a collection of related values in a type-safe way. Enums make it easier to work with sets of related values by giving them readable names.
        
        ### Basic Example of Enums
        
        Here is a simple example of an enum in TypeScript:
        
        ```tsx
        enum Direction {
          Up,
          Down,
          Left,
          Right
        }
        
        let move: Direction = Direction.Up;
        
        ```
        
        In this example:
        
        - `Direction` is an enum with four members: `Up`, `Down`, `Left`, and `Right`.
        - Each member of the enum is assigned an incremental numeric value starting from 0 (`Up` = 0, `Down` = 1, `Left` = 2, `Right` = 3).
        
        ### String Enums
        
        Enums can also have string values:
        
        ```tsx
        enum Status {
          Success = "SUCCESS",
          Failure = "FAILURE",
          Pending = "PENDING"
        }
        
        let currentStatus: Status = Status.Success;
        
        ```
        
        In this example, the `Status` enum has members with string values. This can be useful when you need to work with predefined string values in your application.
        
        ### Practical Use Case for Enums
        
        Enums are particularly useful in scenarios where you need to represent a fixed set of options, such as states, modes, or categories. Let's consider a practical use case of a task management system where tasks can have different statuses.
        
        ### Task Management System Example
        
        Imagine you are building a task management system where tasks can have different statuses like "To Do", "In Progress", "Completed", and "Archived". You can use an enum to define these statuses:
        
        ```tsx
        enum TaskStatus {
          ToDo = "TODO",
          InProgress = "IN_PROGRESS",
          Completed = "COMPLETED",
          Archived = "ARCHIVED"
        }
        
        interface Task {
          id: number;
          title: string;
          description: string;
          status: TaskStatus;
        }
        
        let task1: Task = {
          id: 1,
          title: "Learn TypeScript",
          description: "Understand the basics of TypeScript",
          status: TaskStatus.ToDo
        };
        
        let task2: Task = {
          id: 2,
          title: "Build a project",
          description: "Apply TypeScript in a real project",
          status: TaskStatus.InProgress
        };
        
        // Function to update task status
        function updateTaskStatus(task: Task, status: TaskStatus): void {
          task.status = status;
        }
        
        updateTaskStatus(task1, TaskStatus.Completed);
        
        console.log(task1.status); // Output: COMPLETED
        
        ```
        
        In this example:
        
        - The `TaskStatus` enum defines the possible statuses for a task.
        - The `Task` interface uses the `TaskStatus` enum for the `status` property.
        - The `updateTaskStatus` function updates the status of a task using the `TaskStatus` enum.
        
        ### Benefits of Using Enums
        
        1. **Type Safety**: Enums provide type safety by restricting the possible values that a variable can have to the defined set of enum members.
        2. **Readability**: Enums make code more readable and self-documenting by using meaningful names instead of arbitrary values.
        3. **Refactoring**: Enums make it easier to refactor code because changing the value of an enum member is easier and safer than updating multiple instances of a magic value throughout the codebase.
        4. **Auto-Completion**: Enums enhance the developer experience with better auto-completion and tooling support in IDEs.
        
        ### Example with Switch Case
        
        Another practical use case is using enums in switch statements for cleaner and more maintainable code:
        
        ```tsx
        function getTaskStatusMessage(status: TaskStatus): string {
          switch (status) {
            case TaskStatus.ToDo:
              return "Task is in the To-Do list.";
            case TaskStatus.InProgress:
              return "Task is currently in progress.";
            case TaskStatus.Completed:
              return "Task has been completed.";
            case TaskStatus.Archived:
              return "Task is archived.";
            default:
              return "Unknown status.";
          }
        }
        
        console.log(getTaskStatusMessage(TaskStatus.InProgress)); // Output: Task is currently in progress.
        
        ```
        
        Using enums in this way helps to ensure all possible cases are handled and improves the maintainability of your code.
        
    - Generics
        
        <aside>
        💡 Generics in TypeScript are a powerful feature that allow you to create reusable and flexible components, functions, and classes that can work with a variety of types while still maintaining type safety.
        
        </aside>
        
        Generics in TypeScript provide a way to create reusable and flexible components, classes, and functions that work with multiple types instead of a single type. They allow developers to write code that can operate on various data types while maintaining type safety.
        
        ### Generics Basics
        
        Here’s a basic example of a generic function in TypeScript:
        
        ```tsx
        function identity<T>(arg: T): T {
            return arg;
        }
        
        let output1 = identity<string>("Hello");
        let output2 = identity<number>(42);
        
        ```
        
        In this example, the `identity` function is generic and can accept arguments of any type, specified by `T`.
        
        ### Practical Use Case in Express
        
        In a practical Express application, you might use generics to handle different types of responses or requests in a type-safe manner. Let's consider a scenario where you have a generic function to handle responses from your Express routes.
        
        ### Step 1: Setting Up an Express Application
        
        First, ensure you have Express and TypeScript set up in your project. Install the necessary packages:
        
        ```
        npm install express @types/express typescript ts-node
        
        ```
        
        ### Step 2: Creating a Generic Response Handler
        
        Let's create a generic response handler function that can handle different types of data:
        
        ```tsx
        import express, { Request, Response } from 'express';
        
        const app = express();
        const port = 3000;
        
        interface ApiResponse<T> {
            status: string;
            data: T;
        }
        
        function sendResponse<T>(res: Response, data: T): void {
            const response: ApiResponse<T> = {
                status: 'success',
                data: data,
            };
            res.json(response);
        }
        
        app.get('/string', (req: Request, res: Response) => {
            sendResponse<string>(res, 'Hello, world!');
        });
        
        app.get('/number', (req: Request, res: Response) => {
            sendResponse<number>(res, 123);
        });
        
        app.get('/object', (req: Request, res: Response) => {
            const user = { id: 1, name: 'John Doe' };
            sendResponse<{ id: number, name: string }>(res, user);
        });
        
        app.listen(port, () => {
            console.log(`Server is running on <http://localhost>:${port}`);
        });
        
        ```
        
        ### Explanation
        
        1. **ApiResponse Interface**: We define a generic interface `ApiResponse` that has a `status` string and a generic `data` field.
        2. **sendResponse Function**: This function takes a `Response` object and data of type `T`. It constructs an `ApiResponse` object and sends it as a JSON response.
        3. **Express Routes**: We define a few routes (`/string`, `/number`, `/object`) to demonstrate how `sendResponse` can be used with different types of data.
        
        ### Running the Application
        
        1. Create a `tsconfig.json` to compile TypeScript files:
        
        ```json
        {
            "compilerOptions": {
                "target": "ES6",
                "module": "commonjs",
                "strict": true,
                "esModuleInterop": true
            }
        }
        
        ```
        
        1. Run the application using `ts-node`:
        
        ```
        npx ts-node app.ts
        
        ```
        
        Now, your server should be running on `http://localhost:3000`, and you can test the different routes to see the generic response handler in action.
        
        Generics provide the flexibility to write type-safe code that can handle various data types efficiently, making your codebase cleaner and more maintainable.
        
    
    <aside>
    💡 Note:Named imports in JavaScript/TypeScript allow you to bring specific exports from modules into your code using {} syntax, without involving destructuring. Named imports directly bind exported values to variables with matching names in the importing module, simplifying access to module features without unpacking or restructuring data behind the scenes.
    
    </aside>
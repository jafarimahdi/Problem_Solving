## TypeScript

### Basic Types

####   Type Annotation:
 learn how to use type annotation to define the static type for variables, function parameters, and return values.
> 
    - :number
    - :string
    - :Boolean
    - :string [ ]
    - object {
        name: string;
        age: number ;
    }
    - Function arguments & return types

        let greeting : (name: string) => string;

        greeting = function (name: string) {
          return `Hi ${name}`;
        };


####   Number:
 learn about the numeric types including floating-point numbers and big integers.
> 
    let counter: number = 0;
    let x: number = 100, 
    y: number = 200;

    let big: bigint = 9007199254740991n;

    
####   String : 
 show you how to use the string type in TypeScript.

> 
    let firstName: string = 'John';
    let title: string = "Web Developer";

    let description = `This TypeScript string can 
    span multiple 
    lines
    `;
####   Boolean: 
 guide you on the boolean type and how to use it effectively.

> 
    let pending: boolean;
    pending = true;
    // after a while
    // ..
    pending = false;


####  Object Type :
 introduce you to the object type that represents - non-primitive values.

[Document](https://www.typescripttutorial.net/typescript-tutorial/typescript-object-type)

> 
    let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
    } = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
    }; 

####  Array:
 show you how to use an array and its operations.

> 
    let skills: string[];

    skills[0] = "Problem Solving";
    skills[1] = "Programming";

    skills.push('Software Design');

####  Tuple : 
 A tuple works like an array with some additional considerations:

- The number of elements in the tuple is fixed.
- The types of elements are known, and need not be the same.
> 
        let color: [number, number, number] = [255, 0, 0];

        let skill: [string, number];
        skill = ['Programming', 5];

        The order of values in a tuple is important. If you change the order of values of the skill tuple to [5, "Programming"], you’ll get an error:

        let skill: [string, number];
        skill = [5, 'Programming'];

        error TS2322: Type 'string' is not assignable to type 'number'.

####  Enum :
- An enum is a group of named constant values. Enum stands for enumerated type. To define an enum, you follow these steps:

    - First, use the enum keyword followed by the name of the enum.
    - Then, define constant values for the enum.

> 
    enum Month { Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec };

    function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
    }

    console.log(isItSummer(Month.Jun)); // true

#### Any Type
The any type allows you to assign a value of any type to a variable:

> 
    // json may come from a third-party API
    const json = `{"latitude": 10.11, "longitude":12.12}`;

    // parse JSON to find location
    const currentLocation = JSON.parse(json);
    console.log(currentLocation);

    outPut: { latitude: 10.11, longitude: 12.12 }

####  Void type 
the void type as the return type of functions that do not return a value.

> 
    function log(message): void {
    console.log(messsage);
    }
####   Never Type 

- The never type contains no value.
- The never type represents the return type of a function that always throws an error or a function that contains an indefinite loop.
>
    function raiseError(message: string): never {
        throw new Error(message); 
    }

    function reject() { 
       return raiseError('Rejected');
    }

####  Union Types 
guide you on how to store a value of one or several types in a variable with the union type.


-   Type Aliases – show you how to define new names for types using type aliases.
-   String Literal Types – learn how to define a type that accepts only a specified string literal.
-   Type Inference – explain where and how TypeScript infers types of variables.

### Control Flow Statements

-   if…else – learn how to execute code based on a condition.
-   switch..case – show you how to use the switch statement to allow a number of possible execution paths.
-   for – create a loop that executes a specified number of times.
-   while – create a pretest loop that executes as long as a condition is true.
-   do…while – learn how to create a posttest loop that executes until a condition is false.
-   break – show you how to use the break statement to terminate a loop or a switch.
-   continue – learn how to skip to the end of a loop and continue the next iteration

### Functions

-   Functions – learn how to declare a function that uses type annotation in TypeScript.
-   Function types – guide you on how to use function types to define types for functions.
-   Optional Parameters – show you how to define functions with optional parameters.
-   Default Parameters – introduce you to default parameters.
-   Rest Parameters – use the rest parameters to handle an infinite number of arguments of a function.
-   Function overloadings – learn how to establish between parameter types and results of a function via function overloadings.

### Classes

-   Classes – learn how to construct a class in TypeScript.
-   Access Modifiers – introduce you to private, protected, and public access modifiers.
-   The readonly Modifier – learn how to use the readonly modifier to make class properties immutable.
-   Getters & Setters – show you how to use the getters and setters to control the access of the class properties.
-   Inheritance – learn how to use the inheritance to reuse the functionality of another class.
-   Static methods & properties – define static methods and variables shared by all instances of a class.
-   Abstract Classes – explain the abstract classes that define some common behaviors

### Interfaces

-   Interfaces – introduce you to interfaces and how to use them for creating contracts within your code.
-   Extending Interfaces – learn how to extend an interface to create a combination of interfaces.

### Advanced Types

-   Intersection Types – show you how to create a new type that has all features of existing types.
-   Type Guards – learn how to use type guards to narrow the type of a variable within a conditional block.
-   Type Casting – show you how to use type casting to convert a variable of one type to another.
-   Type Assertions – guide you on how to use a type assertion to tell the compiler to treat a value as a specified type.

### Generics

-   Introduction to TypeScript Generics – learn how to use TypeScript generics to develop generic functions.
-   Generic constraints – show you how to add constraints to the generic types.
-   Generic Classes – guide you on how to develop generic classes.
-   Generic Interfaces – walk you through the steps for creating generic interfaces.

### Modules

-   TypeScript Modules – introduce you to modules in TypeScript and how to use them in other modules.

### TypeScript in Node.js

-   Node.js TypeScript – how to set up a development environment for using TypeScript in the Node.js project.

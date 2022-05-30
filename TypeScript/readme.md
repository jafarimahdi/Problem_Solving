# TypeScript

# Basic Types

### Type Annotation:

learn how to use type annotation to define the static type for variables, function parameters, and return values.
```typescript
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
```
### Number:

learn about the numeric types including floating-point numbers and big integers.
```typescript
    let counter: number = 0;
    let x: number = 100,
    y: number = 200;

    let big: bigint = 9007199254740991n;
```
### String :

String type in TypeScript.
```typescript
    let firstName: string = 'John';
    let title: string = "Web Developer";

    let description = `This TypeScript string can
    span multiple
    lines
    `;
```
### Boolean:

Boolean type and how to use it effectively.

```typescript

    let pending: boolean;
    pending = true;
    // after a while
    // ..
    pending = false;
```
### Object Type :

object type that represents - non-primitive values.

[Document](https://www.typescripttutorial.net/typescript-tutorial/typescript-object-type)

```typescript

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
```
### Array:

Array and its operations.
```typescript
    let skills: string[];

    skills[0] = "Problem Solving";
    skills[1] = "Programming";

    skills.push('Software Design');
```
### Tuple :

A tuple works like an array with some additional considerations:

-   The number of elements in the tuple is fixed.
-   The types of elements are known, and need not be the same.
```typescript

        let color: [number, number, number] = [255, 0, 0];

        let skill: [string, number];
        skill = ['Programming', 5];

        The order of values in a tuple is important. If you change the order of values of the skill tuple to [5, "Programming"], you’ll get an error:

        let skill: [string, number];
        skill = [5, 'Programming'];

        error TS2322: Type 'string' is not assignable to type 'number'.
```
### Enum :

-   An enum is a group of named constant values. Enum stands for enumerated type. To define an enum, you follow these steps:

    -   First, use the enum keyword followed by the name of the enum.
    -   Then, define constant values for the enum.

```typescript

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
```
### Any Type

The any type allows you to assign a value of any type to a variable:

```typescript

    // json may come from a third-party API
    const json = `{"latitude": 10.11, "longitude":12.12}`;

    // parse JSON to find location
    const currentLocation = JSON.parse(json);
    console.log(currentLocation);

   // outPut: { latitude: 10.11, longitude: 12.12 }
```
### Void type

the void type as the return type of functions that do not return a value.
```Typescript
    function log(message): void {
    console.log(messsage);
    }
```
### Never Type

-   The never type contains no value.
-   The never type represents the return type of a function that always throws an error or a function that contains an indefinite loop.
```Typescript

        function raiseError(message: string): never {
            throw new Error(message);
        }

        function reject() {
           return raiseError('Rejected');
        }
```
### Union Types

-   The union type allows you to combine multiple types into one type.

```Typescript

    let result: number | string;
    result = 10; // OK
    result = 'Hi'; // also OK
    result = false; // a boolean value, not OK


    function add(a: number | string, b: number | string) {
        if (typeof a === 'number' && typeof b === 'number') {
         return a + b;
        }
        if (typeof a === 'string' && typeof b === 'string') {
         return a.concat(b);
        }
     throw new Error('Parameters must be numbers or strings');
    }

```

### Type Aliases

-   aliases allow you to create a new name for an existing type

### String Literal Types

-   define a type that accepts only a specified string literal.
-   The string literal types allow you to define a type that accepts only one specified string literal.

```typescript

   // The following defines a string literal type that accepts a literal string 'click':

        let click: 'click';

  //  The click is a string literal type that accepts only the string literal 'click'. If you assign the literal string click to the click, it will be valid:

        click = 'click'; // valid

   // However, when you assign another string literal to the click, the TypeScript compiler will issue an error. For example:

        click = 'dblclick'; // compiler error

    Error:
    Type '"dblclick"' is not assignable to type '"click"'.
```
### Type Inference

- Type inference describes where and how TypeScript infers types when you don’t explicitly annotate them..
>
    Type inference occurs when you initialize variables, set parameter default values, and determine function return types.

    TypeScript uses the best common type algorithm to select the best candidate types that are compatible with all variables.

    TypeScript also uses contextual typing to infer types of variables based on the locations of the variables.


# Control Flow Statements

###  if…else  
- Use if statement to execute code based on a condition.
- Use the else branch if you want to execute code when the condition is false. It’s good practice to use the ternary operator ?: instead of a simple if…else statement.
- Use if else if...else statement to execute code based on multiple conditions.

###  switch..case 
- switch statement to allow a number of possible execution paths.

###  for 
- a loop that executes a specified number of times.

###  while 
- a pretest loop that executes as long as a condition is true.

###  do…while 
- create a posttest loop that executes until a condition is false.

###  break 
- show you how to use the break statement to terminate a loop or a switch.

###  continue 
- skip to the end of a loop and continue the next iteration


#  Functions

###  Functions 
- declare a function that uses type annotation in TypeScript.

``` Typescript 
    function name(parameter: type, parameter:type,...): returnType {
   // do something
    }

// If a function does not return a value, you can use the void type as the return type. The void keyword indicates that the function doesn’t return any value.
    function echo(message: string): void {
     console.log(message.toUpperCase());
    }

```

###  Function types 
-  function type has two parts: parameters and return type. When declaring a function type, you need to specify both parts

```typescript
  //  (parameter: type, parameter:type,...) => type

    let add: (x: number, y: number) => number;

    add = function (x: number, y: number) {
    return x + y;
    };

//  you can declare a variable and assign a function to a variable like this:

    let add: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };

    // Inferring function types

    let add = function (a: number, b: number):number {
        return a + b;
    };

    let result = add(4,7);
```

###  Optional Parameters 
- Use the parameter?: type syntax to make a parameter optional.
- the optional parameter must be always last parameter


```typescript
    function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
// you can Use the expression typeof(parameter) !== 'undefined' to check if the parameter has been initialized.
```

###  Default Parameters 
- Use default parameter syntax parameter:=defaultValue if you want to set the default initialized value for the parameter.
- Default parameters are optional.
- To use the default initialized value of a parameter, you omit the argument when calling the function or pass the undefined into the function.

```typescript
function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95

// Notice that you cannot include default parameters in function type definitions. The following code will result in an error:

let promotion: (price: number, discount: number = 0.05) => number;

// error TS2371: A parameter initializer is only allowed in a function or constructor implementation.
```

###  Rest Parameters 
- A rest parameter allows you a function to accept zero or more arguments of the specified type. In TypeScript, rest parameters follow these rules:

    - A function has only one rest parameter.
    - The rest parameter appears last in the parameter list.
    - The type of the rest parameter is an array type.

```typescript
function fn(...rest: type[]) {
   //...
}


function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
```
###  Function overloadings 
- how to establish between parameter types and results of a function via function overloadings.

# Classes

-   Classes – learn how to construct a class in TypeScript.
-   Access Modifiers – introduce you to private, protected, and public access modifiers.
-   The readonly Modifier – learn how to use the readonly modifier to make class properties immutable.
-   Getters & Setters – show you how to use the getters and setters to control the access of the class properties.
-   Inheritance – learn how to use the inheritance to reuse the functionality of another class.
-   Static methods & properties – define static methods and variables shared by all instances of a class.
-   Abstract Classes – explain the abstract classes that define some common behaviors

# Interfaces

-   Interfaces – introduce you to interfaces and how to use them for creating contracts within your code.
-   Extending Interfaces – learn how to extend an interface to create a combination of interfaces.

# Advanced Types

-   Intersection Types – show you how to create a new type that has all features of existing types.
-   Type Guards – learn how to use type guards to narrow the type of a variable within a conditional block.
-   Type Casting – show you how to use type casting to convert a variable of one type to another.
-   Type Assertions – guide you on how to use a type assertion to tell the compiler to treat a value as a specified type.

# Generics

-   Introduction to TypeScript Generics – learn how to use TypeScript generics to develop generic functions.
-   Generic constraints – show you how to add constraints to the generic types.
-   Generic Classes – guide you on how to develop generic classes.
-   Generic Interfaces – walk you through the steps for creating generic interfaces.

# Modules

-   TypeScript Modules – introduce you to modules in TypeScript and how to use them in other modules.

# TypeScript in Node.js

-   Node.js TypeScript – how to set up a development environment for using TypeScript in the Node.js project.

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

// If a function does not return a value, you can use the void type as the return type. 
//The void keyword indicates that the function doesn’t return any value.
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

// Notice that you cannot include default parameters in function type definitions. 
//The following code will result in an error:

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
### [Function Overloadings](https://www.typescripttutorial.net/typescript-tutorial/typescript-function-overloadings/)

- TypeScript function overloadings allow you to describe the relationship between parameter types and results of a function.


```typescript
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
   return a + b;
}
//When a function is a property of a class, it is called a method. TypeScript also supports method overloading.

class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}

//The count() function can return a number or an array depending on the number of argument 
//that you pass into it:

let counter = new Counter();

console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array

```
# Classes

-   Classes 
    - Use `class` keyword to define a class in TypeScript.
    - TypeScript leverages the ES6 class syntax and adds type annotations to make the class more robust. 

-   [Access Modifiers ](https://www.typescripttutorial.net/typescript-tutorial/typescript-access-modifiers/)for properties 

    - Access modifiers change the visibility of the properties and methods of a class. TypeScript provides three access modifiers:
        - `Private:` The private modifier allows access within the same class.
        - `Protected:` The protected modifier allows access within the same class and subclasses.
        - `Public:` The public modifier allows access from any location.
        -  `ReadOnly:` readonly modifier makes class properties immutable.
```typescript
        // private 
class Person {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }
}
// The following attempts to access the ssn property outside the class:

let person = new Person('153-07-3130', 'John', 'Doe');
console.log(person.ssn); // compile error

```

```typescript
            // Public 
// The public modifier allows class properties and methods to be accessible from all locations. 
//If you don’t specify any access modifier for properties and methods, they will take the public modifier by default.

class Person {
    // ...
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }
    // ...
}
```
```typescript
        //    Protected
// The ssn property now is protected. It will be accessible within the Person class and in any class 
// that inherits from the Person class. You’ll learn more about inheritance here.

class Person {

    protected ssn: string;
    
    // other code
}

// To make the code shorter, TypeScript allows you to both declare properties and initialize them in the constructor like this:

class Person {
    constructor(protected ssn: string, private firstName: string, private lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
```
```typescript
            // ReadOnly
// the readonly access modifier to mark a class property as immutable.
// A readonly property must be initialized as a part of the declaration or in the constructor of the same class.

class Person {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}
// In this example, the birthDate property is a readonly property 
// that is initialized in the constructor of the Person class.

// The following attempts to reassign the birthDate property that results in an error

let person = new Person(new Date(1990, 12, 25));
person.birthDate = new Date(1991, 12, 25); // Compile error

```

-   Getters & Setters 
    - TypeScript` getters/setters `to control the access properties of a class.
    - The getter/setters are also known as accessors/mutators.
```typescript
class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

 
    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}
let person = new Person();
person.age = 10;

 // invalid input
person.age = 0;
// Error: The age is invalid
```


-   Inheritance 
    - the `extends` keyword to allow a class to inherit from another class.
    - `super()` in the constructor of the child class to call the constructor of the parent class.
    - Method Overriding: use the `super.methodInParentClass()` syntax to invoke the methodInParentClass() in the method of the child class
```typescript
class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

            // child class
class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {

        super(firstName, lastName);
    }

        // method overRiding must include super
    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}

let employee = new Employee('John', 'Doe', 'Web Developer');
console.log(employee.describe());

// OutPut:  This is John Doe.I'm a Web Developer.
```


-   [Static Properties & Methods ](https://www.typescripttutorial.net/typescript-tutorial/typescript-static-methods-and-properties/)

    - Static properties and methods are shared by all instances of a class.
    - Use the static keyword before a property or a method to make it static.
        - `Static Properties `
        - ` Private Static Properties`
        - ` Static Methods`

-   [Abstract Classes](https://www.typescripttutorial.net/typescript-tutorial/typescript-abstract-classes/)
    - Abstract classes cannot be instantiated.(you can't make object directly from this class)
    - An Abstract class has at least one abstract method.
    - To use an abstract class, you need to `inherit` it and provide the implementation for the abstract methods.


# Interfaces

-   [Interfaces](https://www.typescripttutorial.net/typescript-tutorial/typescript-interface/)
    - how to use Interfaces for creating contracts within your code.
        - `File` : you can add object if it have the same variable the same interface has provided 
            - optional properties `?`
            - readOnly properties: `readOnly`
        - `Function`
        - `Class`

```typescript
        // File 
interface Person {
    firstName: string;
    lastName: string;
}
        
function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(john));

                -----------------------------

        // Optional properties
interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}

        // how to use 
function getFullName(person: Person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}
        ------------------------
            // ReadOnly 

interface Person {
    readonly ssn: string;
    firstName: string;
    lastName: string;    
}

let person: Person;
person = {
    ssn: '171-28-0926',
    firstName: 'John',
    lastName: 'Doe'
}


person.ssn = '171-28-0000';
//  error TS2540: Cannot assign to 'ssn' because it is a read-only property.

```
```typescript
        // Function 
interface StringFormat {
    (str: string, isUpper: boolean): string
}

let format: StringFormat;

format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('hi', true));

// output
HI
```

-   Extending Interfaces 
    - how to extend an interface to create a combination of interfaces.

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

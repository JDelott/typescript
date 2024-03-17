// interface User{
//     name: string;
//     id: number;
// }


// class UserAccount{
//     name: string;
//     id: number;

//     constructor(name: string, id:number){
//         this.name = name;
//         this.id
//     }
// }

// const user: User = new UserAccount("Jacob",4)

// // const user: User = {
// //     name: "Jacob",
// //     id: 4
// // }



// // UNIONS TYPES 

// type MyBool = true | false

// type WindowStates = "open" | "closed" | "minimized";
// type LockStates = "locked" | "unlocked";
// type PositiveNumbersUnderTen = 1 | 3 | 5 |7 | 9;

// function getLength(obj: string | string[]) {
//     return obj.length;
// }



// // Typeof


// function wrapInArray(obj: string | string[]) {
//     if (typeof obj === "string") {
//         return [obj];
//     }
//     return obj;
// } 

// // Generics


// type  StringArray = Array<string>;
// type NumberArray = Array<number>;
// type ObjectWithNameArray = Array<{name: string}>;


// interface Backpack<Type>{
//     add:(obj: Type) => void;
//     get: () => Type;
// }

// declare const backpack: Backpack<string>
// const object = backpack.get();
// backpack.add("23");


// interface Point {
//     x: number;
//     y: number;

// }

// function logPoint(p:Point) {
//     console.log(`${p.x},${p.y}`);
// }

// const point = {x:12, y:26};
// logPoint(point);


// class VirtualPoint {
//     x:number;
//     y:number;

//     constructor(x:number, y:number){
//         this.x = x;
//         this.y = y;
//     }
// }

// const newVPoint = new VirtualPoint(13,56);
// logPoint(newVPoint);


// const message = "this is a message";
// message.toLowerCase();

// message();

// console.log("hello world!");
// "use strict";
// function greet(person, date) {
//     console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
// }
// greet("Maddison", new Date());

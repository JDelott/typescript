// any

// let obj: any = {x:0}


// obj.foo();
// obj();
// obj.bar() == 100;
// obj = "hello";
// const n: number = obj;


// functions:

// function greet(greetedName:string) {
//     console.log("Hello, " + greetedName.toLocaleUpperCase() + "!!" );
// }

// greet("jacob");


// async function getFavoriteNumber(): Promise<number> {
//     return 26;
// }


// Anonymous functions

// const names = ["Alice, Bob, Eve"];

// names.forEach(function (s) {
//     console.log(s.toLocaleUpperCase())
// })

// names.forEach((s) => {
//     console.log(s.toLocaleUpperCase());
// })


// function printCoord(pt: {x: number; y: number}) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordingate's y value is" + pt.y);
// }

// printCoord({x:3, y:7})


function printName(obj: {first: string; last?: string}) {
    console.log(obj.last?.toUpperCase())
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase())
    }
}


printName({first:"BOB"});
printName({first:"Alice", last:"Allison"});

interface User{
    name: string;
    id: number;
}


class UserAccount{
    name: string;
    id: number;

    constructor(name: string, id:number){
        this.name = name;
        this.id
    }
}

const user: User = new UserAccount("Jacob",4)

// const user: User = {
//     name: "Jacob",
//     id: 4
// }



// UNIONS TYPES 

type MyBool = true | false

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveNumbersUnderTen = 1 | 3 | 5 |7 | 9;

function getLength(obj: string | string[]) {
    return obj.length;
}



// Typeof


function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
} 

// Generics


type  StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{name: string}>;


interface Backpack<Type>{
    add:(obj: Type) => void;
    get: () => Type;
}

declare const backpack: Backpack<string>
const object = backpack.get();
backpack.add("23");

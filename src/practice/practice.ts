
// npm i -D typescript
// npx tsc --init

// import "./type"

function greet ( name: string ): string
{
    return `Hello ${ name }!`
}
const userName: string = "Ritam";
// console.log( greet( userName ) );




let drink = "water";

let cups = 10

let chaiFlavour: string = "massala Chai"

// console.log( drink );
// console.log( cups );
// console.log( chaiFlavour );

// unions

let subs: number | string = "299"

let apiRequests: 'pending' | 'success' | 'error' = 'pending'

apiRequests = 'success'

let seat: 'aile' | 'window' | 'middle' = 'aile'

seat = 'middle'

const orders: string[] = [ '12', '34', '23', '56' ]

let currentOrder: string | undefined;

for ( const element of orders )
{
    if ( element === "12" )
    {
        currentOrder = element
        break;
    }
}
// console.log( currentOrder );


function getChai ( kind: string | number )
{
    if ( typeof kind === "string" )
    {
        console.log( `You ordered ${ kind } chai` )
    }
    else
    {
        console.log( `You ordered chai ${ kind }` )
    }
}

// getChai("massala")
// getChai( 1 )

function serveChai ( msg?: string )
{
    if ( msg )
    {
        console.log( "Serving ", msg );

    } else
    {
        console.log( "serving default" );

    }
}

// serveChai()
// serveChai("Hot Chai")

class Student
{
    display ()
    {
        return `Hello Students`
    }
}

class Teacher
{
    display ()
    {
        return `Hello Teachers`
    }
}

function greetPerson ( person: Student | Teacher )
{
    if ( person instanceof Student )
    {
        console.log( person.display() );

    } else
    {
        console.log( person.display() );

    }
}

// greetPerson(new Student())
// greetPerson(new Teacher())


type ordered = {
    id: number,
    type: string
}

function isOrder ( obj: any ): obj is ordered
{
    return (
        typeof obj === "object" &&
        obj !== null &&
        obj.type === "string" &&
        obj.id === "number"
    )
}

function served ( item: ordered )
{
    if ( isOrder( item ) )
    {
        console.log( `Serving ${ item.type } ${ item.id }` );

    } else
    {
        console.log( "serving default" );
    }
}
const order: ordered = {
    id: 1,
    type: "chai"
};

// served( order )
// served( { id: 2, type: "chai" } )



function isString ( arr: unknown ): arr is string[]
{
    return (
        Array.isArray( arr ) &&
        arr.every( item => typeof item === "string" )
    )

}

const arr = [ "a", "b", "c" ]

if ( isString( arr ) )
{
    // console.log(arr);

} else
{
    // console.log("Not a string array");
}


let response: any = "32"

let len: number = ( response as string ).length


type Book = {
    title: string,
    pages: number
}

let bookString = '{"title": "Harry Potter", "pages": 400}'

let bookObject = JSON.parse( bookString ) as Book

// console.log( bookObject.pages );


type params = {
    a: number,
    b: number
}

// function add({a,b}:params) {
//     return a + b
// }

// console.log( add({ a: 1, b: 2 }) );

// class add implements params {
//     a = 100
//     b = 200

// }

// Type Assertion

let value: any = "100"
let str = value as string

const add = ( a: number, b: number ): void =>
{
    console.log( a + b );

};

// add( 1, 2 )

//never use
// function infinate(item:string):never {
//     while(true) {
//         console.log(item);

//     }

// }

//unknown type

let data: unknown = 100.63563;
data = "Ritam"
if ( typeof data === "number" )
{
    // console.log( data.toFixed( 2 ) );

}
if ( typeof data === "string" )
{
    // console.log( data.toUpperCase() );

}

type Role = "user" | "admin" | "super-admin" | "guest" | "moderator"

function getRole ( role: Role )
{
    switch ( role )
    {
        case "admin":
            return "admin dashboard"

        case "guest":
            return "guest dashboard"

        case "super-admin":
            return "super-admin dashboard";
            break;
        case "user":
            return "user dashboard";
            break;
        case "moderator":
            return "moderator dashboard";
        default:
            const checkRole: never = role
            return checkRole
    }
}

// console.log( getRole( "moderator" ) );


interface Add
{
    ( a: number, b: number ): number
}

const adition: Add = ( a, b ) => a + b

// console.log( adition( 8, 9 ) );


// type hello = {
//     name: string,
//     age: number
// }
interface hello
{
    name: string,
    age: number
}
class Person implements hello
{
    name = "Ritam";
    age = 20
}

interface role
{
    union: "admin" | "user" | "guest"
}


class Login implements role
{
    union: "admin" | "user" | "guest" = "guest"
}


interface User
{
    name: string,
    bio?: string,
    readonly password: string
}

// const u1: User = {
//     name: "User name",
//     bio: "",
//     password: "2127861278"
// }
// u1.password="gdy"
// console.log( u1.bio );




const object: {
    name: string,
    age: number
} = {
    name: "userName",
    age: 20
}

// console.log( object );


import crypto from "node:crypto"
import os from "node:os"

// console.log( crypto.randomBytes( 32 ).toString( 'hex' ) );

// console.log(os.platform());

function getUserData ( type: {
    name: string,
    age: number,
    city: string,
    state?: string
} ): void
{
    if ( typeof type === "object" )
    {
        console.log( `user name ${ type.name }` );
        console.log( `user age ${ type.age }` );
        console.log( `user city ${ type.city }` );
        if ( !type.state )
        {
            return
        }
        console.log( `user state ${ type.state }` );
    } else
    {
        console.log( 'not an object' );

    }
}

const user = {
    name: "Ritam",
    age: 20,
    city: "faridabad",
    state: "Delhi"
}

// getUserData( user )

const array: number[] = [ 1, 2, 3, 4, 56, 7 ]

const str1: string[] = [ "hello" ]

const str2: ( string | number )[] = [ "hello", 12 ]

const str3: ( object | string )[] = [ "hello", { name: "Ritam" } ]

// console.log(str3);

enum userRole
{
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

// console.log( userRole.ADMIN );

// OOP concepts in Typescript



class User
{
    private userName: string
    private age: number
    private city: string
    constructor ( userName: string, age: number, city: string )
    {
        this.userName = userName
        this.age = age
        this.city = city

    }
    display ()
    {
        console.log( this.userName );
        console.log( this.age );
        console.log( this.city );
        console.log( this );

    }
}

const user1 = new User( "Ritam", 20, "Faridabad" )
// console.log(user1);
user1.display()
// user1.display()



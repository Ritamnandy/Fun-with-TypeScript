
// npm i -D typescript
// npx tsc --init


function greet ( name: string ): string
{
    return `Hello ${ name }!`
}
const userName: string = "Ritam";
console.log( greet( userName ) );




let drink = "water";

let cups = 10

let chaiFlavour: string = "massala Chai"

console.log( drink );
console.log( cups );
console.log( chaiFlavour );

// unions

let subs: number | string = "299"

let apiRequests: 'pending' | 'success' | 'error' = 'pending'

apiRequests = 'success'

let seat: 'aile' | 'window' | 'middle' = 'aile'

seat = 'middle'

const orders:string[] = [ '12', '34', '23', '56' ]

let currentOrder: string | undefined;

for ( const element of orders )
{
    if ( element === "12" )
    {
        currentOrder = element
        break;
    }
}
console.log( currentOrder );




// console.log( "Hello World!!" );

interface Chai
{
    flavor: string,
    price: number,
    milk?: boolean
}


const masala: Chai = {
    flavor: "masala",
    price: 100
}

// console.log( masala );

interface Shop
{
    name: string,
    chai: Chai,
    readonly id: number
}


const s: Shop = {
    name: "Chai Shop",
    chai: {
        flavor: "milk Chai",
        price: 100
    },
    id: 1
}
s.chai.milk = true;
// s.id=10  // readonly property cannot be changed in typescript

interface calculator
{
    ( a: number, b: number ): number
}

const cal: calculator = ( a, b ) =>
{
    return a + b
}
// console.log( cal( 10, 200 ) );

interface fun
{
    start (): void,
    stop (): void
}

const call: fun = {
    start ()
    {
        console.log( 'fun start' );

    },
    stop ()
    {
        console.log( 'fun stop' );

    },
}
// call.start()
// call.stop()

/// Generics

function wrapInArray<T> ( item: T ): T
{
    return item
}

wrapInArray( 2 )
wrapInArray( "hello" )

function pair<A, B> ( a: A, b: B ): [ A, B ]
{
    return [ a, b ]
}

pair( "masala", 20 )

pair( "masala", { price: 20, shop: "chai" } )


interface Box<Y>
{
    content: Y
}

const b: Box<number> = { content: 20 }




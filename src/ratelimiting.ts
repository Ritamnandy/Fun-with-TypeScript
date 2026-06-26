

import type { NextFunction, Request, Response } from "express"

import express from "express"



const app = express()

// 20,5
class TokenBucket
{
    private capacity: number
    private token: number
    private refillrate: number
    private lastrefillTime: number
    constructor ( size: number, Refillrate: number )
    {
        this.token = size
        this.capacity = size
        this.lastrefillTime = Date.now()
        this.refillrate = Refillrate
    }
    private refill ()
    {
        const now = Date.now()
        const elapsed = now - this.lastrefillTime
        const addToken = Math.floor( ( elapsed / 5000 ) * this.refillrate )
        console.log( "add token ", addToken );

        if ( addToken > 0 )
        {
            this.token = Math.min( this.token + addToken, this.capacity )
            this.lastrefillTime = now
            console.log( "current token", this.token );

        }
    }
    request (): boolean
    {
        this.refill()
        if ( this.token > 0 )
        {
            this.token--
            return true
        }
        return false
    }
    totalToken (): number
    {
        return this.token
    }
}


const rateLimiter = () =>
{
    const bucket = new Map<string, TokenBucket>()
    return ( req: Request, res: Response, next: NextFunction ) =>
    {
        const ip = req.ip ?? "undifined"
        if ( !bucket.has( ip ) )
        {
            bucket.set( ip, new TokenBucket( 20, 5 ) )
        }
        const tokenBucket = bucket.get( ip )!
        console.log( "ip :-", ip );

        console.log( "bucket maps value", tokenBucket );

        if ( tokenBucket.request() )
        {
            next()
        }
        else
        {
            res.status( 429 ).send( "Too many requests" )
        }
    }
}

app.use( rateLimiter() )

app.get( "/", ( req, res ) =>
{
    res.send( "hello world" )
} )

app.listen( 3000, () =>
{
    console.log( "server is running on port 3000" );
} )



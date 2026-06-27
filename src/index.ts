import type { Request, Response, NextFunction } from "express"
import express from "express"
import { TokenBucket } from "./ratelimit/token_bucket.js";

const buckets = new Map<string, TokenBucket>();

const ratelimiter = async ( req: Request, res: Response, next: NextFunction ) =>
{
    const ip: string = req.ip || "unknown";
    const limit = 20;
    let bucket = buckets.get( ip );

    
    if ( !bucket )
    {
        bucket = new TokenBucket( 20, 1 );
        buckets.set( ip, bucket );
    }
    const allowed = bucket.request();

    res.set( {
        "X-RateLimit-Limit": "20",
        "X-RateLimit-Remaining": bucket.tokenleft().toString(),
    } );
    if ( allowed )
    {
        console.log( 'token left:- ', bucket.tokenleft() );
        
        next();
    } else
    {
        res.status( 429 ).json( "Too Many Requests" );
    }
}

const app = express()

app.use( ratelimiter )

app.get( "/", ( req: Request, res: Response ) =>
{
    res.json( "Hello World!" )
} )
app.listen( 3000, () =>
{
    console.log('Server started at http://localhost:3000');
    
} )
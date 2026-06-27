
// token bucket algorithm implementation in typescript


class TokenBucket
{
    private capacity: number;
    private refillRate: number;
    private tokens: number;
    private lastRefillTime: number;
    constructor ( capacity: number, refillRate: number )
    {
        this.capacity = capacity;
        this.refillRate = refillRate;
        this.tokens = capacity;
        this.lastRefillTime = Date.now();
    }
    private refillToken (): void
    {
        const nowTime: number = Date.now()
        if ( nowTime <= this.lastRefillTime )
        {
            return
        }
        const elapsedTime = ( nowTime - this.lastRefillTime ) / 1000;
        const tokenAdd = Math.floor( elapsedTime * this.refillRate );

        //check bucket full or not
        if ( tokenAdd <= 0 || this.tokens >= this.capacity )
        {
            this.lastRefillTime = nowTime
            return
        }
        this.tokens = Math.min( this.capacity, this.tokens + tokenAdd )
        this.lastRefillTime = nowTime
    }
    request (): boolean
    {
        this.refillToken()
        if ( this.tokens > 0 )
        {
            this.tokens--;
            return true
        }
        return false
    }
    tokenleft ():number
    {
        return this.tokens

    }
}

export { TokenBucket }
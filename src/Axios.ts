
import axios, { type AxiosResponse } from "axios";


interface Todo
{
    userId: number
    id: number,
    title: string,
    completed: boolean,
}

const fetchData = async ( url: string ) =>
{
    try
    {
        const response: AxiosResponse<Todo> = await axios.get( url )
        console.log( "todo from axios:- ", response.data );

    } catch ( error )
    {
        if ( error instanceof Error )
        {
            console.log( error.message );
        } else
        {
            console.log( "Error", error );
        }
    }
}

fetchData( "https://jsonplaceholder.typicode.com/todos/1" )


// using fetch instead of axios


const fetchData2 = async ( url: string ) =>
{
    try
    {
        const response = await fetch( url )
        if ( !response.ok )
        {
            throw new Error( "Network response was not ok:- " + response.status )
        }
        const data: Todo = await response.json()
        console.log( "todo from fetch :- ", data );

    } catch ( error )
    {
        if ( error instanceof Error )
        {
            console.log( error.message );
        } else
        {
            console.log( "Error", error );
        }
    }
}

fetchData2( "https://jsonplaceholder.typicode.com/todos/5" )

import "./type.js"
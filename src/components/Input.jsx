import { useState } from 'react'
import {Article} from './Article'

export function Input(){


    const [result,setResult]=useState([])
    const [search, setSearch]=useState('')
    

    const handleChange=(event)=>{
        setSearch(event.target.value)

        fetch("https://api.tvmaze.com/search/shows?q="+search)
        .then((response)=>response.json())
        .then (data => setResult(data))
    }
    

    return(
        <>
            <input onChange={handleChange}/>
            {result.map((article,index)=>
                <Article
                    key={index}
                    article={article}/>
            )}
            
        </>
            
    )  
}
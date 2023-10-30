import {useParams} from "react-router-dom"
import{useEffect, useState} from 'react'
import { Article } from "../components/Article"

export function Show(){
    const params = useParams()
    const [results, setResults] = useState()
    useEffect(()=>{
        fetch("https://api.tvmaze.com/shows/"+params.id+"?embed=cast")
        .then((response) => response.json())
        .then(data => setResults(data))

    },[])


    return (
        <>
            
                <Article
                    
                    results={results}/>
            
        </>

    )
    
    
}
import {useParams} from "react-router-dom"
import{useEffect, useState} from 'react'
import { Article } from "../components/Article"
import {Cast} from "../components/Cast"
import { Link } from 'react-router-dom'

export function Show(){
    const { id } = useParams()
    const [result, setResult] = useState([])
    useEffect(()=>{
        fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
        .then((response) => response.json())
        .then(data => setResult(data)) 
        .catch((error) => {
            console.error('Erreur lors de la récupération des données:', error);
          });  
    },[])
    
    

    return (
        <>
            <Link className="btn btn-primary m-2" to="/">Retour à l'accueil</Link>
            <Article 
                article={result}
            />
        
             <Cast   
                article={result}
            /> 
        
            
        </>

    )
    
    
}
import { Link } from 'react-router-dom';
import { Actor } from '../components/Actor.jsx';
import {useParams} from "react-router-dom"
import{useEffect, useState} from 'react'
import { FilmsByActor } from '../components/FilmsByActor.jsx';

export function About(){
    const { id } = useParams()
    const [results, setResults] = useState([])
    useEffect(()=>{
        fetch(`https://api.tvmaze.com/people/${id}/castcredits?embed=show`)
        .then((response) => response.json())
        .then(data => setResults(data)) 
        .catch((error) => {
            console.error('Erreur lors de la récupération des données:', error);
          });  
    },[id])

    const [actor,setActor]=useState([])
    
    useEffect(()=>{
        fetch(`https://api.tvmaze.com/people/${id}`)
        .then((response) => response.json())
        .then(data => setActor(data))
        console.log("coucou")
    },[id])
   console.log(actor)
    return(
        <>
            <Link className="btn btn-primary m-2" to="/">Retour à l'accueil</Link>
            <Actor
                actor={actor}
            /> 
            {results.map((result,index)=>
                <FilmsByActor
                    key={index}
                    article={result}
                />
            )}
            
        </>
       
    )
}
import { Link } from 'react-router-dom';

export function Cast(props){
    
    return(
        <>
            {props.article._embedded?.cast.map((person)=>
                <div className="m-5 card" style={{width:"18rem"}}> 
                    <img src={person.person.image?.medium} className="card-img-top p-0" alt={person.person.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{person.person.name}</h5>
                        <p className="card-text"> Birthday{person.person.birthday}</p>
                        {person.person.deathday && <p>Deathday {person.person.deathday}</p>}
                        <Link to={`/about/${person.person.id}`}>Actor's films</Link>
                    </div>
                </div>
            )}
        
        </>


    )
}
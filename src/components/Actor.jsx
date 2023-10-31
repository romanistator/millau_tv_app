

export function Actor(props){
    
    return(
        <>
            <div className="m-5 card" >
                <img src={props.actor.image?.original} className="card-img-top p-0" alt={props.actor.name}/>
                <div className="card-body">
                    <h5 className="card-title">{props.actor.name}</h5>
                    <p className="card-text">Born in {props.actor.birthday}</p>
                    {props.actor.deathday && <p>Deathday {props.actor.deathday}</p>}
                </div>
            </div>  
       
        
        </>
        
            
    )

}
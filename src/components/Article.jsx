import DOMPurify from 'dompurify';

export function Article(props){

    return(     
        <div className="m-5 card">
            <img src={props.article.image?.original} className="card-img-top" alt={props.article.name}/>
            <div className="card-body">
                <h5 className="card-title">{props.article.name}</h5>
                <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.article.summary)}} className="card-text"></p>
            </div>
        </div>
    )
}
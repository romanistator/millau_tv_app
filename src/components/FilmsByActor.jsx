import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';

export function FilmsByActor(props){
    const articleId = props.article._embedded.show.id
    return(
        <>
        <article className="col-3 m-5 card cardList shadow">
            <div className="">
                <img src={props.article._embedded.show.image?.medium} className="card-image-top p-0" alt={props.article._embedded.show.name} />
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.article._embedded.show.name}</h5>
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Summary</button>
                        <Link className="btn btn-primary m-2" to={`/show/${articleId}`}>Show</Link>
                    </div>
                </div>
            </div>
        </article>
        

        <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasBottomLabel">{props.article._embedded.show.name}</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body small">
            <h4 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.article._embedded.show.summary)}}></h4>
          </div>
        </div>
    
    </>
    )
}
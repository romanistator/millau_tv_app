import DOMPurify from 'dompurify';

export function Article(props){
    return(
        <>
            <article className="col-3 m-5 card shadow">
                <div className="">
                    <img src={props.article.show.image?.medium} className="card-image-top p-0" alt={props.article.name} />
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.article.show.name}</h5>
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Summary</button>
                        </div>
                    </div>
                </div>
            </article>
            

            <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasBottomLabel">{props.article.show.name}</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body small">
                <h4 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.article.show.summary)}}></h4>
              </div>
            </div>
        
        </>

        
    )
}
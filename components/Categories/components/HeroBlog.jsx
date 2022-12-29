
function HeroBlog({url, alt, title, desc}) {
    return (
        <>
            <section className="section" id="explore">
                <div className="container" style={{"marginTop":"100px"}}>
                    <div className="row">
                        <div>
                            <div className="card mb-3">
                                <img src={url} style={{"height":"500px", "objectFit":"cover"}} className="card-img-top" alt={alt} />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{desc}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default HeroBlog

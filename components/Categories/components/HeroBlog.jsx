import Link from 'next/router'

function HeroBlog({ url, alt, title, desc, page }) {
    return (
        <>
            {/* <section className="section heroblog">
                <div className="container" style={{"marginTop":"100px"}}>
                    <div className="row">
                            <div className="card mb-3">
                                <img src={url} style={{"height":"500px", "objectFit":"cover"}} className="card-img-top" alt={alt} />
                                <a href={`/categories/${page}/something`}>Checkout this blog</a>
                                <div className="card-body">
                                    <h5 className="card-title blog-title">{title}</h5>
                                    <p className="card-text blog-desc">{desc}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                    </div>
                </div>
            </section> */}
            <div class="card mb-3">
                <a href={`/categories/${page}/something`}>
                    <img
                        src={url}
                        class="card-img-top"
                        alt={alt}
                    />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">
                            {desc}
                        </p>
                        <p class="card-text">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </a>
            </div>


        </>
    )
}

export default HeroBlog

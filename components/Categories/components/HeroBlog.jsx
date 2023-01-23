import Link from 'next/router'

function HeroBlog({ url, alt, title, desc, page, slug }) {
    return (
        <>
            <div className="card mb-3">
                <a href={`/categories/${page}/${slug}`}>
                    <img
                        src={`http://localhost:1337${url}`}
                        className="card-img-top"
                        alt={alt}
                    />
                    <div className="card-body">
                        <h5 className="card-title text-dark blog-title">{title}</h5>
                        <p className="card-text blog-desc">
                            {desc}
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </a>
            </div>


        </>
    )
}

export default HeroBlog

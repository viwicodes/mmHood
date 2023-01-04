import Link from 'next/router'

function HeroBlog({ url, alt, title, desc, page }) {
    return (
        <>
            <div class="card mb-3">
                <a href={`/categories/${page}/something`}>
                    <img
                        src={url}
                        class="card-img-top"
                        alt={alt}
                    />
                    <div class="card-body">
                        <h5 class="card-title text-dark blog-title">{title}</h5>
                        <p class="card-text blog-desc">
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

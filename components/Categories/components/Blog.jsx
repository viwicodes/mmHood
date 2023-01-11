import Link from "next/link"
function Blog() {
    return (
        <>
            {/* Page Content */}
            <div style={{ "marginTop": "200px" }} className="container">
                <div className="row">
                    {/* Blog Entries Column */}
                    <div className="col-md-8" style={{ "color": "rgb(90, 90, 90)" }}>
                        {/* Blog Post */}
                        <div className="card mb-4" >
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1671725501884-e832fb8d0d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                            <div className="card-body">
                                <h2 className="card-title blog-title">Post Title</h2>
                                <p className="card-text text-dark full-blog-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam</p>
                                <div className="card mb-5 mt-5">
                                    <div className="card-header">
                                        Important
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title sub-blog-title">Some Important stuff</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                                <p className="card-text text-dark full-blog-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.</p>
                            </div>
                            <div className="card-footer text-muted">
                                Posted on January 1, 2017 by
                                <Link href="#">MillenialMommyHood</Link>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar Widgets Column */}
                    <div className="col-md-4">
                        {/* Search Widget */}
                        <div className="card my-4">
                            <h5 className="card-header">Search</h5>
                            <div className="card-body">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-secondary" type="button">Go!</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Categories Widget */}
                        <div className="card my-4">
                            <h5 className="card-header">Categories</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled mb-0" id='sideNav'>
                                            <li>
                                                <Link href="/categories/pregnancy">Pregnancy</Link>
                                            </li>
                                            <li>
                                                <Link href="/categories/newborns">New Borns</Link>
                                            </li>
                                            <li>
                                                <Link href="/categories/babies">Babies</Link>
                                            </li>
                                            <li>
                                                <Link href="/categories/toddlers">Toddlers</Link>
                                            </li>
                                            <li>
                                                <Link href="/categories/preschoolers">Pre Schoolers</Link>
                                            </li>
                                            <li>
                                                <Link href="/categories/school">School Age</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="list-unstyled mb-0" id='sideNav'>

                                            <li>
                                                <Link href="/categories/preteens">Pre Teen</Link>
                                            </li>
                                            <li>
                                                <Link href="/categories/teens">Teens</Link>
                                            </li>
                                            <li>
                                                <Link href="/categories/nutrition">Child Nutrition</Link>
                                            </li>
                                            <li>
                                                <Link href="/categories/special">Special Needs</Link>
                                            </li>
                                            <li>
                                                <Link href="/categories/disability">Disability</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Side Widget */}
                        <div className="card my-4">
                            <h5 className="card-header">Side Widget</h5>
                            <div className="card-body">
                                You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.row */}
            </div>
            {/* /.container */}
        </>
    )
}

export default Blog
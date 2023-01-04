import { useRouter } from 'next/router'
import HeroBlog from "../../../components/Categories/components/HeroBlog.jsx";
import BlogLeft from "../../../components/Categories/components/BlogLeft";
import BlogRight from "../../../components/Categories/components/BlogRight";

export default function specificCategories() {
    const router = useRouter()
    const { specifiCat } = router.query

    return (
        <>
            <div class="container text-left" style={{ "marginTop": "200px" }}>
                <div class="row align-items-start">
                    {/* Left side */}
                    <div class="col-md-8">
                        <HeroBlog
                            url={`/assets/images/mine/${specifiCat}/blog.jpg`}
                            alt="This is a mother holding child"
                            title={`${specifiCat} blog`}
                            desc="This is the very first props testing component for mmHood"
                            page={`${specifiCat}`}
                        />
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <BlogLeft
                                url={`/assets/images/mine/${specifiCat}/blog.jpg`}
                                alt="This is a mother holding child"
                                title={`${specifiCat} blog`}
                                desc="This is the very first props testing component for mmHood"
                            />
                            <BlogRight
                                url={`/assets/images/mine/${specifiCat}/blog.jpg`}
                                alt="This is a mother holding child"
                                title={`${specifiCat} blog`}
                                desc="This is the very first props testing component for mmHood"
                            />
                        </div>
                    </div>
                    {/* Right Side */}
                    <div class="col blog-right">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div style={{"backgroundColor":"grey"}} className="col-md-4">
                                    {/* <img style={{"height":"100%","objectFit":"contain"}} src={`/assets/images/mine/${specifiCat}/blog.jpg`} className="img-fluid rounded-start prompt-img" alt="..." /> */}
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{`${specifiCat} blog`}</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div style={{"backgroundColor":"grey"}} className="col-md-4">
                                    {/* <img style={{"height":"100%","objectFit":"contain"}} src={`/assets/images/mine/${specifiCat}/blog.jpg`} className="img-fluid rounded-start prompt-img" alt="..." /> */}
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{`${specifiCat} blog`}</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div style={{"backgroundColor":"grey"}} className="col-md-4">
                                    {/* <img style={{"height":"100%","objectFit":"contain"}} src={`/assets/images/mine/${specifiCat}/blog.jpg`} className="img-fluid rounded-start prompt-img" alt="..." /> */}
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{`${specifiCat} blog`}</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div style={{"backgroundColor":"grey"}} className="col-md-4">
                                    {/* <img style={{"height":"100%","objectFit":"contain"}} src={`/assets/images/mine/${specifiCat}/blog.jpg`} className="img-fluid rounded-start prompt-img" alt="..." /> */}
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{`${specifiCat} blog`}</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

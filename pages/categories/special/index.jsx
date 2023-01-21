import Link from "next/link";
import HeroBlog from "../../../components/Categories/components/HeroBlog";


function pregnancy(props) {
    const specifiCat = "pregnancy"
    return (
        <>
            {props.blogs.map((blog, idx) => {
                return (
                    <div class="container text-left">
                        <div class="row align-items-start">
                            {/* Left side */}
                            <div class="col-md-8">
                                <HeroBlog
                                    slug={`${blog.slug}`}
                                    url={`${blog.img}`}
                                    alt="This is a mother holding child"
                                    title={`${blog.title}`}
                                    desc="This is the very first props testing component for mmHood"
                                    page={`special`}
                                />
                                {/* <div class="row row-cols-1 row-cols-md-2 g-4">
                                    <BlogLeft
                                    slug={`${blog.slug}`}
                                        url={`/assets/images/mine/${specifiCat}/blog.jpg`}
                                        alt="This is a mother holding child"
                                        title={`${blog.title}`}
                                        desc="This is the very first props testing component for mmHood"
                                    />
                                    <BlogRight
                                    slug={`${blog.slug}`}
                                        url={`/assets/images/mine/${specifiCat}/blog.jpg`}
                                        alt="This is a mother holding child"
                                        title={`${blog.title}`}
                                        desc="This is the very first props testing component for mmHood"
                                    />
                                </div> */}
                            </div>
                            {/* Right Side */}
                            <div class="col blog-right">
                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div style={{ "backgroundColor": "grey" }} className="col-md-4">
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
                                        <div style={{ "backgroundColor": "grey" }} className="col-md-4">
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
                                        <div style={{ "backgroundColor": "grey" }} className="col-md-4">
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
                                        <div style={{ "backgroundColor": "grey" }} className="col-md-4">
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
                )
            })}
        </>
    )
}

export async function getStaticProps() {
    const fs = require("fs");
    const matter = require("gray-matter");
    const { v4: uuid } = require("uuid");

    const files = fs.readdirSync(`${process.cwd()}/contents/special`, "utf-8");

    const blogs = files
        .filter((fn) => fn.endsWith(".md"))
        .map((fn) => {
            const path = `${process.cwd()}/contents/special/${fn}`;
            const rawContent = fs.readFileSync(path, {
                encoding: "utf-8",
            });
            const { data } = matter(rawContent);

            return { ...data, id: uuid() };
        });

    // By returning { props: blogs }, the IndexPage component
    // will receive `blogs` as a prop at build time
    return {
        props: { blogs },
    };
}

export default pregnancy
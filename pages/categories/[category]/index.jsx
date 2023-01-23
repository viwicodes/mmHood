
import Link from "next/link";
import HeroBlog from "../../../components/Categories/components/HeroBlog";
import { getArticles } from "../../../http";
import ErrorPage from 'next/error'
import qs from "qs"


function Landing({ articles, slug }) {
    // console.log(articles)
    if (articles.items.length > 0) {
        {
            return (
                <div className="container text-left" style={{ "marginTop": "200px" }}>
                    <div className="row align-items-start">
                        {/* Left side */}
                        <div className="col-md-8">
                            {articles.items.map((article) => {
                                // console.log(article.attributes.Image.data.attributes.url)
                                console.log(article)
                                return (
                                    <HeroBlog key={article.id}
                                        slug={`${article.attributes.slug}`}
                                        url={`${article.attributes.Image.data.attributes.url}`}
                                        title={`${article.attributes.Title}`}
                                        desc={`${article.attributes.Description}`}
                                        page={`${slug}`}
                                    />
                                )
                            })}
                            {/* <div className="row row-cols-1 row-cols-md-2 g-4">
                                    <BlogLeft
                                    slug={"${blog.slug}"}
                                        url={"/assets/images/mine/${specifiCat}/blog.jpg"}
                                        alt="This is a mother holding child"
                                        title={"${blog.title}"}
                                        desc="This is the very first props testing component for mmHood"
                                    />
                                    <BlogRight
                                    slug={"${blog.slug}"}
                                        url={"/assets/images/mine/${specifiCat}/blog.jpg"}
                                        alt="This is a mother holding child"
                                        title={"${blog.title}"}
                                        desc="This is the very first props testing component for mmHood"
                                    />
                                </div> */}
                        </div>
                        {/* Right Side */}
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
                                            <ul className="list-unstyled mb-0" id='sideNav'>                    <li>
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
                </div>
            )
        }

    } else if (articles.items.length == 0) {
        <ErrorPage statusCode={400} />
    }

}

export async function getServerSideProps({ params }) {

    const queryString = qs.stringify({
        populate: ['Image'],
        filters: {
            category: {
                slug: {
                    $eq: params.category,
                },
            }
        },
    });
    const { data: articles } = await getArticles(queryString)

    return {
        props: {
            articles: {
                items: articles.data
            },
            slug: params.category
        },
    }
}

export default Landing
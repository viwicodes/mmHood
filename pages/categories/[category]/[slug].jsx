import { baseURL, getArticlesBySlug } from "../../../http";
import qs from "qs";
import Link from "next/link";
import markdown from "remark-parse";
import matter from "gray-matter";
import html from "remark-html";
import highlight from "remark-highlight.js";
import { unified } from "unified";

function IndividualBlog({ article, blog }) {
  // console.log(article.items[0].attributes.Image.data.attributes.url)
  console.log("This page is called");
  return (
    <>
      <div>
        {/* <Blog/> */}
        <div style={{ marginTop: "200px" }} className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-body">
                  {/* {console.log(article.items[0].attributes.Image.data.attributes.url)} */}
                  <img
                    src={`${baseURL}${article.items[0].attributes.Image.data.attributes.url}`}
                    alt="Some alt text"
                    className="card-img-top"
                  />
                  <article
                    id="articles"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  ></article>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-md-4">
              {/* Search Widget */}
              <div className="card my-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-secondary" type="button">
                        Go!
                      </button>
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
                      <ul className="list-unstyled mb-0" id="sideNav">
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
                          <Link href="/categories/preschoolers">
                            Pre Schoolers
                          </Link>
                        </li>
                        <li>
                          <Link href="/categories/school">School Age</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0" id="sideNav">
                        {" "}
                        <li>
                          <Link href="/categories/preteens">Pre Teen</Link>
                        </li>
                        <li>
                          <Link href="/categories/teens">Teens</Link>
                        </li>
                        <li>
                          <Link href="/categories/nutrition">
                            Child Nutrition
                          </Link>
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
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the new Bootstrap 4 card
                  containers!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const query = qs.stringify({
    populate: ["Image"],
    filters: {
      slug: {
        $eq: params.slug,
      },
    },
  });
  const { data: article } = await getArticlesBySlug(query);
  // console.log(article.data[0].attributes.Body)

  const rawContent = article.data[0].attributes.Body;
  const { data, content } = matter(rawContent);

  const result = await unified()
    .use(markdown)
    .use(highlight) // highlight code block
    .use(html)
    .process(content);

  return {
    props: {
      article: {
        items: article.data,
      },
      blog: {
        ...data,
        content: result.toString(),
      },
    },
  };
}

export default IndividualBlog;

import HeroBlog from "../../components/Categories/components/HeroBlog.jsx";
import BlogLeft from "../../components/Categories/components/BlogLeft";
import BlogRight from "../../components/Categories/components/BlogRight";

function preteens() {
  return (
    <>
      <HeroBlog
        url="/assets/images/mine/blog7.jpg"
        alt="This is a mother holding child"
        title="Pre Teens Blog"
        desc="This is the very first props testing component for mmHood"
      />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <BlogLeft
            url="/assets/images/mine/blog7.jpg"
            alt="This is a mother holding child"
            title="Pre Teens Blog"
            desc="This is the very first props testing component for mmHood"
          />
          <BlogRight
            url="/assets/images/mine/blog7.jpg"
            alt="This is a mother holding child"
            title="Pre Teens Blog"
            desc="This is the very first props testing component for mmHood"
          />
        </div>
      </div>
    </>
  );
}

export default preteens;

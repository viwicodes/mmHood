import HeroBlog from "../../../components/Categories/components/HeroBlog.jsx";
import BlogLeft from "../../../components/Categories/components/BlogLeft";
import BlogRight from "../../../components/Categories/components/BlogRight";

function special() {
  return (
    <>
      {/* <HeroBlog
        url="/assets/images/mine/blog11.jpg"
        alt="This is a mother holding child"
        title="Special Blog"
        desc="This is the very first props testing component for mmHood"
        page="special"
      />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <BlogLeft
            url="/assets/images/mine/blog11.jpg"
            alt="This is a mother holding child"
            title="Special Blog"
            desc="This is the very first props testing component for mmHood"
          />
          <BlogRight
            url="/assets/images/mine/blog11.jpg"
            alt="This is a mother holding child"
            title="Special Blog"
            desc="This is the very first props testing component for mmHood"
          />
        </div>
      </div> */}
      <div class="container text-center">
        <div class="row align-items-start">
          {/* Left side */}
          <div class="col-md-8">
            <HeroBlog
              url="/assets/images/mine/blog11.jpg"
              alt="This is a mother holding child"
              title="Baby Blog"
              desc="This is the very first props testing component for mmHood"
              page="babies"
            />
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <BlogLeft
                url="/assets/images/mine/blog11.jpg"
                alt="This is a mother holding child"
                title="Baby Blog"
                desc="This is the very first props testing component for mmHood"
              />
              <BlogRight
                url="/assets/images/mine/blog11.jpg"
                alt="This is a mother holding child"
                title="Baby Blog"
                desc="This is the very first props testing component for mmHood"
              />
            </div>
          </div>
          {/* Right Side */}
          <div class="col">
            <ul class="list-group position-fixed">
              <li class="list-group-item styling">An item</li>
              <li class="list-group-item styling">A second item</li>
              <li class="list-group-item styling">A third item</li>
              <li class="list-group-item styling">A fourth item</li>
              <li class="list-group-item styling">And a fifth one</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default special;

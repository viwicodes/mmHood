const BlogLeft = ({ url, alt, title, desc }) => {
  return (
    <>
      {/* <div className="col">
        <div className="card">
          <img src={url} className="card-img-top" alt={alt} />
          <div className="card-body">
            <h5 className="card-title sub-blog-title">{title}</h5>
            <p className="card-text sub-blog-desc">{desc}</p>
          </div>
        </div>
      </div> */}
      <div class="col">
          <div class="card">
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
            </div>
          </div>
        </div>
    </>
  );
};

export default BlogLeft;

const BlogRight = ({url, alt, title, desc}) => {
  return (
    <>
      <div class="col">
          <div class="card">
            <img
              src={url}
              class="card-img-top"
              alt={alt}
            />
            <div class="card-body">
              <h5 class="card-title sub-blog-title">{title}</h5>
              <p class="card-text sub-blog-desc">
                {desc}
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default BlogRight;

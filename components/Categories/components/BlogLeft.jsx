const BlogLeft = ({ url, alt, title, desc }) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <img src={url} className="card-img-top" alt={alt} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLeft;

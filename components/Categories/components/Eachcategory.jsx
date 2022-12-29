
// eslint-disable-next-line react/prop-types
const Eachcategory = ({ img, title }) => {
	return (
		<>
			<div className="col-lg-4">
				<div className="item">
					<div className="thumb">
						<div className="hover-content">
							<ul>
								{/* <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li> */}
								{/* <li><a href="single-product.html"><i className="fa fa-star"></i></a></li> */}
								<li><a href="#">Read More</a></li>
								{/* <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li> */}
							</ul>
						</div>
						<img src={img} alt="" />
					</div>
					<div className="down-content">
						<h4>{title}</h4>
					</div>
				</div>
			</div>
		</>
	)
}

export default Eachcategory
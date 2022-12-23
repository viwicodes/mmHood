import React from "react"
import Eachcategory from "./components/Eachcategory"

const DiffCategories = () => {
	return (
		<>
			<section className="section" id="products">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-heading">
								<h2>Checkout our Latest Blogs</h2>
								<span>Help yourself learning something new.</span>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						
						<Eachcategory img="assets/images/mine/pregnancy.jpg" title="Pregnancy"/>
						<Eachcategory img="assets/images/mine/newborns.jpg" title="New Born"/>
						<Eachcategory img="assets/images/mine/babies.jpg" title="Babies"/>
						<Eachcategory img="assets/images/mine/toddler.jpg" title="Toddlers"/>
						<Eachcategory img="assets/images/mine/preschoolers.jpg" title="Pre Schoolers"/>
						<Eachcategory img="assets/images/mine/school-age.jpg" title="School Age"/>
						<Eachcategory img="assets/images/mine/pre-teens.jpg" title="Pre-Teens"/>
						<Eachcategory img="assets/images/mine/teens.jpg" title="Teens"/>
						<Eachcategory img="assets/images/mine/nutrition.jpg" title="Child Nutrition"/>
						<Eachcategory img="assets/images/mine/special needs.jpg" title="Special Needs"/>
						<Eachcategory img="assets/images/mine/disability.jpg" title="Disability"/>
						{/* <div className="col-lg-4">
							<div className="item">
								<div className="thumb">
									<div className="hover-content">
										<ul>
											<li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
										</ul>
									</div>
									<img src="assets/images/men-01.jpg" alt=""/>
								</div>
								<div className="down-content">
									<h4>classNameic Spring</h4>
									<span>$120.00</span>
									<ul className="stars">
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="item">
								<div className="thumb">
									<div className="hover-content">
										<ul>
											<li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
										</ul>
									</div>
									<img src="assets/images/men-02.jpg" alt=""/>
								</div>
								<div className="down-content">
									<h4>Air Force 1 X</h4>
									<span>$90.00</span>
									<ul className="stars">
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="item">
								<div className="thumb">
									<div className="hover-content">
										<ul>
											<li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
										</ul>
									</div>
									<img src="assets/images/men-03.jpg" alt=""/>
								</div>
								<div className="down-content">
									<h4>Love Nana ‘20</h4>
									<span>$150.00</span>
									<ul className="stars">
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="item">
								<div className="thumb">
									<div className="hover-content">
										<ul>
											<li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
										</ul>
									</div>
									<img src="assets/images/women-01.jpg" alt=""/>
								</div>
								<div className="down-content">
									<h4>New Green Jacket</h4>
									<span>$75.00</span>
									<ul className="stars">
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="item">
								<div className="thumb">
									<div className="hover-content">
										<ul>
											<li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
										</ul>
									</div>
									<img src="assets/images/women-02.jpg" alt=""/>
								</div>
								<div className="down-content">
									<h4>classNameic Dress</h4>
									<span>$45.00</span>
									<ul className="stars">
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="item">
								<div className="thumb">
									<div className="hover-content">
										<ul>
											<li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
										</ul>
									</div>
									<img src="assets/images/women-03.jpg" alt=""/>
								</div>
								<div className="down-content">
									<h4>Spring Collection</h4>
									<span>$130.00</span>
									<ul className="stars">
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="item">
								<div className="thumb">
									<div className="hover-content">
										<ul>
											<li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
										</ul>
									</div>
									<img src="assets/images/kid-01.jpg" alt=""/>
								</div>
								<div className="down-content">
									<h4>School Collection</h4>
									<span>$80.00</span>
									<ul className="stars">
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="item">
								<div className="thumb">
									<div className="hover-content">
										<ul>
											<li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
										</ul>
									</div>
									<img src="assets/images/kid-02.jpg" alt=""/>
								</div>
								<div className="down-content">
									<h4>Summer Cap</h4>
									<span>$12.00</span>
									<ul className="stars">
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="item">
								<div className="thumb">
									<div className="hover-content">
										<ul>
											<li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
											<li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
										</ul>
									</div>
									<img src="assets/images/kid-03.jpg" alt=""/>
								</div>
								<div className="down-content">
									<h4>classNameic Kid</h4>
									<span>$30.00</span>
									<ul className="stars">
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
										<li><i className="fa fa-star"></i></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="pagination">
								<ul>
									<li>
										<a href="#">1</a>
									</li>
									<li className="active">
										<a href="#">2</a>
									</li>
									<li>
										<a href="#">3</a>
									</li>
									<li>
										<a href="#">4</a>
									</li>
									<li>
										<a href="#">&gt;</a>
									</li>
								</ul>
							</div>
						</div> */}
					</div>
				</div>
			</section>

		</>
	)
}

export default DiffCategories
import React from "react"

const Member = () => {
	return (
		<>
			<section className="our-team">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-heading">
								<h2>Our Amazing Team</h2>
								<span>Meet our Awesome team members</span>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="team-item">
								<div className="thumb">
									<div className="hover-effect">
										<div className="inner-content">
											<ul>
												<li><a href="#"><i className="fa fa-facebook"></i></a></li>
												<li><a href="#"><i className="fa fa-twitter"></i></a></li>
												<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
												<li><a href="#"><i className="fa fa-behance"></i></a></li>
											</ul>
										</div>
									</div>
									<img src="assets/images/mine/member1.jpg"/>
								</div>
								<div className="down-content">
									<h4>Jane Doe</h4>
									<span>Product Caretaker</span>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="team-item">
								<div className="thumb">
									<div className="hover-effect">
										<div className="inner-content">
											<ul>
												<li><a href="#"><i className="fa fa-facebook"></i></a></li>
												<li><a href="#"><i className="fa fa-twitter"></i></a></li>
												<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
												<li><a href="#"><i className="fa fa-behance"></i></a></li>
											</ul>
										</div>
									</div>
									<img src="assets/images/mine/member3.jpg"/>
								</div>
								<div className="down-content">
									<h4>Jhon Doe</h4>
									<span>Product Caretaker</span>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="team-item">
								<div className="thumb">
									<div className="hover-effect">
										<div className="inner-content">
											<ul>
												<li><a href="#"><i className="fa fa-facebook"></i></a></li>
												<li><a href="#"><i className="fa fa-twitter"></i></a></li>
												<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
												<li><a href="#"><i className="fa fa-behance"></i></a></li>
											</ul>
										</div>
									</div>
									<img src="assets/images/mine/member2.jpg"/>
								</div>
								<div className="down-content">
									<h4>Jane Doe</h4>
									<span>Product Caretaker</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}

export default Member
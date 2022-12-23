import React from "react"

const AboutUs = () => {
	return (
		<>
			<div className="about-us">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="left-image">
								<img src="assets/images/mine/about-left01.jpg" alt=""/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="right-content">
								<h4>About Us &amp; Our Vibe</h4>
								<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
								<div className="quote">
									<i className="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod kon tempor incididunt ut labore.</p>
								</div>
								<p className="last">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, provident.</p>
								<ul>
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-behance"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default AboutUs
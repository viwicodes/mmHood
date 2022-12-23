import React from "react"

const BriefAbout = () => {
	return (
		<>
			<section className="section" id="explore">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="right-content">
								<div className="row">
									<div className="col-lg-6">
										<div className="leather1">
											<h4>Awesome Text 1</h4>
											<span>Awesome caption 1</span>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="first-image">
											<img src="assets/images/mine/vidya2.webp" alt="" />
										</div>
									</div>
									<div className="col-lg-6">
										<div className="second-image">
											<img src="assets/images/mine/vidya1.webp" alt="" />
										</div>
									</div>
									<div className="col-lg-6">
										<div className="types">
											<h4>Awesome text 2</h4>
											<span>Awesome caption 2</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="left-content">
								<h2>About Me</h2>
								<span>I’m Vidya!<br />
                                    I’m a Montessori expert, child psychologist and SEN educator with speciality in ADHD, Autism, Duslexia and other Learning Disability.</span>
								<div className="quote">
									<i className="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae iste assumenda distinctio commodi sit?</p>
								</div>
								<p style={{ "fontFamily": "Pacifico", "letterSpacing": "2px", "fontSize": "20px", "color":"var(--light-grey)"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut dolores expedita ipsam enim vitae ad temporibus quos aliquid non!</p>
								<p style={{ "fontFamily": "Pacifico", "letterSpacing": "2px", "fontSize": "20px", "opacity": "0" }}>Lorem10</p>
								{/* <p>If this template is beneficial for your website or business, please kindly <a rel="nofollow" href="https://paypal.me/templatemo" target="_blank">support us</a> a little via PayPal. Please also tell your friends about our great website. Thank you.</p> */}
								<div className="main-border-button">
									<a href="products.html">Discover More</a>
								</div>
							</div>
						</div>
                        
					</div>
				</div>
			</section>
		</>
	)
}

export default BriefAbout
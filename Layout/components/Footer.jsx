/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Link from "next/link"

const Footer = () => {
	return (
		<>
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="first-item">
								<div className="logo">
									<img src="/assets/images/mine/mmHoodLogo.png" alt="hexashop ecommerce templatemo"/>
								</div>
								<ul>
									<li><a href="#">16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</a></li>
									<li><a href="#">hexashop@company.com</a></li>
									<li><a href="#">010-020-0340</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3">
							<h4>Shopping &amp; Categories</h4>
							<ul>
								<li><a href="#">Women’s Shopping</a></li>
								<li><a href="#">Kid's Shopping</a></li>
							</ul>
						</div>
						<div className="col-lg-3">
							<h4>Useful Links</h4>
							<ul>
								<li><Link href="/">Home</Link></li>
								<li><Link href="/join">Join Us</Link></li>
								<li><Link href="/categories">Categories</Link></li>
								<li><Link href="/learning">Learning</Link></li>
								<li><Link href="/contact">Contact</Link></li>
							</ul>
						</div>
						<div className="col-lg-3">
							<h4>Help &amp; Information</h4>
							<ul>
								<li><a href="#">Help</a></li>
								<li><a href="#">FAQ's</a></li>
								<li><a href="#">Shopping</a></li>
								<li><a href="#">Consultation</a></li>
							</ul>
						</div>
						<div className="col-lg-12">
							<div className="under-footer">
								<p>Copyright © 2022 MillennialMommyHood. All Rights Reserved. | designed by viwicodes</p>
								<ul>
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}



export default Footer
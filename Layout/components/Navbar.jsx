/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"


const Navbar = () => {
	const router = useRouter()

	return (
		<>
			<header className="header-area header-sticky">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<nav className="main-nav">
								<a href="/" className="logo">
									<img src="assets/images/mine/mmHoodLogo.png" />
								</a>
								<ul className="nav">
									<li className="scroll-to-section"><Link className={router.asPath == "/" ? "active" : ""} href="/">Home</Link></li>
									<li className="scroll-to-section"><Link className={router.asPath == "/join" ? "active" : ""} href="/join">join us</Link></li>
									<li className="submenu">
										<Link className={router.asPath == "/categories" ? "active" : ""} href="/categories">Categories
										</Link>
										<ul>
											<li><Link href="about.html">Pregnancy</Link></li>
											<li><Link href="products.html">Newborns</Link></li>
											<li><Link href="single-product.html">Babies</Link></li>
											<li><Link href="contact.html">Toddlers</Link></li>
											<li><Link href="contact.html">Preschoolers</Link></li>
											<li><Link href="contact.html">School age</Link></li>
											<li><Link href="contact.html">Pre-teens</Link></li>
											<li><Link href="contact.html">Teens</Link></li>
											<li><Link href="contact.html">Child Nutrition</Link></li>
											<li><Link href="contact.html">Special Needs</Link></li>
											<li><Link href="contact.html">Disability</Link></li>
										</ul>
									</li>
									<li className="scroll-to-section"><Link className={router.asPath == "/learning" ? "active" : ""} href="/learning">learning</Link></li>
									<li className="scroll-to-section"><Link className={router.asPath == "/contact" ? "active" : ""} href="/contact">contact</Link></li>
								</ul>
								<a className='menu-trigger active'>
									<span>Menu</span>
								</a>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Navbar
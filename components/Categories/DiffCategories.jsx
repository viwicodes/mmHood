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
						
						<Eachcategory img="/assets/images/mine/pregnancy.jpg" title="Pregnancy"/>
						<Eachcategory img="/assets/images/mine/newborns.jpg" title="New Born"/>
						<Eachcategory img="/assets/images/mine/babies.jpg" title="Babies"/>
						<Eachcategory img="/assets/images/mine/toddler.jpg" title="Toddlers"/>
						<Eachcategory img="/assets/images/mine/preschoolers.jpg" title="Pre Schoolers"/>
						<Eachcategory img="/assets/images/mine/school-age.jpg" title="School Age"/>
						<Eachcategory img="/assets/images/mine/pre-teens.jpg" title="Pre-Teens"/>
						<Eachcategory img="/assets/images/mine/teens.jpg" title="Teens"/>
						<Eachcategory img="/assets/images/mine/nutrition.jpg" title="Child Nutrition"/>
						<Eachcategory img="/assets/images/mine/special needs.jpg" title="Special Needs"/>
						<Eachcategory img="/assets/images/mine/disability.jpg" title="Disability"/>
						
					</div>
				</div>
			</section>

		</>
	)
}

export default DiffCategories
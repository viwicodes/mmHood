import React from "react"
import Hero from "../components/About/Hero"
import AboutUs from "../components/About/AboutUs"
import Member from "../components/About/Member"
import Services from "../components/About/Services"


const about = () => {
	return (
		<>
			<Hero />
			<AboutUs/>
			<Member/>
			<Services/>
		</>
	)
}

export default about
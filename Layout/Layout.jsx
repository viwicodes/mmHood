import React from "react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
	return (
		<>
			<Navbar/>
			{children}
			<Footer/>
		</>
	)
}

export default Layout
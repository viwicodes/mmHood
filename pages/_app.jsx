/* eslint-disable react/react-in-jsx-scope */
import Layout from "../Layout/Layout"

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
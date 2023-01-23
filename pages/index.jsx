import BriefAbout from "../components/Home/BriefAbout"
import Hero from "../components/Home/Hero"
import { getCategories } from "../http"

export default function Home() {
	return (
		// eslint-disable-next-line react/react-in-jsx-scope
		<><Hero /><BriefAbout /></>
	)
}
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import MainContents from "../components/MainContents";

const LandingPage = () => {
	return (
		<div className="">
			<Navbar />
			<main>
				<MainContents />
			</main>
			<div id="contact"></div>
			<Footer />
		</div>
	);
};

export default LandingPage;

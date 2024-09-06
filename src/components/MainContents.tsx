import AboutComponent from "./AboutComponent";
import BaseCardsComponents from "./BaseCardsComponents";
import DataCardsComponent from "./DataCardsComponent";
import HeroComponent from "./HeroComponent";
import InsightsComponents from "./InsightsComponents";

const MainContents = () => {
	return (
		<div className="my-10 mt-28">
			<HeroComponent />
			<div id="products" style={{ position: "relative", top: "-80px" }}></div>
			<BaseCardsComponents />
			<DataCardsComponent />
			<InsightsComponents />
			<div id="about" style={{ position: "relative", top: "-80px" }}></div>
			<AboutComponent />
		</div>
	);
};

export default MainContents;

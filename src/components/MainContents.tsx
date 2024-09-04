import AboutComponent from "./AboutComponent";
import BaseCardsComponents from "./BaseCardsComponents";
import DataCardsComponent from "./DataCardsComponent";
import HeroComponent from "./HeroComponent";
import InsightsComponents from "./InsightsComponents";

const MainContents = () => {
	return (
		<div className="my-10 mt-28">
			<HeroComponent />
			<BaseCardsComponents />
			<DataCardsComponent />
			<InsightsComponents />
			<AboutComponent />
		</div>
	);
};

export default MainContents;

import { baseCardsData } from "../utils/baseCardsData";
import BaseCard from "./common/BaseCard";

const BaseCardsComponents = () => {
	return (
		<div className="lg:h-96 py-10 lg:py-0 bg-secondary mt-16 flex items-center  justify-between gap-24 px-[5%] flex-col lg:flex-row">
			{baseCardsData.map((base, idx) => (
				<BaseCard title={base.title} link={base.link} key={idx} />
			))}
		</div>
	);
};

export default BaseCardsComponents;

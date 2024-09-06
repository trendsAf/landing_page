import { dataCards } from "../utils/dataCads";
import DataCard from "./common/DataCard";

const DataCardsComponent = () => {
	return (
		<div className="overflow-x-hidden max-w-[100%]  flex flex-col gap">
			{dataCards.map((data, idx) => (
				<DataCard
					title={data.title}
					description={data.description}
					link={data.link}
					image={data.image}
					navigate={data.navigate}
					key={idx}
				/>
			))}
		</div>
	);
};

export default DataCardsComponent;

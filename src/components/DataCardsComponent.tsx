import { dataCards } from "../utils/dataCads";
import DataCard from "./common/DataCard";

const DataCardsComponent = () => {
	return (
		<div className="mt-10 flex flex-col gap-4 px-[5%]">
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

import {
	comesa_countries_map,
	insites_image,
	insites_image2,
} from "../assets/images";
import PrimaryButton from "./common/PrimaryButton";

const InsightsComponents = () => {
	const handleClick = () => {
		window.location.href = "https://basefood-waitlist.netlify.app/";
	};
	return (
		<div className=" mt-16 flex lg:flex-row flex-col px-[5%] w-full h-[70vh]">
			<div className="w-full flex flex-col gap-10">
				<div>
					<img
						src={insites_image}
						alt=""
						draggable={false}
						className="hidden lg:flex"
					/>
					<img
						src={insites_image2}
						alt=""
						draggable={false}
						className="flex lg:hidden"
					/>
				</div>
				<p className="lg:text-2xl text-lg md:text-2xl font-body">
					Be first to access cutting-edge insights. Join our waitlist for early
					access to trendsAf’s transformative data tools.
				</p>
				<div className="w-full flex justify-center lg:justify-start">
					<PrimaryButton
						text="Join Waitlist"
						onClick={handleClick}
						className="py-2 px-4 bg-primary text-white rounded cursor-pointer w-full md:w-52 mb-4"
					/>
				</div>
			</div>
			<div className=" w-3/4 h-full md:mt-8">
				<img
					src={comesa_countries_map}
					alt="comesa_map"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
};

export default InsightsComponents;

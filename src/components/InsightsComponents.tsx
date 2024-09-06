import { comesa_countries_map } from "../assets/images";
import PrimaryButton from "./common/PrimaryButton";

const InsightsComponents = () => {
	const handleClick = () => {
		window.location.href = "https://basefood-waitlist.netlify.app/";
	};
	return (
		<div className="h-screen md:h-[85vh] relative ">
			<div className="relative w-full h-full">
				<div className="absolute w-full h-full bg-black/40"></div>
				<video autoPlay muted loop className="w-full h-full object-fill">
					<source
						src="https://res.cloudinary.com/dq6npfdgz/video/upload/v1725639485/4778066-uhd_2562_1440_25fps_ytvf2g.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
			<div className="absolute top-0 mt-16 flex lg:flex-row flex-col px-[5%] w-full h-[70vh]">
				<div className="w-full flex flex-col gap-4 md:gap-10 text-white justify-center">
					<div className="">
						<h1 className=" text-[3rem] md:text-[6rem] font-body leading-[6rem] font-extrabold">
							Insights For Growth
						</h1>
					</div>
					<p className=" text-xl helvetica ">
						Be first to access cutting-edge insights. Join our waitlist for
						early access to trendsAf’s transformative data tools.
					</p>
					<div className="w-full flex justify-center lg:justify-start">
						<PrimaryButton
							text="Join Waitlist"
							onClick={handleClick}
							className="py-2 px-4 bg-primary font-heading text-white rounded-[5px] cursor-pointer w-full md:w-52 mb-4"
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
		</div>
	);
};

export default InsightsComponents;

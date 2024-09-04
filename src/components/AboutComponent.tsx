import { Link } from "react-router-dom";
import { about_image } from "../assets/images";
import { aboutData } from "../utils/aboutData";

const AboutComponent = () => {
	return (
		<div className="mt-16 md:mt-56 lg:mt-16 flex items-center lg:flex-row flex-col px-[5%] justify-between">
			<div className="lg:w-2/5 flex flex-col gap-10">
				<h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-4xl">
					About trendsAf?
				</h1>
				{aboutData.map((data, idx) => (
					<div key={idx}>
						<h1 className="font-bold font-heading text-2xl md:text-3xl lg:text-2xl">
							{data.title}
						</h1>
						<p className="text-lg md:text-xl lg:text-lg font-body">
							{data.description}
						</p>
					</div>
				))}
				<div className="flex">
					<Link
						to={"https://basefood-waitlist.netlify.app"}
						className="flex items-center gap-2 cursor-pointer text-primary border-b border-b-primary text-xl"
					>
						Join Waitlist
					</Link>
				</div>
			</div>
			<div className="lg:w-2/4 mt-10 lg:mt-0 lg:h-[80vh] rounded-lg overflow-hidden">
				<img
					src={about_image}
					alt="about_trendsAf"
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
};

export default AboutComponent;
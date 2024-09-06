import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { nav_logo } from "../../assets/images";
import PrimaryButton from "./PrimaryButton";

const Footer = () => {
	const icons = [
		{ icon: <FaXTwitter /> },
		{ icon: <GrLinkedinOption /> },
		{ icon: <BsInstagram /> },
	];

	const handleSubscribe = () => {
		console.log("Subscribed");
	};
	return (
		<>
			<div className="flex flex-col space-y-6 bg-secondary px-[5%] mx-auto text-normal_text_color font-body">
				<div className="flex  justify-between flex-col md:flex-row">
					<div className=" pb-4">
						<div className="w-40 h-20">
							<img
								src={nav_logo}
								alt="Footer_logo"
								className="w-full h-full object-contain"
							/>
						</div>
						<div className="flex flex-col gap-1 mb-4">
							<h1>Norrsken House Kigali</h1>
							<h1>research@trendsaf.co</h1>
						</div>
						<div className=" flex items-center gap-2">
							{icons.map((item, idx) => (
								<span
									key={idx}
									className=" w-8 h-8 bg-white rounded flex items-center justify-center"
								>
									{item.icon}
								</span>
							))}
						</div>
					</div>
					<div className=" w-full lg:w-1/4 md:w-1/2 flex flex-col justify-evenly gap-4">
						<h1>
							Join our newsletter to stay updated on our features and latest
							market insights
						</h1>
						<form action="" className="w-full flex gap-4">
							<input
								type="text"
								className="w-full px-4 rounded"
								placeholder="Enter your email"
							/>
							<PrimaryButton
								text="Subscribe"
								type="button"
								className="py-2 px-4 bg-primary text-white rounded"
								onClick={handleSubscribe}
							/>
						</form>
					</div>
				</div>
				<div className="h-20">
					<hr className="bg-normal_text_color/40 p-[0.5px]" />
					<p className="text-center mt-4">© 2024 All Rights Reserved.</p>
				</div>
			</div>
		</>
	);
};

export default Footer;

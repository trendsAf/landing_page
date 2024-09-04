import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

interface BaseCardProps {
	title: string;
	link: string;
}

const BaseCard: React.FC<BaseCardProps> = ({ title, link }) => {
	return (
		<motion.div
			className="bg-white w-full flex flex-col items-center justify-center h-52 md:h-72 lg:h-48 rounded-lg gap-8"
			whileHover={{ y: -10 }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
		>
			<h1
				className={`text-2xl md:text-4xl lg:text-4xl font-heading font-bold ${
					title === "BASEFOOD" ? "text-primary" : ""
				} ${title === "BASEPOWER" ? "text-[#0097A7]" : "text-[#FFAB40]"} `}
			>
				{title}
			</h1>
			<Link
				to={link}
				className="flex items-center gap-2 cursor-pointer hover:text-primary border-b border-b-black hover:border-b-primary text-xl lg:text-sm font-body"
			>
				{title === "BASEFOOD" ? "Join waitlist" : "On the queue"}{" "}
				<GoArrowRight />
			</Link>
		</motion.div>
	);
};

export default BaseCard;

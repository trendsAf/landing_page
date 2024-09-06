import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { textVariant, cardVariant } from "../../utils/variants";

interface DataCardProps {
	title: string;
	description: string;
	link: string;
	image: string;
	navigate: string;
}

const DataCard: React.FC<DataCardProps> = ({
	title,
	description,
	link,
	image,
	navigate,
}) => {
	const isReverse = title === "Aggregate" || title === "Act";

	return (
		<div
			className={`flex justify-between items-center gap-4 ${
				isReverse ? "lg:flex-row-reverse flex-col" : "lg:flex-row flex-col"
			}`}
		>
			<div className="2xl:w-[40%] lg:w-[45%] pr-10 mt-10 flex flex-col gap-8">
				<motion.h1
					className="lg:text-6xl md:text-5xl md:text-center lg:text-start font-heading text-4xl"
					variants={textVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.2 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					{title}
				</motion.h1>
				<motion.p
					className="lg:text-2xl font-body text-lg md:text-xl md:text-center lg:text-start"
					variants={textVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.2 }}
					transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
				>
					{description}
				</motion.p>
				<motion.div
					className="flex md:justify-center lg:justify-start"
					variants={textVariant}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.2 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
				>
					<Link
						to={navigate}
						className="border-b border-b-primary text-primary md:text-2xl lg:text-xl text-xl"
					>
						{link}
					</Link>
				</motion.div>
			</div>
			<motion.div
				className="w-4/5 lg:w-[40%] h-[40vh] md:h-[60vh] lg:h-[70vh] bg-secondary flex flex-col justify-center py-10 rounded-lg md:mt-5 lg:mt-0"
				variants={cardVariant(isReverse)}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.2 }}
				exit="exit"
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<div
					className={`relative w-[110%] h-[80%] ${
						isReverse
							? "left-0"
							: "2xl:-left-16 xl:-left-8 lg:-left-6 md:-left-14 -left-8"
					}`}
				>
					<img
						src={image}
						alt="image"
						className="w-full h-full object-cover absolute rounded-lg"
					/>
				</div>
			</motion.div>
		</div>
	);
};

export default DataCard;

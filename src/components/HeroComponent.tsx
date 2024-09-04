import { motion } from "framer-motion";
import PrimaryButton from "./common/PrimaryButton";
import { fadeInVariant } from "../utils/variants";

const HeroComponent = () => {
	return (
		<div className="max-w-[90%] mx-auto h-[60vh] lg:h-[85vh] rounded-2xl overflow-hidden">
			<div className="relative h-full flex flex-col justify-center gap-8 hero bg-cover bg-center bg-no-repeat animate-animateBG">
				<div className="bg-black/10 w-full h-full absolute"></div>
				<div className="absolute z-20">
					<div className="lg:w-3/4 lg:pl-20 flex flex-col">
						<motion.h1
							className="text-white font-bold lg:text-6xl font-heading text-center lg:text-start text-3xl md:text-5xl"
							variants={fadeInVariant}
							initial="hidden"
							animate="visible"
							transition={{ duration: 0.8, ease: "easeOut" }}
						>
							Modern Data Infrastructure For Emerging Economies
						</motion.h1>

						<motion.p
							className="lg:w-4/5 text-white/90 lg:text-2xl font-body text-center lg:text-start text-lg md:text-2xl p-5 lg:p-0 lg:mt-5"
							variants={fadeInVariant}
							initial="hidden"
							animate="visible"
							transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
						>
							Data products that enable business thrive across the continent.
						</motion.p>
					</div>
					<motion.div
						className="flex gap-6 lg:pl-20 lg:justify-start justify-center mt-5"
						variants={fadeInVariant}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
					>
						<div>
							<PrimaryButton text="Join waitlist" />
						</div>
						<div>
							<PrimaryButton
								text="Get in touch"
								className="py-2 px-4 bg-transparent text-white rounded border border-white"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default HeroComponent;

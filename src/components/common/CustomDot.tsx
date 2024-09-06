import React from "react";
import { FaDotCircle } from "react-icons/fa";

interface CustomDotProps {
	onClick?: () => void;
	active?: boolean;
	index?: number;
}

const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => {
	return (
		<div onClick={onClick} className="cursor-pointer">
			<FaDotCircle
				className={`mx-2 text-xl ${
					active ? "text-primary" : "text-white"
				} lg:mb-12 mb-6`}
			/>
		</div>
	);
};

export default CustomDot;

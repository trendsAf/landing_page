interface PrimaryButtonProps {
	text: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	className?: string;
	disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
	text,
	onClick,
	type = "button",
	className = "",
	disabled = false,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`py-2 px-4 bg-primary font-heading text-white rounded cursor-pointer ${className}`}
			disabled={disabled}
		>
			{text}
		</button>
	);
};

export default PrimaryButton;

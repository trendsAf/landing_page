import { Link } from "react-router-dom";
import { navItems } from "../../utils/navItems";
import PrimaryButton from "../common/PrimaryButton";

interface NavModalProps {
	toggleModal: () => void;
}

const NavModal: React.FC<NavModalProps> = ({ toggleModal }) => {
	const handleClick = () => {
		toggleModal();
	};

	return (
		<>
			<div className="fixed inset-0 w-full h-screen backdrop-blur-md flex items-center z-40 lg:hidden">
				<div
					className="w-full h-full absolute -z-10 top-0 left-0"
					onClick={toggleModal}
				></div>
				<div className="w-4/5 sm:w-1/2 h-full flex flex-col items-center bg-white rounded-lg p-4 pt-40">
					<div className="text-xl w-[80%] flex flex-col gap-4">
						{navItems.map((item, index) => (
							<Link
								key={index}
								to={item.path}
								className="cursor-pointer px-4 lg:px-2 xl:px-4"
								onClick={toggleModal}
							>
								{item.name}
							</Link>
						))}
					</div>
					<div className=" w-full">
						<PrimaryButton
							text="Join waitlist"
							type="button"
							className="py-2 px-4 bg-primary text-white rounded cursor-pointer mt-4 ml-10"
							onClick={handleClick}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavModal;

import { Link } from "react-router-dom";
import { nav_logo } from "../../assets/images";
import PrimaryButton from "./PrimaryButton";
import { navItems } from "../../utils/navItems";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import NavModal from "../mod/NavModal";

const Navbar = () => {
	const handleClick = () => {
		window.location.href = "https://basefood-waitlist.netlify.app/";
	};

	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};

	return (
		<>
			<div className="flex items-center justify-between px-[5%] mx-auto fixed w-full top-0 right-0 left-0 z-50 py-4 backdrop-blur font-body">
				<div className="w-full h-full bg-white/40 absolute -z-10 top-0 left-0"></div>
				<div className="md:w-[25%] lg:w-[10%] md:h-20 lg:h-12 h-10">
					<img
						src={nav_logo}
						alt="nav_logo"
						className="w-full h-full md:object-contain object-cover "
					/>
				</div>
				<div className="hidden lg:flex items-center justify-between lg:w-[70%] 2xl:w-[70%]">
					<div className="flex items-center justify-between md:text-lg lg:text-lg xl:text-xl w-[80%]">
						{navItems.map((item, index) => (
							<Link
								key={index}
								to={item.path}
								className="cursor-pointer px-4 lg:px-2 xl:px-4"
							>
								{item.name}
							</Link>
						))}
					</div>
					<div>
						<PrimaryButton
							text="Join waitlist"
							type="button"
							onClick={handleClick}
						/>
					</div>
				</div>

				<AiOutlineMenu
					className="lg:hidden text-2xl md:text-4xl cursor-pointer"
					onClick={toggleModal}
				/>
			</div>
			{modal && <NavModal toggleModal={toggleModal} />}
		</>
	);
};

export default Navbar;

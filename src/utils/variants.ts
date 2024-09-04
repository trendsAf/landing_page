export const textVariant = {
	hidden: { y: 80, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};

export const cardVariant = (isReverse: boolean) => ({
	hidden: { x: isReverse ? -200 : 200, opacity: 0 },
	visible: { x: 0, opacity: 1 },
	exit: { x: isReverse ? -200 : 200, opacity: 0 },
});

export const fadeInVariant = {
	hidden: { opacity: 0, y: 80 },
	visible: { opacity: 1, y: 0 },
};

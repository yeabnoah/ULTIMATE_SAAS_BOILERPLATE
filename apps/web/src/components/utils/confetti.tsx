import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "usehooks-ts";

const MyConfetti = () => {
	const { width, height } = useWindowSize();
	return <Confetti width={width} height={height} />;
};

export default MyConfetti;

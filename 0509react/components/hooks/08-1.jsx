import { useState, useEffect} from "react";

export function useMovePosition() {
	const [mouseClick, resetBox] = useState({x: 0, y: 0});
	const delta = 10;

		const moveTitleToDown = () => {
			resetBox((prevPosition) => ({
				x: prevPosition.x,
				y: prevPosition.y - delta,
			}));
		};
		const moveTitleToRight = () => {
			resetBox((prevPosition) => ({
				x: prevPosition.x + delta,
				y: prevPosition.y,
			}));
		};
		const moveTitleToLeft = () => {
			resetBox((prevPosition) => ({
				x: prevPosition.x - delta,
				y: prevPosition.y,
			}));
		};
		const moveTitleToUp = () => {
			resetBox((prevPosition) => ({
				x: prevPosition.x,
				y: prevPosition.y + delta,
			}));
		};
		
		return { mouseClick, moveTitleToDown, moveTitleToRight, moveTitleToLeft, moveTitleToUp}
}

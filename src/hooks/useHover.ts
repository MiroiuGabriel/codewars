import { useState } from 'react';

export const useHover = () => {
	const [hovering, setHovering] = useState(false);

	const onMouseEnter = () => setHovering(true);
	const onMouseLeave = () => setHovering(false);

	return { hovering, onMouseEnter, onMouseLeave };
};

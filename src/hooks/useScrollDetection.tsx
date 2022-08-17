import { useEffect, useState } from 'react';

export const useScrollDetection = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 20) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		document.addEventListener('scroll', onScroll);
		return () => document.removeEventListener('scroll', onScroll);
	});

	return isScrolled;
};

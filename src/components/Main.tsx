import React from 'react';

export const Main: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<main
			className="px-4 ml-0 md:ml-[55px] h-full min-h-full pt-[55px] "
			role="main"
		>
			{children}
		</main>
	);
};

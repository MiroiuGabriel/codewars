import React from 'react';

export const Tag: React.FC<{ label: string }> = ({ label }) => {
	return (
		<div className="text-[10px] rounded uppercase text-gray-800 bg-[#0000001a] dark:bg-[#0000001a] dark:text-[#efefef] py-2 px-2 h-fit">
			{label}
		</div>
	);
};

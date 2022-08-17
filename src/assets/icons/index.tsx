import { FC, SVGProps } from 'react';

export type IconType = {
	className: string;
} & SVGProps<SVGSVGElement>;

export const DiscussionsIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			className={className}
			{...props}
		>
			<path
				d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2.5"
			></path>
		</svg>
	);
};

export const ChatIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			fill="currentColor"
			viewBox="0 0 24 24"
			className={className}
			{...props}
		>
			<path d="M9.8147 10.0948c-.6792 0-1.2191.5921-1.2191 1.315 0 .7227.5486 1.3236 1.2191 1.3236.6793 0 1.2192-.6008 1.2192-1.3237.0174-.7228-.54-1.315-1.2192-1.315zm4.3715 0c-.6792 0-1.2191.5921-1.2191 1.315 0 .7227.5486 1.3236 1.2191 1.3236.6793 0 1.2192-.6008 1.2192-1.3237 0-.7228-.54-1.315-1.2192-1.315z"></path>
			<path d="M20.0034.0539H3.9889C2.64.0637 1.5506 1.1594 1.5506 2.5096v.0092-.0004 16.1629c0 1.3533 1.0945 2.4508 2.4465 2.4558H17.539l-.627-2.212 1.524 1.4195 1.4455 1.3411 2.569 2.2642V2.5096c0-1.3532-1.0945-2.4508-2.4466-2.4557ZM15.388 15.6595l-.7838-.9667c.889-.2145 1.636-.7207 2.1527-1.4097l.007-.0097c-.4877.3222-.958.5486-1.376.6966-.9578.4145-2.0733.6556-3.2451.6556a8.4005 8.4005 0 0 1-1.6323-.1593l.0531.0088c-.9878-.2002-1.8648-.5165-2.6764-.9407l.0552.0263-.1132-.061-.0435-.0348c-.2177-.122-.3396-.209-.3396-.209s.5747.958 2.09 1.4108c-.3484.4528-.7925.9928-.7925.9928-2.6386-.0871-3.6488-1.8201-3.6488-1.8201 0-3.8404 1.7242-6.9668 1.7242-6.9668 1.7156-1.2801 3.3527-1.2453 3.3527-1.2453l.122.148c-2.151.6183-3.135 1.5676-3.135 1.5676s.2612-.148.6966-.3484c.7886-.3714 1.7038-.6386 2.6657-.7534l.0426-.0042.209-.0174c.3922-.056.8452-.088 1.3056-.088 1.7258 0 3.3467.449 4.7522 1.2367l-.0491-.0253s-.9493-.9057-2.9783-1.5414l.1742-.1916s1.6285-.0348 3.3527 1.2628c0 0 1.7155 3.1176 1.7155 6.9667 0 0-1.0101 1.7243-3.6574 1.8114z"></path>
		</svg>
	);
};

export const DocsIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			className={className}
			{...props}
		>
			<path
				d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2.5"
			></path>
		</svg>
	);
};

export const FreestyleSparringIcon: FC<IconType> = ({
	className,
	...props
}) => {
	return (
		<svg
			fill="currentColor"
			viewBox="0 0 24 24"
			className={className}
			{...props}
		>
			<path d="m9.441 10.67-2.908 1.233-1.06-2.317 1.848-.05c.543 0 .986-.418 1.06-.96l.296-2.416C8.751 5.568 8.332 5 7.74 4.927a1.106 1.106 0 0 0-1.232.961l-.197 1.48-1.627.049a.786.786 0 0 0-.345.074l-2.268.813a.997.997 0 0 0-.64.616 1.02 1.02 0 0 0 .048.888l2.317 4.659-1.109 6.779c-.123.69.37 1.356 1.06 1.479.074 0 .148.025.222.025a1.27 1.27 0 0 0 1.257-1.085l1.134-6.902 6.113-2.589-2.193-.936a2.199 2.199 0 0 1-.838-.567zM4.574 4.136a2.243 2.243 0 1 1-4.07 1.887 2.243 2.243 0 0 1 4.07-1.887Z"></path>
			<path d="m21.94 6.727-2.268-.814a.87.87 0 0 0-.345-.074l-1.652-.05-.197-1.478c-.074-.592-.641-1.011-1.233-.962a1.11 1.11 0 0 0-.961 1.233l.296 2.415c.073.543.517.937 1.06.962l1.848.05-1.06 2.317-5.768-2.441c-.666-.271-1.405.025-1.676.69-.271.666.024 1.405.69 1.676l6.952 2.959 1.134 6.902a1.27 1.27 0 0 0 1.257 1.085c.074 0 .148 0 .222-.025.69-.123 1.183-.789 1.06-1.48l-1.11-6.778 2.317-4.66c.148-.27.148-.616.05-.887a.946.946 0 0 0-.617-.64zm.465-5.268a2.243 2.243 0 1 1-1.888 4.07 2.243 2.243 0 0 1 1.888-4.07z"></path>
		</svg>
	);
};

export const LeaderboardsIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			className={className}
			{...props}
		>
			<path
				d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2.5"
			></path>
		</svg>
	);
};

export const OpportunitiesIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			className={className}
			{...props}
		>
			<path
				d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			></path>
		</svg>
	);
};

export const PracticeIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			fill="currentColor"
			viewBox="0 0 24 24"
			className={className}
			{...props}
		>
			<path d="M23.477 7.694c-.395-.559-1.312-.795-1.869-.318L20.342 8.46c-3.71-1.833-7.42-3.663-11.129-5.497-1.651-.817-2.512 1.944-.884 2.748l4.011 1.98-2.83 5.437c-.019.039-.032.08-.05.12L2.053 9.843c-1.66-.762-2.537 1.931-.899 2.685l8.863 4.074.5 2.442a272 272 0 0 1-3.176-1.45c-1.643-.767-3.08 1.672-1.428 2.443 2.031.948 4.082 1.852 6.123 2.776 1.268.572 2.405-.733 2.115-1.708v-.02c-.353-1.726-.708-3.452-1.06-5.179.076-.093.152-.19.21-.3l3.08-5.918 3.405 1.68c.384.191.723.183 1.001.055.172-.036.337-.11.478-.23.631-.54 1.26-1.081 1.893-1.62.555-.477.767-1.242.32-1.879z"></path>
			<path d="M16.482 5.579a2.303 2.303 0 1 0 1.145-4.462l-.016-.003a2.303 2.303 0 0 0-1.145 4.461l.016.004z"></path>
		</svg>
	);
};

export const ExpandIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 19 20"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
			></path>
		</svg>
	);
};

export const TagIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			{...props}
		>
			<path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
		</svg>
	);
};

export const ForwardIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 512 512"
			className={className}
			{...props}
		>
			<path d="M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z"></path>
		</svg>
	);
};

export const LockIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			stroke="currentColor"
			className={className}
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M368 192h-16v-80a96 96 0 10-192 0v80h-16a64.07 64.07 0 00-64 64v176a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V256a64.07 64.07 0 00-64-64zm-48 0H192v-80a64 64 0 11128 0z"></path>
		</svg>
	);
};

export const DiscussIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			{...props}
		>
			<g>
				<path fill="none" d="M0 0h24v24H0z"></path>
				<path d="M16.8 19L14 22.5 11.2 19H6a1 1 0 0 1-1-1V7.103a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1h-5.2zM2 2h17v2H3v11H1V3a1 1 0 0 1 1-1z"></path>
			</g>
		</svg>
	);
};

export const CarretDownIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
			className={className}
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clipRule="evenodd"
			></path>
		</svg>
	);
};

export const PassedIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
			className={className}
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
				clipRule="evenodd"
			></path>
		</svg>
	);
};

export const FailedIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
			className={className}
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
				clipRule="evenodd"
			></path>
		</svg>
	);
};

export const SadFaceIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox="0 0 32 32"
			data-tags="sad-face"
			className={className}
			fill="currentColor"
		>
			<g transform="scale(0.03125 0.03125)">
				<path d="M528 928c220.914 0 400-179.086 400-400s-179.086-400-400-400c-220.914 0-400 179.086-400 400s179.086 400 400 400zM384 448c-17.673 0-32-14.327-32-32s14.327-32 32-32c17.673 0 32 14.327 32 32s-14.327 32-32 32zM672 448c-17.673 0-32-14.327-32-32s14.327-32 32-32c17.673 0 32 14.327 32 32s-14.327 32-32 32zM527.402 672c-111.402 0-175.402 64-175.402 64v-32c0 0 64-64 175.402-64s176.598 64 176.598 64v32c0 0-65.195-64-176.598-64z" />
			</g>
		</svg>
	);
};

export const SunIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			fill="currentColor"
			viewBox="0 0 20 20"
			className={className}
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
				fillRule="evenodd"
			></path>
		</svg>
	);
};

export const MoonIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			fill="currentColor"
			viewBox="0 0 20 20"
			className={className}
			{...props}
		>
			<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
		</svg>
	);
};

export const BookmarkIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"
			></path>
		</svg>
	);
};

export const NotificationIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			{...props}
		>
			<path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
		</svg>
	);
};

export const GithubIcon: FC<IconType> = ({ className, ...props }) => {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth="0"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			{...props}
		>
			<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
		</svg>
	);
};

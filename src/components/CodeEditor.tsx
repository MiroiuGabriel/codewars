import { javascript } from '@codemirror/lang-javascript';
import ReactCodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { useEffect, useState } from 'react';
import { ExpandIcon } from '../assets/icons';
import { useTheme } from '../context';
import { editorDarkTheme, editorLightTheme } from '../editorTheme';

type CodeEditorProps = {
	minHeight?: string;
	maxWidth?: string;
	maxHeight?: string;
	height?: string;
	width?: string;
	value: string;
	headerTitle: string;
	className: string;
	wrapperStyle?: string;
	onChange: ReactCodeMirrorProps['onChange'];
};

export const CodeEditor: React.FC<CodeEditorProps> = ({
	minHeight,
	maxWidth,
	value,
	headerTitle,
	height,
	width,
	maxHeight,
	wrapperStyle,
	className,
	onChange,
}) => {
	const [isFullscreen, setIsFullscreen] = useState(false);
	const { theme } = useTheme();
	const editorTheme = theme === 'dark' ? editorDarkTheme : editorLightTheme;

	useEffect(() => {
		if (isFullscreen) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}, [isFullscreen]);

	return (
		<div className={`flex flex-col ${wrapperStyle} overflow-clip`}>
			{isFullscreen && (
				<ExpandIcon
					className="w-5 h-5 dark:text-[#c0c0c0] cursor-pointer hover:text-[#6795de] dark:hover:text-[#6795de] transition-colors ease-in-out duration-200 fixed z-50 top-2 right-2"
					onClick={() => setIsFullscreen(false)}
				/>
			)}
			<div className="flex flex-row p-2 rounded-tr-lg rounded-tl-lg bg-[#ececee] dark:bg-[#222327] items-center justify-between sticky z-30">
				<p className="text-sm font-bold text-gray-800 dark:text-white capitalize">
					{headerTitle}
				</p>
				<ExpandIcon
					className="w-5 h-5 dark:text-[#c0c0c0] cursor-pointer hover:text-[#6795de] dark:hover:text-[#6795de] transition-colors ease-in-out duration-200"
					onClick={() => setIsFullscreen(true)}
				/>
			</div>
			<div
				className={`flex flex-col h-full ${
					isFullscreen
						? ' is-fullscreen dark:bg-[#16171b] bg-[#e4e4e7]'
						: ''
				}`}
			>
				<ReactCodeMirror
					value={value}
					width={width}
					height={height}
					minHeight={minHeight}
					maxWidth={maxWidth}
					maxHeight={maxHeight}
					autoSave="true"
					onChange={onChange}
					lang="javascript"
					theme={editorTheme}
					extensions={[javascript()]}
					className={className}
					basicSetup={{
						autocompletion: false,
					}}
				/>
			</div>
		</div>
	);
};

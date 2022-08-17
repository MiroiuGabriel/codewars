import { javascript } from '@codemirror/lang-javascript';
import ReactCodeMirror from '@uiw/react-codemirror';
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';
import { TagIcon } from '../assets/icons';
import { editorDarkTheme, editorLightTheme } from '../editorTheme';
import { Tag } from './Tag';
import { md } from '../assets';
import { useTheme } from '../context';

const Code = ({ className, children }: { className: any; children: any }) => {
	const { theme } = useTheme();
	const language = className ? className.replace('lang-', '') : null;
	if (language === null) return <code>{children}</code>;
	const editorTheme = theme === 'dark' ? editorDarkTheme : editorLightTheme;
	const syntax = javascript();
	const highlight =
		language === 'js' || language === 'javascript'
			? { extensions: [syntax] }
			: {};

	return (
		<ReactCodeMirror
			value={children}
			theme={editorTheme}
			{...highlight}
			editable={false}
			basicSetup={{
				lineNumbers: false,
				highlightActiveLine: false,
				highlightActiveLineGutter: false,
				foldGutter: false,
				highlightSelectionMatches: false,
				autocompletion: false,
			}}
		></ReactCodeMirror>
	);
};

const options: MarkdownToJSX.Options = {
	overrides: {
		code: Code,
	},
};

export const Instructions = () => {
	return (
		<div className=" dark:bg-[#222327] bg-[#ececee] text-white p-4 rounded-lg h-[calc(100vh-70px)] overflow-y-auto scrollbar w-full">
			<Markdown
				className="prose prose-code dark:prose-invert w-full mb-8 max-w-full code-highlight text-base"
				options={options}
			>
				{md}
			</Markdown>
			<hr className="separator dark:separator-dark" />
			<div className="flex flex-row items-center p-4 space-x-2 mt-4 pl-0">
				<TagIcon className="w-4 h-4 text-gray-800 dark:text-[#efefef]" />
				<div className="flex flex-wrap gap-2">
					<Tag label="Algorithms" />
					<Tag label="Data structure" />
					<Tag label="Mathematics" />
					<Tag label="JavaScript" />
				</div>
			</div>
		</div>
	);
};

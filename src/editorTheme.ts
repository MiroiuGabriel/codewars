import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';
import { tags } from '@lezer/highlight';

const darkTheme: CreateThemeOptions = {
	theme: 'dark',
	settings: {
		background: '#131414',
		foreground: '#cccccc',
		selection: '#4a5964',
		gutterBackground: '#131414',
		gutterForeground: '#515151',
		selectionMatch: '#4a5964',
		caret: '#999999',
		lineHighlight: '#ffffff0d',
		gutterBorder: '#222222',
	},
	styles: [
		{ tag: tags.number, color: '#de935f' },
		{
			tag: tags.comment,
			color: '#969896',
		},
		{
			tag: tags.bracket,
			color: '#cccccc',
		},
		{
			tag: tags.atom,
			color: '#dc7069',
		},
		{
			tag: tags.attributeName,
			color: '#dc7069',
		},
		{
			tag: tags.keyword,
			color: '#b294bb',
		},
		{
			tag: tags.link,
			color: '#a16a94',
		},
		{
			tag: tags.definitionKeyword,
			color: '#b294bb',
		},
		{
			tag: tags.meta,
			color: '#cccccc',
		},
		{
			tag: tags.operator,
			color: '#ddd',
		},
		{
			tag: tags.propertyName,
			color: '#81a2be',
		},
		{
			tag: tags.string,
			color: '#b5bd68',
		},
		{
			tag: tags.tagName,
			color: '#f0c674',
		},

		{
			tag: tags.angleBracket,
			color: '#cccccc',
		},
		{
			tag: tags.bool,
			color: '#dc7069',
		},
		{
			tag: tags.null,
			color: '#dc7069',
		},
		{
			tag: tags.variableName,
			color: '#eee',
		},
		{
			tag: tags.definition(tags.variableName),
			color: '#de935f',
		},
		{
			tag: tags.function(tags.variableName),
			color: '#eee',
		},
		{
			tag: tags.function(tags.definition(tags.variableName)),
			color: '#de935f',
		},
	],
};

const lightTheme: CreateThemeOptions = {
	theme: 'light',
	settings: {
		background: '#ffffff',
		foreground: '#000000',
		selection: '#e0e0e0',
		gutterBackground: '#f9f9f9',
		gutterForeground: '#b0b0b0',
		selectionMatch: '#e0e0e0',
		caret: '#999999',
		lineHighlight: '#fafafa',
		gutterBorder: '#ebebeb',
	},
	styles: [
		{ tag: tags.number, color: '#a34503' },
		{
			tag: tags.comment,
			color: '#8e8e8e',
		},
		{
			tag: tags.bracket,
			color: '#333',
		},
		{
			tag: tags.atom,
			color: '#7b007b',
		},
		{
			tag: tags.attributeName,
			color: '#dc7069',
		},
		{
			tag: tags.keyword,
			color: '#850921',
		},
		{
			tag: tags.link,
			color: '#448844',
		},
		{
			tag: tags.definitionKeyword,
			color: '#850921',
		},
		{
			tag: tags.meta,
			color: '#6b6bbc',
		},
		{
			tag: tags.operator,
			color: '#445358',
		},
		{
			tag: tags.propertyName,
			color: '#3a4f4a',
		},
		{
			tag: tags.string,
			color: '#887836',
		},
		{
			tag: tags.angleBracket,
			color: '#cccccc',
		},
		{
			tag: tags.bool,
			color: '#7b007b',
		},
		{
			tag: tags.null,
			color: '#7b007b',
		},
		{
			tag: tags.tagName,
			color: '#850921',
		},
		{
			tag: tags.variableName,
			color: '#000000',
		},
		{
			tag: tags.definition(tags.variableName),
			color: '#aa6c0b',
		},
		{
			tag: tags.function(tags.variableName),
			color: '#000000',
		},
		{
			tag: tags.function(tags.definition(tags.variableName)),
			color: '#aa6c0b',
		},
	],
};

// const lightThemeMarkdown: CreateThemeOptions = {};

export const editorDarkTheme = createTheme(darkTheme);

export const editorLightTheme = createTheme(lightTheme);

import { KataOutput } from '../context/KataContext';

export const getStatusBorder = (status: string) =>
	status === 'failed'
		? 'border-[#b63d4c] dark:border-[#c45e49]'
		: status === 'success'
		? 'border-green-800 dark:border-[#618320]'
		: status === 'error'
		? 'border-[#b63d4c] dark:border-[#c45e49]'
		: 'border-[#f1f1f2] dark:border-[#5b5c5f]';

export const hasHeader = (output: KataOutput) =>
	(output.status === 'error' && output.error.type === 'STDERR') ||
	output.status === 'failed' ||
	output.status === 'success';

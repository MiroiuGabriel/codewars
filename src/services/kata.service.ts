import { routes } from '../fixtures';

const testKata = async (code: string, fixtures: string) => {
	return await fetch(routes.testKata, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			code,
			fixtures,
		}),
	}).then(res => res.json());
};

const attemptKata = async (kataId: string, code: string) => {
	return await fetch(routes.attemptKata, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			kataId,
			code,
		}),
	}).then(res => res.json());
};

export const kataService = { testKata, attemptKata };

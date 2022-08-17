import { useEffect, useState } from 'react';

const initialCode = `function isPrime(num) {
	//TODO
  }
  `;
const initialFixtures = `describe("Basic", () => {
	it("Basic tests", () => {
		assert.deepEqual(isPrime(1),  false);
		assert.deepEqual(isPrime(0),  false);
		assert.deepEqual(isPrime(2),  true);
		assert.deepEqual(isPrime(73), true);
		assert.deepEqual(isPrime(75), false);
		assert.deepEqual(isPrime(-1), false);
	});
	it("Test prime", () => {
		assert.deepEqual(isPrime(3),  true);
		assert.deepEqual(isPrime(5),  true);
		assert.deepEqual(isPrime(7),  true);
		assert.deepEqual(isPrime(41), true);
		assert.deepEqual(isPrime(5099), true);
	});
});
`;

const codeStateInitial = localStorage.getItem('code') || initialCode;
const fixturesStateInitial = localStorage.getItem('fixture') || initialFixtures;

export const useEditor = () => {
	const [code, setCode] = useState(codeStateInitial);
	const [fixtures, setFixtures] = useState(fixturesStateInitial);

	useEffect(() => {
		localStorage.setItem('code', code);
	}, [code]);

	useEffect(() => {
		localStorage.setItem('fixture', fixtures);
	}, [fixtures]);

	const updateCode = (code: string) => {
		setCode(code);
	};

	const updateFixtures = (fixtures: string) => {
		setFixtures(fixtures);
	};

	const reset = () => {
		setCode(initialCode);
		setFixtures(initialFixtures);
	};

	return { reset, updateCode, updateFixtures, code, fixtures };
};

import { SimplePasswordGenerator } from '../index';

const options = {
	uppercase: false,
	lowercase: false,
	numbers: false,
	symbols: false,
	length: 10,
};

test('exports a constructor', () => {
	const genrator = new SimplePasswordGenerator(options);

	expect(genrator.generatePassword()).toBe('mystrongpassword');
});

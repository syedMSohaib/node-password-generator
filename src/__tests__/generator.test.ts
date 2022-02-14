import { SimplePasswordGenerator } from '../index';

const options = {
	uppercase: false,
	lowercase: true,
	numbers: true,
	symbols: false,
	length: 10,
};

test('exports a constructor', () => {
	const genrator = new SimplePasswordGenerator(options);

	expect(genrator.generatePassword()).toBe('mystrongpassword');
});

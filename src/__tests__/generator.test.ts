import { SimplePasswordGenerator } from '../index';

const special_characters = '!@$%^&*()<>,.?/[]{}-=_+';

test('exports a SimplePasswordGenerator constructor', () => {
	const options = {
		uppercase: true,
		lowercase: false,
		numbers: false,
		symbols: false,
		length: 10,
	};

	const generator = new SimplePasswordGenerator(options);
	expect(generator.generatePassword()).not.toBe('mystrongpassword');
});

test('SimplePasswordGenerator : password should of length 20', () => {
	const generator = new SimplePasswordGenerator({
		uppercase: true,
		length: 20,
	});
	const password = generator.generatePassword();
	expect(password.length).toBe(20);
});

test('SimplePasswordGenerator : password should contain atleast one uppercase', () => {
	const generator = new SimplePasswordGenerator({ uppercase: true });
	const password = generator.generatePassword();
	const regex = /^(?=.*?[A-Z])/g;
	expect(password).toMatch(regex);
});

test('SimplePasswordGenerator : password should contain atleast one lowercase', () => {
	const generator = new SimplePasswordGenerator({ lowercase: true });
	const password = generator.generatePassword();
	const regex = /^(?=.*?[a-z])/g;
	expect(password).toMatch(regex);
});

test('SimplePasswordGenerator : password should contain atleast one number', () => {
	const generator = new SimplePasswordGenerator({ numbers: true });
	const password = generator.generatePassword();
	const regex = /^(?=.*?[0-9])/g;
	expect(password).toMatch(regex);
});

test('SimplePasswordGenerator : password should contain atleast both lowercase and uppercase', () => {
	const generator = new SimplePasswordGenerator({
		uppercase: true,
		lowercase: true,
	});
	const password = generator.generatePassword();
	const regex = /^(?=.*?[a-z])(?=.*?[A-Z])/g;
	expect(password).toMatch(regex);
});

test('SimplePasswordGenerator : password should contain atleast numbers, special, lowercase and uppercase character', () => {
	const generator = new SimplePasswordGenerator({
		uppercase: true,
		lowercase: true,
		numbers: true,
		symbols: true,
		length: 15,
	});
	const password = generator.generatePassword();
	const regex =
		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%)^&*-]).{15}$/g;
	expect(password).toMatch(regex);
});

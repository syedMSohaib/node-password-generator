import { WordsPasswordGenerator } from '../index';

it('exports a WordsPasswordGenerator constructor', () => {
	let filename = '/Users/ssohaib/Desktop/personal/sample/dictionary.txt';

	const wordGenerator = new WordsPasswordGenerator({
		filepath: filename,
		wordcount: 3,
		separator: '_',
	});

	const wordPassword = wordGenerator.generatePassword();

	console.log('wordPassword', wordPassword); //=> "YourPassword"

	expect(wordPassword).not.toBe('');
});

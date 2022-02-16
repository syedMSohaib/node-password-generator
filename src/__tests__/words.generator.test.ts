import { WordsPasswordGenerator } from '../index';

it('exports a WordsPasswordGenerator constructor', async () => {
	let filename = '/Users/ssohaib/Desktop/personal/sample/dictionary.txt';

	const wordGenerator = new WordsPasswordGenerator({
		filepath: filename,
		wordcount: 3,
		separator: '_',
	});

	const wordPassword = await wordGenerator.generatePassword();

	console.log('wordPassword', wordPassword); //=> "YourPassword"

	expect(wordPassword).not.toBe('');
});

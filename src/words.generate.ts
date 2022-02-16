import { WordOptions } from './lib/word.options';
import * as fs from 'fs';

let password: string[] = [];

const MIN_WORD_COUNT = 3;

/**
 * @param  {} {filename
 * @param  {} wordCount
 * @param  {} seprator
 * @param  {{filename:string} }
 * @param  {number} wordCount
 * @param  {string} seprator
 * @param  {} }
 * @returns Promise
 */
function generatePassword({
	filename,
	wordCount,
	seprator,
}: {
	filename: string,
	wordCount: number,
	seprator: string,
}): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		fs.readFile(filename, 'utf-8', function (err: any, data: any) {
			if (err) {
				reject(err);
				throw err;
			}
			var lines = data.split('\n');
			for (let i = 0; i < wordCount; i++) {
				let line = lines[Math.floor(Math.random() * lines.length)];
				password.push(line);
			}

			resolve(password.join(seprator));
		});
	});
}
/**
 * @param  {} {filepath
 * @param  {} wordcount
 * @param  {} separator
 * @param  {WordOptions} }
 * @returns Promise
 */
const generate = async function generate({
	filepath,
	wordcount,
	separator,
}: WordOptions): Promise<string> {
	/**
	 * Building Password
	 */

	if (wordcount == 0)
		throw new Error('Minimum `wordcount` should atleast be 1 ');

	let password = await generatePassword({
		filename: filepath,
		wordCount: wordcount ? wordcount : MIN_WORD_COUNT,
		seprator: separator ? separator : '',
	});

	return password;
};

export default generate;

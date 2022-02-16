import { WordOptions } from './lib/word.options';
import * as fs from 'fs';

let password: string[] = [];

const MIN_WORD_COUNT = 3;

function generatePassword(
	filename: string,
	wordCount: number,
	seprator: string,
): Promise<string> {
	const p = new Promise<string>((resolve, reject) => {
		fs.readFile(filename, 'utf-8', function (err: any, data: any) {
			if (err) {
				reject(err);
				throw err;
			}

			// note: this assumes `data` is a string - you may need
			//       to coerce it - see the comments for an approach
			var lines = data.split('\n');
			// choose one of the lines...
			for (let i = 0; i < wordCount; i++) {
				let line = lines[Math.floor(Math.random() * lines.length)];
				password.push(line);
			}

			resolve(password.join(seprator));
		});
	});

	return p;
}

async function returnPassword(
	path: string,
	wordcount: number,
	separator: string,
): Promise<string> {
	const p = await generatePassword(path, wordcount, separator);
	console.log(p);
	return p;
}

const generate = function generate({
	filepath,
	wordcount,
	separator,
}: WordOptions): string {
	/**
	 * Building Password
	 */

	let password = returnPassword(
		filepath,
		wordcount ? wordcount : MIN_WORD_COUNT,
		separator ? separator : '',
	);

	console.log('password', password, Promise.resolve(password));

	return Promise.resolve(password).toString();
};

export default generate;

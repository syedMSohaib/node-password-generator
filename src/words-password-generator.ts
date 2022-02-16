import { WordOptions } from "./lib/word.options";
import generate from "./words.generate";

export default class WordsPasswordGenerator {
	/**
	 * @constructor
	 * @param {Object} [options] generator options.
	 */
	constructor(public readonly wordoptions: Partial<WordOptions>) {}

	/**
	 * Function, which will generate the password based on provided options.
	 *
	 * @return {string} Genrated result.
	 *
	 * @example
	 *
	 * const options = {
	 *	 uppercase: false,
	 *	 lowercase: true,
	 *	 numbers: true,
	 *	 symbols: false,
	 *	 length: 10
	 * };
	 *
	 * const generator = new SimplePasswordGenerator(options);
	 *
	 * generator.generatePassword(); //=> mystrongpassword
	 */
	generatePassword(wordoptions?: Partial<WordOptions>): string {
		return generate({ ...this.wordoptions, ...wordoptions } as WordOptions);
	}
}

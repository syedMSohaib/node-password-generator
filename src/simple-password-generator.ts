import { Options } from "./lib/options";
import generate from "./generate";

export default class SimplePasswordGenerator {
	/**
	 * @constructor
	 * @param {Object} [options] generator options.
	 */
	constructor(public readonly options: Partial<Options>) {}

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
	generatePassword(options?: Partial<Options>): string {
		return generate({ ...this.options, ...options } as Options);
	}
}

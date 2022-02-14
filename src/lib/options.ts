export interface Options {
	/**
	 * Do you want to have uppercase in your password
	 */
	uppercase?: boolean;
	/**
	 * Do you want to have lowercase in your password
	 */
	lowercase?: boolean;
	/**
	 * Do you want to have numbers in your password
	 */
	numbers?: boolean;
	/**
	 * Do you want to have special characters in your password
	 */
	symbols?: boolean;
	/**
	 * Maximum characters for the password
	 */
	length?: number;
}

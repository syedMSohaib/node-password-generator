export interface WordOptions {
	/**
	 * Path to the words of dictonary
	 */
	filepath: string;
	/**
	 * no of words to be included in password [default is 3]
	 */
	wordcount?: number;
	/**
	 * separator that will be used to join words [default is empty space]
	 */
	separator?: string;
}

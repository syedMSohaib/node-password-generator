import { Options } from './lib/options';
import passwordRandomizer from './password-randomizer';

const uppercase_characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase_characters = 'abcdefghijklmnopqrstuvwxyz';
const numeric_characters = '0123456789';
const special_characters = '!@$%^&*()<>,.?/[]{}-=_+';
const default_length = 10;

export default function generate({
	uppercase,
	lowercase,
	numbers,
	symbols,
	length,
}: Options): string {
	/**
	 * Building Character List
	 */

	let characterList = '';

	if (uppercase === true) characterList += uppercase_characters;

	if (lowercase === true) characterList += lowercase_characters;

	if (numbers === true) characterList += numeric_characters;

	if (symbols === true) characterList += special_characters;

	if (!characterList) {
		throw new Error('No `character` sets selected');
	}

	return passwordRandomizer(characterList, length ? length : default_length);
}

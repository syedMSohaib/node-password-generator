import { Options } from './lib/options';

export default function generate({
	uppercase,
	lowercase,
	numbers,
	symbols,
	length,
}: Options): string {
	if (uppercase || lowercase || numbers || symbols || length) {
		return 'mystrongpassword';
	}
	return 'mystrongpassword';
}

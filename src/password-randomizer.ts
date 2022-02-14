export default function passwordRandomizer(
	characterList: string,
	length: number,
): string {
	// If `characterList` is unset or empty string
	if (!characterList) {
		throw new Error('The `characterList` can not be empty');
	}

	// Initializing, password variable as empty string

	let password = ``;

	// Generate one password based on options
	for (let i = 0; i < length; ++i) {
		password += characterList[Math.round(Math.random() * characterList.length)];
	}

	return password;
}

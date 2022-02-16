# Node Password Generator

> Simple NPM library for generating random passwords.


## Install

```
$ npm install node-password-generator
```

## Simple Password Generator Usage

```js
import { SimplePasswordGenerator } from 'node-password-generator';

const options = {
    uppercase: true,
    lowercase: false,
    numbers: false,
    symbols: false,
    length: 10,     //default
};

const generator = new SimplePasswordGenerator(options);

const password = generator.generatePassword();

console.log(password); //=> "YourPassword"
```

## Words Password Generator Usage

```js

import { WordsPasswordGenerator } from 'node-password-generator';

let filename = '/usr/share/dictionary.txt';

/*

Dictonary is plain txt file random words

Aarhus
Aaron
Ababa
aback
abaft
abandon
abandoned

*/

const wordGenerator = new WordsPasswordGenerator({
    filepath: filename,
    wordcount: 3,       //default word count is 3
    separator: '_',     //to join words default is empty string
});

const wordPassword = await wordGenerator.generatePassword();

console.log('wordPassword', wordPassword); //=> "random_password_generator"

```

## OPTIONS

### SimplePasswordGenerator({...})

##### uppercase 

Type: `Boolean | optional`

When true, the password will contain uppercase characters

##### lowercase

Type: `Boolean | optional`

When true, the password will contain lowercase characters

##### numbers

Type: `Boolean | optional`

When true, the password will contain numeric characters

##### symbols

Type: `Boolean | optional`

When true, the password will contain special characters

##### length

Type: `Number | optional`

Default password length is 10, but it can be override by giving integer value.


### WordsPasswordGenerator({...})
    filepath: filename,
    wordcount: 3,       //default word count is 3
    separator: '_', 
##### filepath 

Type: `String | required`

Complete file path of dictonary file

##### wordcount

Type: `wordcount | optional`

Default word length is 3, & Minimum length is 1, but it can be override by giving integer value.

##### separator

Type: `string | optional`

To join multiple words, Default separator is empty string, but it can be override by giving character/string value.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
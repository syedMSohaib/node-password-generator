# Node Password Generator

> Simple NPM library for generating random passwords.


## Install

```
$ npm install node-password-generator
```

## Usage

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


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
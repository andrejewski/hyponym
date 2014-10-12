Hyponym
=======

Hyponym brings powerful subtypes to JavaScript. Inspired by Haskell's type system, Hyponym is capable of expressing monads and other such constructs along with the more simple literal data types and primitives of JavaScript.

```bash
npm install hyponym
```

Hyponym is designed to have a very simple API and even provides a prelude of common types that you might need everyday.

```javascript
var Hyponym = require('hyponym');

var number = 1890,
	string = "kevin spacey",
	object = {};

Hyponym.Number.validate(number); // true
Hyponym.Number.validate(string); // false

Hyponym.String.validate(string); // true
Hyponym.String.validate(object); // false

Hyponym.Object.validate(object); // true
Hyponym.Object.validate(number); // false
```

## Reference

### Class Methods

```javascript
Hyponym(options) -> Hyponym instance
Hyponym.baseType(type) -> Hyponym instance 
```

### Instance Methods

```javascript
Hyponym#name() -> String
Hyponym#subtype(options) -> Hyponym instance
Hyponym#supertype() -> Hyponym instance
Hyponym#validate(value Any) -> Boolean
Hyponym#assert(value Any, returns Boolean):
	if not Hyponym.validate(value)
		if returns then returns Error
	else throws Error
Hyponym#serialize(value Any) -> Any
```

### Prelude

#### Primitive Types
Primitive types can be found on the Hyponym namespace directly, such as `Hyponym.Number`.

- Number
- String
- Boolean
- Object
- Date
- Array
- RegExp
- Function
- Error

#### Complex Types
Complex types can be required from Hyponym by requiring them from the `lib` directory, like so:

```javascript
var Alphanumeric = require('hyponym/lib/alphanumeric'),
	ArrayList = require('hyponym/lib/array-list');
```

- Alphanumberic
- ArrayList
- Choice (one of a list of types)
- Either
- Email
- Integer
- Maybe
- Range
- Struct
- Tuple

Is your favorite type missing? Open an issue and I'll see what I can do for you. Or go pro and submit an implementation of your own. (See Contributing.)

## Contributing

Contributions are incredibly welcome as long as they are standardly applicable and pass the tests (or break bad ones). Tests are written in Mocha and assertions are done with the Node.js core `assert` module.

```bash
# running tests
npm run test
```

Follow me on [Twitter](https://twitter.com/compooter) for updates or just for the lolz and please check out my other [repositories](https://github.com/andrejewski) if I have earned it. I thank you for reading.

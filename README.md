# ParseTimeSince

This package is to help get the time passed since some event in meaning full manner.

* * *

## Installation

```bash
npm i parseTimeSince
```

or

```bash
yarn add parseTimeSince
```

* * *

## Usage

Suppose, you have a file: [test.js](https://github.com/shresthaoshan/parseTimeSince/blob/master/test.js)

```javascript
const parseTimeSince = require('parseTimeSince');

let elapsedTime = parseTimeSince(1198716962999)
console.log(elapsedTime)
```

Execute the file:

```bash
> node test
12 years ago.
```

* * *

### Author
[![alt text](http://i.imgur.com/0o48UoR.png)](https://github.com/shresthaoshan) [![alt text](http://i.imgur.com/tXSoThF.png)](https://twitter.com/shrestha_oshan) [![alt text](http://i.imgur.com/P3YfQoD.png)](https://facebook.com/oshan.shr)
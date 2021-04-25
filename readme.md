![Cover](https://raw.githubusercontent.com/fwd/cron/master/.github/cover.png)

<h1 align="center">@fwd/cron 💾</h1>

> A NodeJS package to simplify runtime CRON jobs. A sexier setInterval, basically.

## Install

```sh
npm install fwd/cron
```

## Usage

```js

const cron = require('@fwd/cron')

cron(() => {
   // runs every 24 hours
}, 'every 24 hours')

cron(() => {
   // runs every 1 month, and immediately once
}, 'every 1 month', true)

```

## Parameters

```js

cron(function, interval, runImmediately)

````

## Available Intervals

- second(s)
- minute(s)
- hour(s)
- month(s)
- year(s)

This package uses [@fwd/time](https://github.com/fwd/time) to parse time intervals. 

## 👤 Author

* Github: [@fwd](https://github.com/fwd)
* Website: [https://forward.miami](https://forward.miami)

## 🤝 Contributing

Give a ⭐️ if this project helped you!

Contributions, issues and feature requests are welcome! <br />Feel free to check [issues page](https://github.com/fwd/cron/issues).

## 📝 License

MIT License

Copyright © 2021 [Forward Miami](https://forward.miami).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

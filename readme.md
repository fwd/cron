![Cover](https://raw.githubusercontent.com/fwd/cron/master/.github/cover.png)

<h1 align="center">@fwd/cron 💾</h1>

> A NodeJS package to simplify runtime CRON jobs. A sexier setInterval, basically.

## Install

```sh
npm install @fwd/cron
```

## Usage

```js

const cache = require('@fwd/cron')

// run cron every two hours
cron(() => {
   console.log("Hello World, Every 2 Hours")
}, 'every 24 hours')

// run cron every two hours, and run once on init
cron(() => {
   console.log("Hello World, Every 2 Hours, And On Init")
}, 'every 1 month', true)

```

## Parameters

```js

cron(functionToRun, naturalLanguageInterval, runOnInitate)

````

## Natural Language Interval

This package uses [@fwd/time](https://github.com/fwd/time) to parse time intervals. Visit dedicated package page to view available time intervals. 


**Forward Miami**

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

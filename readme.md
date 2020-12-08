![Cover](https://raw.githubusercontent.com/fwd/cron/master/.github/cover.png)

<h1 align="center">@fwd/cron 💾</h1>

> A NodeJS package to simplify runtime CRON jobs. A sexier setInterval, basically.

## Install

```sh
npm install @fwd/cron
```

## Usage

```js

// run cron every two hours
cron(() => {

	console.log("Hello, World, Every 2 Hours")

}, 'every 2 hours')

// run cron every two hours, and run once on init
cron(() => {

	console.log("Hello, World, Every 2 Hours")

}, 'every 2 hours', true)

```

## Parameters

```js

cron(functionToRun, naturalLanguageInterval, runOnInitate)

````

## Natural Language Interval

This package uses [@fwd/time](https://github.com/fwd/time) to parse time intervals. 

## 👤 Author

**Forward Miami**

* Github: [@fwd](https://github.com/fwd)
* Website: [https://forward.miami](https://forward.miami)

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check [issues page](https://github.com/fwd/cron/issues).

## ⭐️ Show your support

Give a star if this project helped you, and help us continue maintaining this project by contributing to it or becoming a sponsor.

[Become a sponsor to fwd](https://github.com/sponsors/fwd)

## 📝 License

Copyright © 2020 [Forward Miami](https://forward.miami). This project is [Apache-2.0](https://spdx.org/licenses/Apache-2.0.html) licensed.
# Ciceron

<img src="https://i.imgur.com/WUDnQ3Q.png" alt="POWERED WITH " width="400"/>

*<span style="color: #305c48">**ciceron**</span> is an npm package that translates file comments from an auto-detected language to another language using the DEEPL© API.*

## Table of Contents

- 🌟 [Features](#features)
- 📌 [Prerequisite](#prerequisite)
- 📦 [Installation](#installation)
- 📖 [Usage](#usage)
  - 🖥️ [CLI Command](#cli-command)
    - 💾 [Using in global context](#if-ciceron-is-installed-globally-run)
    - 🌐 [Using npx](#if-ciceron-is-neither-installed-globally-nor-locally-you-still-can-run)
- ⚙️ [Configuration](#configuration)
- 🈯 [Supported Languages](#supported-languages)
- 🧩 [Dependencies](#dependencies)
- 📄 [License](#license)
- ✍🏻 [Author](#author)

## Features

- Translate file comments from an auto-detected language to another language.
- Replace the original files or generate new files.
- Supports multiple languages.
- Easy to install. Easy to configure. Easy to use.

## Prerequisite

You need a DEEPL API key to use <span style="color: #305c48">**ciceron**</span>. If you don't have one yet, go to [DEEPL](https://www.deepl.com/en/products/api) to create a free account *(up to 500.000 words / months with the free plan )* !

## Installation

We recommend installing <span style="color: #305c48">**ciceron**</span> **globally**:

```bash
npm i -g ciceron
```

<details>
  <summary style="font-style: italic">Installing ciceron locally into your project (requires a script configuration into your package.json file)</summary>
<br>

  If you prefer to install <span style="color: #305c48">**ciceron**</span> locally, we recommend adding it to your project **dev dependencies**:

  ```bash
  npm i ciceron --save-dev
  ```

  Then, add a new script in your `package.json`:

  ```json
  "scripts": {
    "translate": "ciceron translate"
  }
  ```

  Finally, run the following command in your terminal:

  ```bash
  npm run translate <file>
  ```

  You will then be prompted to select the target language and choose whether to replace the original files or generate a new file.

</details>

## Usage

### CLI Command

## If <span style="color: #305c48">**ciceron**</span> is installed globally, run:

```bash
ciceron translate <file>
```

### Example

```bash
# drag and drop the file
ciceron translate ./src/example.js

# or write the file name in plain text
ciceron translate example.js
```

You will then be prompted to select the target language and choose whether to replace the original files or generate a new file.

---


## If <span style="color: #305c48">**ciceron**</span> is neither installed globally nor locally, you still can run:

```bash
npx ciceron translate <file>
```

### Example

```bash
# drag and drop the file
npx ciceron translate ./src/example.js

# or write the file name in plain text
npx ciceron translate example.js
```

You will then be prompted to select the target language and choose whether to replace the original files or generate a new file.

## Configuration

<span style="color: #305c48">**ciceron**</span> requires a short configuration.

Make sure to install [dotenv](https://www.npmjs.com/package/dotenv) locally:

```bash
npm i dotenv
```

Set your DEEPL API key in the `.env` file **at the root of your project**:

```js
// myproject/.env
DEEPL_API_KEY=your_deepl_api_key
```

*Note: With DEEPL's free offer, you have access to an API credit of 500,000 words per month.*

## Supported Languages

<span style="color: #305c48">**ciceron**</span> supports the following languages:
  - English 🇬🇧
  - French 🇫🇷
  - German 🇩🇪
  - Italian 🇮🇹
  - Spanish 🇪🇸
  - Dutch 🇳🇱
  - Portuguese 🇵🇹
  - Japanese 🇯🇵
  - Korean 🇰🇷
  - Chinese (simplified) 🇨🇳
  - Ukrainian 🇺🇦
  - Russian 🇷🇺

## Dependencies

- [chalk](https://www.npmjs.com/package/chalk)
- [commander](https://www.npmjs.com/package/commander)
- [deepl-node](https://www.npmjs.com/package/deepl-node)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [figlet](https://www.npmjs.com/package/figlet)
- [fs-extra](https://www.npmjs.com/package/fs-extra)
- [inquirer](https://www.npmjs.com/package/inquirer)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Author

Louis-Antonin Lesieur

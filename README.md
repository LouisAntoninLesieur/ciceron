# Ciceron

![POWERED WITH ](https://i.imgur.com/WUDnQ3Q.png)

<span style="color: #305c48">**Ciceron**</span> is an npm package that translates in files comments from auto-detected language to another language using the DEEPL© API.

## Installation

We recommend installing <span style="color: #305c48">**ciceron**</span> globally:

```bash
npm i -g ciceron
```

<details>
  <summary style="font-style: italic">Installing ciceron locally (not recommended)</summary>
<br>

  If you prefer to install <span style="color: #305c48">**ciceron**</span> locally, we recommend adding it to your project dev dependencies:

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
</details>

## Usage

### CLI Command

To use the <span style="color: #305c48">**ciceron**</span> CLI command, run:

#### If <span style="color: #305c48">**ciceron**</span> is installed globally:

```bash
ciceron translate <file>
```

### Example

```bash
ciceron translate ./src/example.js
```

#### If <span style="color: #305c48">**ciceron**</span> is not installed globally or locally:

```bash
npx ciceron translate <file>
```

You will be prompted to select the target language and choose whether to replace the original files or generate a new file.

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

Don't have a DEEPL API key yet? Go to [DEEPL](https://www.deepl.com/en/products/api) to create a free account!

*Note: With DEEPL's free offer, you have access to an API credit of 500,000 words per month.*

## Dependencies

- [chalk](https://www.npmjs.com/package/chalk)
- [commander](https://www.npmjs.com/package/commander)
- [deepl-node](https://www.npmjs.com/package/deepl-node)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [figlet](https://www.npmjs.com/package/figlet)
- [fs-extra](https://www.npmjs.com/package/fs-extra)
- [inquirer](https://www.npmjs.com/package/inquirer)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Louis-Antonin Lesieur

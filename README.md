# Ciceron Translate

Ciceron Translate is an npm package that translates comments in files from an auto-detected language to another language using the DEEPL© API.

## Installation

To install the package, use npm:

```bash
coming soon
```

## Usage

### CLI Command

To use the `ciceron` CLI command, run:

```bash
ciceron translate <file>
```

### Example

```bash
ciceron translate ./src/example.js
```

You will be prompted to select the target language and choose whether to replace the original files or generate a new file.

## Configuration

Make sure to set your DEEPL API key in a `.env` file at the root of your project:

```
DEEPL_API_KEY=your_deepl_api_key
```

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
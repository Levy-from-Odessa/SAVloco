# **SAVloco**

**_testing mode_**

---

#### Installation

```
	yarn add savloco
```

_or_

```
	npm install savloco
```

---

### Basic usage

1. Create configuration script `savloco.json` that tells what files to upload and how to process downloaded translations.
2. Run

```
 	yarn savloco
```

_or_

```
 	npm run savloco
```

---

##### Typical example of savloco.json

```
{
	"inputFile": "src/locals/input.json",
	"localsDir": "src/locals"
}
```

inputFile
: file in which default words with format of { key: word }, where _key_ is used in application code and _word_ is a meaning of it

outputDir
: directory where JSON files located of format of [code language].json (en.json, he.json). In that files is or will be a list of translation like in inputFile file, but with translated _word_.

Package for working with microsoft azure API and loclaise

[Locolaise](https://localise.biz) - Translation Management for Developers

[Microsoft translator](https://www.microsoft.com/en-us/translator/) - Translation API

### Features

- [x] Auto translation
- [ ] Upload dictionary
- [ ] Download dictionary

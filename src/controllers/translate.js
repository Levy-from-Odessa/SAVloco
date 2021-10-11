const chalk = require('chalk');
const figlet = require('figlet');

const fileManager = require('../utils/fileManager')

const translationValidation = require('../interface/translationValidation')

const microsoftService = require('../services/microsoftService')


const getTranslation = async (word, lang, prefix = '') => {
  try {
    const translated = await microsoftService.translate({
			lang,
			text: word,
    });


		const {isCorrect} = await translationValidation.askTranslation(word, 'translated', prefix);
		if(!isCorrect){
			const {newTranslation} = await translationValidation.askNewTranslation(word, prefix)
			return newTranslation;
		}
		return translated;
  } catch (error) {
    console.log(error.response || error);
  }
};

const translateObject = async (translations, lang, prefix = '') => {
	return await Object.entries(translations).reduce(
		async (newTranslation, [key, value] ) => {
		// already translated
		const prevData = await newTranslation;
		// inner object words
		let innerTrans = null;

		if (typeof value !== "string" && Object.keys(value).length > 0) {
			// recursion if there are any inner data
			const newPrefix = prefix ? prefix+'.'+key : key;


			innerTrans = await translateObject(value, lang, newPrefix);
			return {
				[key]: innerTrans,
				...prevData,
			};
		} else {
			// string value
			const translatedWord = await getTranslation(value, lang, prefix);
			return {
				[key]: translatedWord,
				...prevData,
			};
		}
	},
	Promise.resolve({})
  );
	
}


const languageDefinition = async () => {
	const {lang} = await translationValidation.askLang()
	if(lang === 'other') {
		const {newLang} = await translationValidation.askNewLang()
		return newLang 
	}
	return lang
}


translateFile = async ({inputFile, localsDir}) => {
	const lang = await languageDefinition()
	console.log(lang);

	const data = fileManager.readJSONfile(inputFile)

  const translations = await translateObject(data, lang)  

	fileManager.writeJSONfile(localsDir + "/" + lang + ".json", translations);
	console.log('success');

	console.log(
		chalk.green(
			figlet.textSync('Translated', { horizontalLayout: 'full' })
		)
);

}

module.exports  = translateFile
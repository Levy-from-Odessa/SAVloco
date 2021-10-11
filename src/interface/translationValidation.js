
const inquirer = require('inquirer');

module.exports = {
  askLang: () => {
    const questions = [
      {
        name: 'lang',
        type: 'list',
        message: 'To which lang you want to translate?',
        choices: ['he', 'ru', 'es', 'other'],
      },
    ];
    return inquirer.prompt(questions);
  },
  askNewLang: () => {
    const questions = [
      {
        name: 'newLang',
        type: 'input',
        message: 'Pls, let us know to which lang to translate:',
      },
    ];
    return inquirer.prompt(questions);
  },


  askTranslation: (word, translation, prefix) => {
    const questions = [
      {
        name: 'isCorrect',
        type: 'confirm',
        message: `Is it a right translation ${translation} for ${prefix}.${word}?`,
        default: true
      },
    ];
    return inquirer.prompt(questions);
  },
  askNewTranslation: (word, prefix) => {
    const questions = [
      {
        name: 'newTranslation',
        type: 'input',
        message: `translation for the word ${prefix}.${word}:`,
      },
    ];
    return inquirer.prompt(questions);
  },
};
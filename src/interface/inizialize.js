const inquirer = require('inquirer');

module.exports = {
  askActivity: () => {
    const questions = [
      {
        name: 'activity',
        type: 'list',
        message: 'What do you want to execute:',
        choices: ['auto translate', 'download from loco', 'upload to loco'],
        default: 'auto translate'
      },
    ];
    return inquirer.prompt(questions);
  },
};

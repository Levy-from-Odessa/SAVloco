#!/usr/bin/env node


const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');

const fileManager = require('./utils/fileManager')

const inizialize = require('./interface/inizialize')

const translateController = require('./controllers/translate')



if (!fileManager.directoryExists('savloco.json') ) {
  console.log(chalk.red('Pls, define savloco.json!'));
  process.exit();
}
const {inputFile, localsDir} = fileManager.readJSONfile('savloco.json')
console.log({inputFile, localsDir});





clear();

console.log(
  chalk.yellowBright(
    figlet.textSync('SAVloco', { horizontalLayout: 'full' })
  )
);


const main = async () => {
  


  const {activity} = await inizialize.askActivity();
  switch (activity){
    case 'auto translate':
      console.log('Translate');
      translateController({inputFile, localsDir })


    // case 'download from loco':
    //   console.log('Translate');
    //   translateController({inputFile, outputFile})

  }
      
};

main();
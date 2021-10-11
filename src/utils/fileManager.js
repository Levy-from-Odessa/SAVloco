const fs = require('fs');
const path = require('path');



const getCurrentDirectoryBase= () => {
  console.log(process.cwd());
  // return path.basename(process.cwd());
  return process.cwd()
}

const directoryExists= (filePath) => {
  return fs.existsSync(getCurrentDirectoryBase() + '/' + filePath);
}

const readJSONfile = (filePath) => {
  try {
    const data = fs.readFileSync(
      getCurrentDirectoryBase() + '/' + filePath, 'utf8'
    );
    const translations = JSON.parse(data);
    return translations;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


const writeJSONfile = (filePath, data) => {
  try {
    console.log(data);
    const translations = JSON.stringify(data);
    fs.writeFileSync(
      getCurrentDirectoryBase() + '/' + filePath, translations
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = {
  getCurrentDirectoryBase,
  directoryExists,
  readJSONfile,
  writeJSONfile,
};

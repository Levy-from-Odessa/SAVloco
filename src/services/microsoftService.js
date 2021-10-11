require('dotenv').config()
const axios = require('axios')

const Api = axios.create({
  baseURL: process.env.MICROSOFT_URL,
  headers: {
    "content-type": "application/json",
    "Ocp-Apim-Subscription-Key": process.env.MICROSOFT_KEY,
    "Ocp-Apim-Subscription-Region": process.env.MICROSOFT_REGION,
  },
});

const translate =async ({text, lang}) => {
  if (process.env.NODE_ENV === 'development') {
    return 'Translated'
  }

  const  translation = await Api.post(`/translate?api-version=3.0&from=en&to=${lang}`, [{'text': text}]);
  return translation.data[0].translations[0].text;
};
module.exports = {
    translate,
};

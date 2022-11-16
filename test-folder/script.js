const questionpro = require('questionpro')

const qpapi = new questionpro("acd394fc-3f02-4647-b836-18a7b82493");

qpapi.getSurveyList(1827)
    .then(data => console.log(data))    
    .catch(e => console.log('ERROR'))
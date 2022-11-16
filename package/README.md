# Usage

```
const questionpro = require('questionpro')
 
const accessToken = '<<Your QuestionPro API Key>>';
const userID = '<<Your QuestionPro User ID>>';
 
try {
    const qpapi = new questionpro("acd394fc-3f02-4647-b836-18a7b8243937");
} catch (err) {
    console.log(err.message);
}
 
qpapi.getSurveyList(userID)
    .then(data => console.log(data))
    .catch(err => console.error(err))

```
 

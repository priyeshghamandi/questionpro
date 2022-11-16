# Usage

```js
const questionpro = require('questionpro')
 
const apiKey = '<<Your QuestionPro API Key>>';
const userID = '<<Your QuestionPro User ID>>';
 
try {
    const qpapi = new questionpro(apiKey);
} catch (err) {
    console.log(err.message);
}
 
qpapi.getSurveyList(userID)
    .then(data => console.log(data))
    .catch(err => console.error(err))

```
 

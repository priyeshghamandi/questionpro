var rp = require('request-promise');

function serialize(obj) {
    return '?' + Object.keys(obj).map(k => k + '=' + encodeURIComponent(obj[k])).join('&');
}

class QuestionPro {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.version = 'v2';
        this.httpUri = 'https://api.questionpro.com/a/api';
    }

    getSurveyList(userID) {
        return this._get(`users/${userID}/surveys`);
    }

    getSurvey(surveyID) {
        return this._get(`surveys/${surveyID}`);
    }

    createSurvey(userID,body){
        return this._post(`users/${userID}/surveys/`,'',body);
    }

    createQuestion(surveyID,body){
        return this._post(`surveys/${surveyID}/questions`,'',body);
    }

    createResponse(surveyID,body){
        return this._post(`surveys/${surveyID}/responses`,'',body);
    }

    getQuestion(questionID,surveyID) {
        return this._get(`surveys/${surveyID}/questions/${questionID}`);
    }


    _get(url, query) {
        const params = { method: 'GET', json: true  };
        return this._request(url, params, query);
    }

    _post(url,query,data) {
        const params = { method: 'POST'};
        const body = {body: data}
        return this._request(url, params, query, body);
    }

    _request(url, params, query, body) {        
        if (query && typeof query !== 'object') throw new Error('Wrong parameters type')

        const fullOptions = Object.assign(
            {},
            {
                url: `${this.httpUri}/${this.version}/${url}${query ? serialize(query) : ''}?apiKey=`+this.apiKey,
                headers: {
                    'Content-Type' : 'application/json'
                },
                json: true
            },
            params,
            body,
        );
        return rp(fullOptions).then(data => data);
    }
}
module.exports = QuestionPro;
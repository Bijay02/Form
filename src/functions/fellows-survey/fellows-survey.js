
const axios = require('axios');
const ENDO_FORM_API = 'https://www.endoitservices.com/XdcFellowsSurveySvc/api/XdcFellowsSurvey';
const ENDO_AUTH_KEY = '6LeXeboZAAAAAAJ7opsQpnfBVkXwbGTrPWJoJsjY';

exports.handler = async (event) => {
    console.log('received event');
    console.log('event', event.body)
    const { SubscriberId, Q1Response, Q2Response, Q3Response, Q4Response, Q5Response, Q6Response, RecaptchaToken } = JSON.parse(event.body);
    const data = {
        SubscriberId,
        Q1Response,
        Q2Response,
        Q3Response,
        Q4Response,
        Q5Response,
        Q6Response,
        "RecaptchaToken": "NO_TOKEN"
    };
    try {
        const response = await axios.post(ENDO_FORM_API, data, {
            headers: {
                'AuthKey': ENDO_AUTH_KEY
            }
        });
        console.log(response.data)
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify(err)
        };
    }
};
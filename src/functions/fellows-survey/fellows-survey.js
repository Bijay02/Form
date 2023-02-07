
const axios = require('axios');
const ENDO_FORM_API = '';

exports.handler = async (event) => {
    const { SubscriberId, Q1Response, Q2Response, Q3Response, Q4Response, Q5Response, Q6Response, RecaptchaToken } = JSON.parse(event.body);
    const data = {
        SubscriberId,
        Q1Response,
        Q2Response,
        Q3Response,
        Q4Response,
        Q5Response,
        Q6Response,
        RecaptchaToken
    };
    try {
        const response = await axios.post(ENDO_FORM_API, data, {
            headers: {
                'AuthKey': '6LeXeboZAAAAAAJ7opsQpnfBVkXwbGTrPWJoJsjY'
            }
        });
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
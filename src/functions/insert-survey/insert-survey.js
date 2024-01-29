
const axios = require('axios');
const ENDO_FORM_API = 'https://www.endoitservices.com/XdcSpeakerProgramSurveySvc/api/InsertSurvey';
const ENDO_AUTH_KEY = '23bf1a5d-ce58-4b35-a910-c88f96b1f9c9';

exports.handler = async (event) => {

    const { Q1, Q2, Q3, Q4, Q5, Q6, Q7, source, RecaptchaToken } = JSON.parse(event.body);

    const data = {
        Q1,
        Q2,
        Q3,
        Q4,
        Q5,
        Q6,
        Q7,
        source: source ?? '',
        RecaptchaToken
    };
    try {
        const response = await axios.post(ENDO_FORM_API, data, {
            headers: {
                'AuthKey': ENDO_AUTH_KEY
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        };
    } catch (err) {

        return {
            statusCode: 500,
            body: JSON.stringify(err)
        };
    }
};
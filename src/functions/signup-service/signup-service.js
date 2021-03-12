
const axios = require('axios');


const ENDO_GET_SFMC_ID_URL='https://www.endoitservices.com/IDGeneratorSvc/api/Id'
const ENDO_TOKEN_REQUEST_URL='https://mcslpmclq6r705hx7l3wfrnc2sl1.auth.marketingcloudapis.com/v2/token'
const ENDO_POST_SFMC_EVENT_URL='https://mcslpmclq6r705hx7l3wfrnc2sl1.rest.marketingcloudapis.com/interaction/v1/events'

// const ENDO_ACCOUNT_ID='110005582'
// const ENDO_CLIENT_ID='x31ahjzr15s7zqxgn1g9euet'
// const ENDO_CLIENT_SECRET='YDsIjRK4h6XCSfqw3sCpjCim'


exports.handler = async (event, context, callback) => {
  const dataToSend = JSON.parse(event.body)
  console.log('submission data');

  console.log(dataToSend)

  return axios.get(ENDO_GET_SFMC_ID_URL)
    .then( response => {
      console.log('SFMC have ID');
      console.log(response.data);
      const requestID = response.data; 

      const requestData = {
        "grant_type": "client_credentials",
        "client_id": ENDO_CLIENT_ID,
        "client_secret": ENDO_CLIENT_SECRET,
        "account_id": ENDO_ACCOUNT_ID
      }
      // set unique request id
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      dataToSend.Data.REG_ID = requestID;  
      return axios.post(ENDO_TOKEN_REQUEST_URL, requestData, config)
    })
    .then( response => {
      console.log('SFMC have access token');
      console.log(response.data);
      const token = response.data.access_token;
      const config = {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'}
      };
      return axios.post(ENDO_POST_SFMC_EVENT_URL, dataToSend, config)
    })
    .then( response => {
      console.log('SFMC SENT!');
      console.log(response.data);
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({ message: `SFMC message sent sucessfully` }),
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
        // // more keys you can return:
        // headers: { "headerName": "headerValue", ... },
        // isBase64Encoded: true,
      })

    })
    .catch( error => {
      console.log('error', error)
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
    })

};

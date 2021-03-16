const hostName = typeof window !== "undefined" && window.location.host;
const API_ENDPPOINT = {
  integration:
    "https://events-dupuytrens-contracture-xiaflex-integration.azurewebsites.net/aahs2021_reg_service/api/Registration",
  staging:
    "https://events-dupuytrens-contracture-xiaflex-staging.azurewebsites.net/aahs2021_reg_service/api/Registration",
  production:
    "https://events.dupuytrens-contracture.xiaflex.com/aahs2021_reg_service/api/Registration",
};

let endpoint = "";
if (hostName) {
  if (
    hostName.indexOf("integration") !== -1 ||
    hostName.indexOf("localhost") !== -1 ||
    hostName.indexOf("netlify.app") !== -1
  ) {
    endpoint = API_ENDPPOINT.integration;
  } else if (hostName.indexOf("staging") !== -1) {
    endpoint = API_ENDPPOINT.staging;
  } else {
    endpoint = API_ENDPPOINT.production;
  }
}

export default endpoint;

const { RestClient } = require('gateio-api');

  // This example shows how to call this Gate.io API endpoint with either node.js, javascript (js) or typescript (ts) with the npm module "gateio-api" for Gate.io exchange
  // This Gate.io API SDK is available on npm via "npm install gateio-api"
  // ENDPOINT: /delivery/{settle}/orders/{order_id}
  // METHOD: DELETE
  // PUBLIC: NO
  // Link to function: https://github.com/tiagosiebler/gateio-api/blob/master/src/RestClient.ts#L2853

const client = new RestClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.cancelDeliveryOrder(params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

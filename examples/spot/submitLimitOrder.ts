import { RestClient } from '../../src'; // For an easy demonstration, import from the src dir. Normally though, see below to import from the npm installed version instead.
// import { RestClient } from 'gateio-api'; // Import the RestClient from the published version of this SDK, installed via NPM (npm install gateio-api)

// Define the account object with API key and secret
const account = {
  key: process.env.API_KEY || 'yourApiHere', // Replace 'yourApiHere' with your actual API key
  secret: process.env.API_SECRET || 'yourSecretHere', // Replace 'yourSecretHere' with your actual API secret
};

// Initialize the RestClient with the API credentials
const gateRestClient = new RestClient({
  apiKey: account.key,
  apiSecret: account.secret,
});

async function submitSpotOrder() {
  try {
    console.log('Using API keys:', account);

    // Submit a limit order for spot trading
    const result = await gateRestClient.submitSpotOrder({
      currency_pair: 'BTC_USDT', // Specify the currency pair
      side: 'buy', // Specify the order side: 'buy' or 'sell'
      type: 'limit', // Specify the order type: 'limit'
      amount: '0.001', // Specify the amount to buy
      price: '45000', // Specify the limit price
      time_in_force: 'gtc', // Time in force: 'gtc' (Good Till Cancelled)
    });

    console.log('Response: ', result); // Log the response to the console
  } catch (e) {
    console.error(`Error in execution: `, e); // Log any errors that occur
  }
}

// Execute the function to submit a spot order
submitSpotOrder();

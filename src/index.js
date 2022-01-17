const Helper = require('./utils/helper');
const { SUPPORTED_CURRENCIES } = require('./constants');
const { INVALID_CURRENCY_ERROR } = require('./constants/responses')
class TokenRatesController {

  async getTokenRates({ contractAddresses, currencies,chain }) {

    let invalidCurrencies = [];
    let validCurrencies = [];

    currencies.forEach((currency) => {
      if (!SUPPORTED_CURRENCIES.includes(currency)) {
        invalidCurrencies.push(currency);
      }
      else
        validCurrencies.push(currency)
    });

    const tokens = contractAddresses.join(',');
    validCurrencies = validCurrencies.join(',');
    const query = `contract_addresses=${tokens}&vs_currencies=${validCurrencies}`;


    const { url: COINGEKO_URL } = await Helper.getBaseURL(chain); 
    let url = `${COINGEKO_URL}?${query}`;

    const { response } = await Helper.getRequest({ url });


    if (invalidCurrencies.length) {
      return {
        ...response,
        'Invalid Currencies': invalidCurrencies,
      }
    }

    return response;
  }
}
module.exports = { TokenRatesController: TokenRatesController }
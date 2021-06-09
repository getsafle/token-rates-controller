const Helper = require('./utils/helper');
const { SUPPORTED_CURRENCIES, COINGEKO_BASE_URL } = require('./constants');
const { INVALID_CURRENCY_ERROR } = require('./constants/responses')
class TokenRatesController {

  async getTokenRates({ contractAddresses, currencies }) {

    if (!currencies.every(element => SUPPORTED_CURRENCIES.includes(element))) {
      return INVALID_CURRENCY_ERROR;
    }

    const tokens = contractAddresses.join(',');
    currencies = currencies.join(',');
    const query = `contract_addresses=${tokens}&vs_currencies=${currencies}`;

    let url = `${COINGEKO_BASE_URL}?${query}`;

    const { response } = await Helper.getRequest({ url });

    return response;
  }
}
module.exports = { TokenRatesController: TokenRatesController }
const Helper = require('./utils/helper');
const { SUPPORTED_CURRENCIES, COINGEKO_BASE_URL } = require('./constants');
const { INVALID_CURRENCY_ERROR } = require('./constants/responses')
class TokenRatesController {

  async getTokenRates({ contractAddresses, currency }) {
    if (!SUPPORTED_CURRENCIES.includes(currency)) {
      return INVALID_CURRENCY_ERROR;
    }

    const tokens = contractAddresses.join(',');
    const query = `contract_addresses=${tokens}&vs_currencies=${currency}`;

    let url = `${COINGEKO_BASE_URL}?${query}`;

    const { response } = await Helper.getRequest({ url });

    return response;
  }
}
module.exports = { TokenRatesController: TokenRatesController }
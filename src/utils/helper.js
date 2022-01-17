const { COINGEKO_BASE_URL } = require('../constants/index')
const axios= require('axios');

async function getRequest({ url }) {
    try {
      const response = await axios({
          url,
          method: 'GET',
      });
  
      return { response: response.data };
    } catch (error) {
      return { error: error.response };
    }
}
  

async function getBaseURL(chain){
  switch (chain) {
    case 'ethereum': {
       let url =  `${COINGEKO_BASE_URL}/ethereum`;

        return { url };
    }
    case 'polygon':{
      let url =  `${COINGEKO_BASE_URL}/polygon-pos`;

      return { url };
    }
    default: {
        return { error: INVALID_CHAIN_SELECTED };
    }
}
}
module.exports = { getRequest, getBaseURL };
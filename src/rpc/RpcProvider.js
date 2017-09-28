/* global easyXDM:true */
import 'madlib-shim-easyxdm';
import ConfigLoader from '../loaders/ConfigLoader';
import CardTokenizer from '../tokenizers/CardTokenizer';

export default class RpcProvider {
    constructor() {
        new easyXDM.Rpc({},
            {
                local: {
                    createToken: this.createToken
                }
            });
    }

    createToken(accessToken, cardData, callback) {
        ConfigLoader.load().then((config) =>
            CardTokenizer.createToken(config.capiEndpoint, accessToken, cardData)
                .then((payload) => callback({type: 'resolve', data: payload}))
                .catch((error) => callback({type: 'reject', data: error})));
    }
}

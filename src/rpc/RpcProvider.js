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

    createToken(accessToken, cardData, success, error) {
        ConfigLoader.load().then((config) =>
            CardTokenizer.createToken(config.capiEndpoint, accessToken, cardData)
                .then(capiRes => success(capiRes))
                .catch(cause => error(cause)));
    }
}

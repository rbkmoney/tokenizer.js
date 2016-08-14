/* global easyXDM:true */
import 'madlib-shim-easyxdm';
import CardTokenizer from '../tokenizers/CardTokenizer';

export default class {
    constructor() {
        new easyXDM.Rpc({},
            {
                local: {
                    createToken: CardTokenizer.createToken
                }
            });
    }
}

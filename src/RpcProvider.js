import 'madlib-shim-easyxdm';
import CardTokenizer from './CardTokenizer';

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

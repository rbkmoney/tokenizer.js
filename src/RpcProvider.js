import 'madlib-shim-easyxdm';
import CardTokenizer from './CardTokenizer';

export default class {
    static initProvider() {
        new easyXDM.Rpc({},
            {
                local: {
                    createToken: CardTokenizer.createToken
                }
            });
    }
}

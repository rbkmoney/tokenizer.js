/* global easyXDM:true */
import 'madlib-shim-easyxdm';

export default class {
    constructor(providerEndpoint) {
        return new easyXDM.Rpc({
            remote: `${providerEndpoint}/provider.html`
        }, {
            remote: {
                createToken: {}
            }
        });
    }
}

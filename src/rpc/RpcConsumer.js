/* global easyXDM:true */
import 'madlib-shim-easyxdm';
import Utils from '../utils/Utils';

export default class {
    constructor(host) {
        const url = Utils.getOrigin(host);
        return new easyXDM.Rpc({
            remote: `${url}/provider.html`
        }, {
            remote: {
                createToken: {}
            }
        });
    }
}

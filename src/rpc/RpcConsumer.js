/* global easyXDM:true */
import 'madlib-shim-easyxdm';
import settings from '../settings';

export default class {
    constructor() {
        return new easyXDM.Rpc({
            remote: `${settings.host}/provider.html`
        }, {
            remote: {
                createToken: {}
            }
        });
    }
}

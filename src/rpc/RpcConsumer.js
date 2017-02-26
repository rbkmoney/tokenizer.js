/* global easyXDM:true */
import 'madlib-shim-easyxdm';
import Utils from '../utils/Utils';

export default class {
    constructor() {
        const url = Utils.getOrigin(Utils.getScriptUrl());
        return new easyXDM.Rpc({
            remote: `${url}/provider.html`
        }, {
            remote: {
                createToken: {}
            }
        });
    }
}

import 'madlib-shim-easyxdm';
import settings from './settings'

export default class {
    static initConsumer() {
        return new easyXDM.Rpc({
            remote: settings.host + '/provider.html'
        }, {
            remote: {
                createToken: {}
            }
        });
    }
}

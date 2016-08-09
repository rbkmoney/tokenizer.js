import RpcProvider from './RpcProvider';
import RpcConsumer from './RpcConsumer';
import settings from './settings';
import polyfill from './polyfill';
import Fingerprint from 'fingerprintjs2';

(function () {
    polyfill();
    if (settings.host.includes(window.location.host)) {
        new RpcProvider();
    } else {
        let fingerprint = '';
        new Fingerprint().get(result => fingerprint = result);
        const rpc = new RpcConsumer();
        window.Tokenizer = {
            card: {
                createToken: (cardData, success, error) => rpc.createToken(cardData, fingerprint, success, error)
            }
        };
    }
})();

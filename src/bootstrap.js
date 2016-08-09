import RpcProvider from './RpcProvider';
import RpcConsumer from './RpcConsumer';
import settings from './settings';
import polyfill from './polyfill';

(function () {
    polyfill();
    if (settings.host.includes(window.location.host)) {
        RpcProvider.initProvider();
    } else {
        const rpc = RpcConsumer.initConsumer();
        window.Tokenizer = {
            card: {
                createToken: rpc.createToken
            }
        };
    }
})();

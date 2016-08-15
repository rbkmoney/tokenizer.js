import RpcProvider from './rpc/RpcProvider';
import RpcConsumer from './rpc/RpcConsumer';
import ClientInfo from './clientInfo/ClientInfo';
import settings from './settings';
import includes from './polyfills/includes';

(function init() {
    includes();
    if (settings.host.includes(window.location.host)) {
        new RpcProvider();
    } else {
        const clientInfo = new ClientInfo();
        const rpc = new RpcConsumer();
        window.Tokenizer = {
            card: {
                createToken: (cardData, success, error) => {
                    const request = {
                        paymentTool: cardData,
                        clientInfo: clientInfo.getInfo()
                    };
                    rpc.createToken(request, success, error);
                }
            }
        };
    }
}());

import RpcConsumer from './rpc/RpcConsumer';
import ClientInfo from './clientInfo/ClientInfo';
import getOrigin from './utils/getOrigin';

(function init() {
    const clientInfo = new ClientInfo();
    const consumer = new RpcConsumer(getOrigin());
    let accessToken;
    this.Tokenizer = {
        setAccessToken: token => (accessToken = token),
        card: {
            createToken: (cardData, success, error) => {
                if (accessToken) {
                    const request = {
                        paymentTool: cardData,
                        clientInfo: clientInfo.getInfo()
                    };
                    consumer.createToken(accessToken, request, success, error);
                } else {
                    error({message: 'Access token required'});
                }
            }
        }
    };
}).call(window || {});

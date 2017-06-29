import RpcConsumer from './rpc/RpcConsumer';
import getOrigin from './utils/getOrigin';

(function init() {
    const consumer = new RpcConsumer(getOrigin());
    let accessToken;
    this.Tokenizer = {
        setAccessToken: token => (accessToken = token),
        card: {
            createToken: (cardData, success, error) => {
                if (accessToken) {
                    consumer.createToken(accessToken, cardData, success, error);
                } else {
                    error({message: 'Access token is required'});
                }
            }
        }
    };
}).call(window || {});

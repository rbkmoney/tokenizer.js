import 'core-js/es6/promise';
import RpcConsumer from './rpc/RpcConsumer';
import getOrigin from './utils/getOrigin';
import isFunction from './utils/isFunction';

(function init() {
    const consumer = new RpcConsumer(getOrigin());
    let accessToken;
    this.Tokenizer = {
        setAccessToken: token => (accessToken = token),
        card: {
            createToken: (cardData, successFn, errorFn) => {
                if (accessToken) {
                    consumer.createToken(accessToken, cardData, (response) => {
                        if (response.type === 'resolve' && isFunction(successFn)) {
                            successFn(response.data);
                        } else if (response.type === 'reject' && isFunction(errorFn)) {
                            errorFn(response.data);
                        }
                    });
                } else {
                    errorFn({message: 'Access token is required'});
                }
            }
        }
    };
}).call(window || {});

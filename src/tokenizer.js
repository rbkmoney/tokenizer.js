import RpcConsumer from './rpc/RpcConsumer';
import ClientInfo from './clientInfo/ClientInfo';

(function init() {
    const clientInfo = new ClientInfo();
    const rpc = new RpcConsumer();
    let publicKey;
    this.Tokenizer = {
        setPublicKey: key => (publicKey = key),
        card: {
            createToken: (cardData, success, error) => {
                if (publicKey) {
                    const request = {
                        paymentTool: cardData,
                        clientInfo: clientInfo.getInfo()
                    };
                    rpc.createToken(publicKey, request, success, error);
                } else {
                    error({
                        message: 'Public key required'
                    });
                }
            }
        }
    };
}).call(window || {});

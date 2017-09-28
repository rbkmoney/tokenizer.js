import 'whatwg-fetch';
import Fingerprint from 'fingerprintjs2';
import generateGuid from '../utils/generateGuid';

export default class CardTokenizer {

    static createToken(capiEndpoint, accessToken, paymentTool) {
        return CardTokenizer.getFingerprint().then((fingerprint) => {
            const params = {paymentTool, clientInfo: {fingerprint}};
            return CardTokenizer.createPaymentToolToken(capiEndpoint, accessToken, params);
        });
    }

    static createPaymentToolToken(capiEndpoint, accessToken, params) {
        return new Promise((resolve, reject) => {
            fetch(`${capiEndpoint}/v1/processing/payment_tools`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                    'X-Request-ID': generateGuid(),
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(params)
            }).then((response) => {
                if (response.status === 201) {
                    resolve(response.json());
                }
                else {
                    response.json()
                        .then((error) => reject(error))
                        .catch(() => {
                            reject({
                                url: response.url,
                                status: response.status,
                                statusText: response.statusText
                            });
                        });
                }
            }).catch((error) => reject(error));
        });
    }

    static getFingerprint() {
        return new Promise((resolve) =>
            new Fingerprint().get((fingerprint) => resolve(fingerprint)));
    }
}

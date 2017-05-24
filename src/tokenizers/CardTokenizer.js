import 'whatwg-fetch';
import ConfigLoader from '../loaders/ConfigLoader';
import generateGuid from '../utils/generateGuid';

import Promise from 'promise-polyfill';

if (!window.Promise) {
  window.Promise = Promise;
}

export default class CardTokenizer {
    static createToken(accessToken, cardData, success, error) {
        ConfigLoader.load().then(config => {
            CardTokenizer.tokenize(accessToken, cardData, config.capiEndpoint)
                .then(capiRes => success(capiRes))
                .catch(cause => error(cause));
        });
    }

    static tokenize(accessToken, cardData, capiEndpoint) {
        return new Promise((resolve, reject) => {
            fetch(`${capiEndpoint}/v1/processing/payment_tools`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                    'X-Request-ID': generateGuid(),
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify(cardData)
            }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    resolve(response.json());
                } else {
                    reject(response);
                }
            }).catch(() => reject('Error request to api'));
        });
    }
}

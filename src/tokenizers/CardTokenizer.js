import 'whatwg-fetch';
import ConfigLoader from '../loaders/ConfigLoader';

export default class CardTokenizer {
    static createToken(key, cardData, success, error) {
        ConfigLoader.load().then(config => {
            CardTokenizer.refreshToken(key, config.keycloakUrl)
                .then(keycloakRes => CardTokenizer.tokenize(keycloakRes.access_token, cardData, config.capiUrl)
                    .then(capiRes => success(capiRes))
                    .catch(cause => error(cause)))
                .catch(cause => error(cause))
        });
    }

    static refreshToken(key, keycloakUrl) {
        return new Promise((resolve, reject) => {
            fetch(`${keycloakUrl}/realms/external/protocol/openid-connect/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `grant_type=refresh_token&client_id=tokenizer&refresh_token=${key}`
            }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    resolve(response.json());
                } else {
                    reject(response);
                }
            }).catch(() => reject('Error request to keycloak'));
        });
    }

    static tokenize(token, cardData, capiUrl) {
        return new Promise((resolve, reject) => {
            fetch(`${capiUrl}/processing/payment_tools`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                    'X-Request-ID': this.guid(),
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(cardData)
            }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    resolve(response.json());
                } else {
                    reject(response);
                }
            }).catch(() => reject('Error request to CAPI'));
        });
    }

    static guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return `${s4()}${s4()}-${s4()}-${s4()}`;
    }
}

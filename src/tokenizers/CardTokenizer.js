import 'whatwg-fetch';
import uuid from 'uuid-js';
import settings from '../settings';

export default class CardTokenizer {
    static createToken(key, cardData, success, error) {
        CardTokenizer.refreshToken(key)
            .then(keycloakRes => CardTokenizer.tokenize(keycloakRes.access_token, cardData)
                .then(capiRes => success(capiRes))
                .catch(cause => error(cause)))
            .catch(cause => error(cause))
    }

    static refreshToken(key) {
        return new Promise((resolve, reject) => {
            fetch(`${settings.keycloakUrl}/realms/external/protocol/openid-connect/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `grant_type=refresh_token&client_id=tokenizer&refresh_token=${key}`
            }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    resolve(response.json());
                } else {
                    response.json().then(error => reject(error));
                }
            }).catch(error => reject('Refresh token error'));
        });
    }

    static tokenize(token, cardData) {
        return new Promise((resolve, reject) => {
            fetch(`${settings.capiUrl}/processing/payment_tools`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Request-ID': uuid.create(),
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(cardData)
            }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    resolve(response.json());
                } else {
                    response.json().then(error => reject(error));
                }
            }).catch(error => reject('Tokenization error'));
        });
    }
}

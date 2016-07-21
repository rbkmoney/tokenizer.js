import 'whatwg-fetch';
import uuid from 'uuid-js';

export default class {
    constructor(capi, token) {
        this._capi = capi;
        this._token = token;
    }

    createToken(cardData) {
        return new Promise((resolve, reject) => {
            fetch(this._capi + 'payment_tools', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Request-ID': uuid.create(),
                    'Authorization': 'Bearer ' + this._token
                },
                body: JSON.stringify(cardData)
            }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    resolve(response.json());
                } else {
                    response.json().then(error => reject(error));
                }
            });
        })
    }
}

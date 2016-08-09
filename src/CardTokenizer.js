import 'whatwg-fetch';
import uuid from 'uuid-js';
import settings from './settings'

export default class {

    static createToken(cardData, success, error) {
        fetch(settings.capiUrl + '/payment_tools', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Request-ID': uuid.create(),
                'Authorization': 'Bearer ' + settings.token
            },
            body: JSON.stringify(cardData)
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                response.json().then(result => success(result));
            } else {
                response.json().then(result => error(result));
            }
        });
    }
}

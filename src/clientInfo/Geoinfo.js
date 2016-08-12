import 'whatwg-fetch';
import settings from '../settings'

export default class {
    static get() {
        return new Promise((resolve, reject) => {
            fetch(settings.geoProviderUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    resolve(response.json());
                } else {
                    reject(response.json());
                }
            });
        });
    }
}

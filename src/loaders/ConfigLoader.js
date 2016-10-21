import 'whatwg-fetch';
import Utils from '../utils/Utils';

export default class ConfigLoader {
    static load() {
        const scriptUrl = Utils.getScriptUrl();
        const appConfigUrl = Utils.getOrigin(scriptUrl);
        return new Promise((resolve, reject) => {
            fetch(`${appConfigUrl}/appConfig.json`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    resolve(response.json());
                } else {
                    response.json().then(error => reject(error));
                }
            });
        });
    }
}
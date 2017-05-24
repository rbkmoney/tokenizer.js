import 'whatwg-fetch';
import Promise from 'promise-polyfill';

if (!window.Promise) {
  window.Promise = Promise;
}

export default class ConfigLoader {
    static load() {
        return new Promise((resolve, reject) => {
            fetch('tokenizerConfig.json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                if (response.status >= 200 && response.status < 300) {
                    resolve(response.json());
                } else {
                    reject(response);
                }
            });
        });
    }
}

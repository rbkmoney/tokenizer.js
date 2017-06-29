import 'whatwg-fetch';

export default class ConfigLoader {
    static load() {
        return new Promise((resolve, reject) => {
            fetch('tokenizerConfig.json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((response) => {
                if (response.status === 200) {
                    resolve(response.json());
                } else {
                    reject(response);
                }
            });
        });
    }
}

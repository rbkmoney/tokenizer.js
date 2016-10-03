import Fingerprint from 'fingerprintjs2';

export default class {
    constructor() {
        this.fingerprint = '';
        new Fingerprint().get(result => this.fingerprint = result);
    }

    getInfo() {
        return {
            fingerprint: this.fingerprint
        }
    }
}

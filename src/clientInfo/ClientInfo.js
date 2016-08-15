import Geoinfo from './Geoinfo';
import Fingerprint from 'fingerprintjs2';

export default class {
    constructor() {
        this.fingerprint = '';
        this.ipAddress = '';
        new Fingerprint().get(result => this.fingerprint = result);
        Geoinfo.get().then(result => this.ipAddress = result.ip);
    }

    getInfo() {
        return {
            fingerprint: this.fingerprint,
            ipAddress: this.ipAddress
        }
    }
}

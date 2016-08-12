import Geoinfo from './Geoinfo';
import Fingerprint from 'fingerprintjs2';

export default class {
    constructor() {
        this.fingerprint = '';
        this.ipAddress = '';
        new Fingerprint().get(result => this.fingerprint = result);
        Geoinfo.get().then(result => this.ipAddress = result.ip);
    }

    extendRequest(request) {
        return request ? (data => {
            data.fingerprint = this.fingerprint;
            data.ipAddress = this.ipAddress;
            return data;
        })(request) : {};
    }
}

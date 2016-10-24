import chai from 'chai';
import ClientInfo from '../src/clientInfo/ClientInfo'
chai.should();

describe('Client info', () => {
    const clientInfo = new ClientInfo();

    describe('getInfo', () => {
        it('fingerprint should match regexp', () => {
            const info = clientInfo.getInfo();
            info.fingerprint.should.match(/^[0-9a-f]{32}$/i);
        });
    });
});

import 'core-js/es6/promise';
import RpcProvider from './rpc/RpcProvider';

(function init() {
    new RpcProvider();
}).call(window || {});

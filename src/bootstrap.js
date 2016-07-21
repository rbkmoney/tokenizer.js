import CardTokenizer from './CardTokenizer';

(function () {
    window.Tokenizer = function (capiUrl, token) {
        this.card = new CardTokenizer(capiUrl, token);
    };
})();

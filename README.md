# Tokenizer
[![Build Status](http://ci.rbkmoney.com/buildStatus/icon?job=rbkmoney_private/tokenizer.js/master)](http://ci.rbkmoney.com/job/rbkmoney_private/job/tokenizer.js/job/master)

JavaScript библиотека для токенизации карточных данных клиентов.

## Настройка
Конфигурация происходит в файле [tokenizerConfig.json](/src/tokenizerConfig.json)
Для изменения конфигурации в рантайме достаточно заменить `tokenizerConfig.json`
Например в случае с nginx `tokenizerConfig.json` нужно положить в `/usr/share/nginx/html`

## Установка
Загрузка зивисимостей:

    npm install

Сборка библиотеки:

    npm run build

Режим разработки:

    npm start

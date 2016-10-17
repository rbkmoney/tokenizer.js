# Tokenizer.js
[![Build Status](http://ci.rbkmoney.com/buildStatus/icon?job=rbkmoney_private/tokenizer.js/master)](http://ci.rbkmoney.com/job/rbkmoney_private/job/tokenizer.js/job/master)

JavaScript библиотека для токенизации карточных данных клиентов.

## Настройка
Конфигурация происходит в файле [appConfig.json](/src/appConfig.json)
Для изменения конфигурации в рантайме достаточно заменить `appConfig.json`
Например в случае с nginx `appConfig.json` нужно положить в `/usr/share/nginx/html`

## Установка
Для загрузки зависимостей выполнить:

    npm install

Сборка библиотеки:

    gulp

Разработка / запуск примера:

    gulp develop

Библиотека будет доступна по адресу: http://localhost:7000/    
Пример будет доступен по адресу: http://localhost:7001/

## Использование
Пример использования можно посмотреть [тут](/sample/index.html)
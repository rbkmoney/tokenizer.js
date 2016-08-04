# Tokenizer.js
JavaScript библиотека для токенизации карточных данных клиентов.
## Установка
Для загрузки зависимостей выполнить:

    npm install

Для сборки библиотеки:

    gulp

## Использование
Пример использования можно посмотреть [тут](/sample/index.html)

## Пример Docker развертки

    docker build -t <your name>/tokenizer .
    docker run --rm -it --name tokenizer -p 7000:7000 <your name>/tokenizer
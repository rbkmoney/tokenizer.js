FROM node:4-onbuild

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
RUN npm install --global gulp-cli

COPY /src /usr/src/app

EXPOSE 7000

CMD [ "gulp", "docker" ]

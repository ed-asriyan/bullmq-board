FROM node:lts

WORKDIR /app

ADD package.json .
ADD package-lock.json .

RUN npm ci

ADD env.js .
ADD index.js .

CMD npm start

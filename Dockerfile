FROM node:alpine

WORKDIR /usr/app

COPY package* ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]
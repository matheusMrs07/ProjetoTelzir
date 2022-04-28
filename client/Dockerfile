FROM node:16-alpine

RUN mkdir -p /doc
WORKDIR /doc

COPY package.json /doc
COPY yarn.lock /doc
COPY . /doc

RUN npm install

CMD ["npm", "start"]
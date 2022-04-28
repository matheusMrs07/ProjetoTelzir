FROM node:16-alpine


RUN mkdir -p /doc

WORKDIR /doc

COPY package.json /doc

RUN npm install


COPY . /doc

CMD ["npm", "start"]



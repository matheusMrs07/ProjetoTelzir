FROM node:16-alpine


RUN mkdir -p /doc

WORKDIR /doc

COPY package.json /doc

RUN npm install

RUN yarn sequelize db:seed:all

COPY . /doc

CMD ["npm", "seed"]
CMD ["npm", "start"]



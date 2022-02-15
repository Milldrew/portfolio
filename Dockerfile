FROM node:16

WORKDIR /usr/src/app

COPY . .
RUN yarn build

EXPOSE 8080

CMD ["yarn", "start"]


FROM node:17-alpine

WORKDIR /code/

COPY package.json ./

# https://docs.npmjs.com/cli/cache
RUN npm cache verify

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]
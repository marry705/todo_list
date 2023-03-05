FROM node:16-alpine3.12

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start", "--openssl-legacy-provider"]
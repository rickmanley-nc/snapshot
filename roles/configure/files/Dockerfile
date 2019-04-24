FROM registry.access.redhat.com/rhoar-nodejs/nodejs-10:latest

WORKDIR /app

COPY . .

ENV PORT=3000

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]

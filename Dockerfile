
FROM node:8

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
FROM node:alpine



WORKDIR /app

COPY . /app/

EXPOSE 8081

RUN npm install

CMD npm start
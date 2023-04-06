FROM node:19-alpine as build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3009
CMD npm start
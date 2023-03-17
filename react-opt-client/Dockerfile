FROM node:19-alpine as build

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build

FROM ubuntu:23.04
USER root
RUN apt-get update
RUN apt-get install nginx -y
COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build /app/dist /var/www/html/
EXPOSE 3000
CMD ["nginx","-g","daemon off;"]
FROM node:19-alpine as build

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM node:19-alpine as production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/server ./server
COPY --from=build /usr/src/app/dist ./dist
RUN rm -r ./dist/orders/

EXPOSE 3008

CMD [ "node", "server/entry.express"]
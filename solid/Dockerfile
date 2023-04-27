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
COPY --from=build /usr/src/app/.solid ./.solid
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 3009
CMD [ "npm", "start"]
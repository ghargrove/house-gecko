FROM node:11.9.0-alpine
WORKDIR /express
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:11.9.0-alpine
WORKDIR /express
COPY --from=0 /express/package.json ./
COPY --from=0 /express/dist/server ./
COPY --from=0 /express/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "server.js"]
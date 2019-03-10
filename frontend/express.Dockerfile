FROM node:11.9.0-alpine as builder
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:11.9.0-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY --from=builder /dist/server ./
CMD ["node", "server.js"]

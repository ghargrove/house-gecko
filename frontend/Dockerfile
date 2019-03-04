FROM node:11.9.0-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
ADD . .
EXPOSE 8080
CMD ["yarn", "dev", "--host", "0.0.0.0"]

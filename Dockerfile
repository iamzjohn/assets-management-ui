# Stage 1: Build the Angular app
FROM node:16 AS builder

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .

# Stage 2: Serve the Angular app using Nginx
FROM nginx:latest

COPY .docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/asset-management-ui /usr/share/nginx/html

EXPOSE 80

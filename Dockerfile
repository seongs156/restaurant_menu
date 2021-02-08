FROM node:lts-alpine as build-stage
WORKDIR /restaurant_menu
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
RUN rm /etc/nginx/conf.d/default.conf
COPY  ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage ./restaurant_menu/dist /usr/share/nginx/html
WORKDIR /var/www
EXPOSE 81
CMD ["nginx", "-g", "daemon off;"]

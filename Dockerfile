FROM nginx:1.27.4-alpine-slim

#COPY public/* /usr/share/nginx/html/

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

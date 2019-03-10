FROM nginx:1.15.9-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=house-gecko_express /app/dist/web /var/www/tokay-gecko/

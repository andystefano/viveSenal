#!/bin/sh
# Arranque del contenedor en Cloud Run.
set -e

cd /var/www/html

# Cloud Run indica el puerto en $PORT (por defecto 8080).
PORT="${PORT:-8080}"
sed -i "s/^Listen .*/Listen ${PORT}/" /etc/apache2/ports.conf
sed -i "s/<VirtualHost \*:[0-9]*>/<VirtualHost *:${PORT}>/" /etc/apache2/sites-available/000-default.conf

# Las variables llegan en runtime: el cache de config se arma aquí, no en el build.
php artisan config:cache
php artisan route:cache
php artisan view:cache

if [ "${RUN_MIGRATIONS:-0}" = "1" ]; then
    php artisan migrate --force
    # Crea el usuario inicial del admin solo si no existe.
    php artisan db:seed --force
fi

chown -R www-data:www-data storage bootstrap/cache

exec "$@"

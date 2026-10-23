# Vive Señal

Sitio público (React) y backoffice en una sola aplicación **Laravel 12**.

| Ruta | Qué es |
|---|---|
| `/` | Sitio público (React, compilado con Vite) |
| `/api/fechas/{orden}` | JSON de un bloque de “Próximas Señales” (orden 1–3) |
| `/api/fechas/{orden}/imagen` | Imagen del bloque (guardada como BLOB en `fechas.foto`) |
| `/admin` | Backoffice: edición de fechas y usuarios. **No se enlaza desde el sitio.** |

## Requisitos

- PHP ≥ 8.2 con `pdo_mysql`, `mbstring`, `fileinfo`
- Composer 2, Node 22, MySQL 8

## Instalación local (Laragon)

```bash
composer install
npm install
cp .env.example .env        # ajustar DB_* y ADMIN_* (ver abajo)
php artisan key:generate
php artisan migrate         # crea `users` y agrega columnas que falten en `fechas` sin tocar datos
php artisan db:seed         # crea el usuario inicial ADMIN_EMAIL / ADMIN_PASSWORD si no existe
npm run build               # o `npm run dev` mientras se desarrolla
```

> En Laragon, el `php` del PATH puede ser otro; usa `C:\laragon\bin\php\php-8.3.*\php.exe` si `php -v` muestra 7.x.

### Variables de entorno propias

| Variable | Uso |
|---|---|
| `DB_DATABASE` | Base de datos con la tabla `fechas` (local: `web_senal`) |
| `ADMIN_NAME`, `ADMIN_EMAIL`, `ADMIN_PASSWORD` | Usuario inicial que crea `db:seed`. Si ya existe, no se modifica. |
| `APP_TIMEZONE` | `America/Santiago`: define cuándo una fecha pasa a gris |

Los demás usuarios se crean desde `/admin/usuarios`.

## Tests

```bash
php artisan test     # usa SQLite en memoria, no toca la base real
npm run lint
```

## Deploy (Plesk)

Workflow manual `.github/workflows/deploid_manual.yml`: compila assets, corre tests, sube la app a
`/var/www/vhosts/xn--viveseal-i3a.cl/app` y ejecuta `migrate` + `optimize`.

Antes del primer deploy, en el servidor:

1. Crear `/var/www/vhosts/xn--viveseal-i3a.cl/app/.env` a partir de `.env.example` (`APP_KEY` con `php artisan key:generate --show`).
2. En Plesk → Hosting Settings, cambiar **Document root** a `app/public` y usar PHP ≥ 8.2.
3. Ejecutar el workflow con `seed = true` la primera vez.

La carpeta `httpdocs` anterior no se toca: volver a apuntar el Document root a `httpdocs` es el rollback.

# Vive Señal

Sitio público (React) y backoffice en una sola aplicación **Laravel 12**.

| Ruta | Qué es |
|---|---|
| `/` | Sitio público (React, compilado con Vite) |
| `/api/fechas/{orden}` | JSON de un bloque de “Próximas Señales” (orden 1–3) |
| `/api/fechas/{orden}/imagen` | Imagen del bloque (guardada como BLOB en `fechas.foto`) |
| `/admin` | Backoffice: edición y orden de fechas, y usuarios. **No se enlaza desde el sitio.** |
| `/up` | Health check (Cloud Run) |

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

## Despliegue en Google Cloud Run

Un solo contenedor (`Dockerfile`): Vite compila los assets, Composer instala dependencias y
`php:8.3-apache` sirve `public/`. El entrypoint (`docker/entrypoint.sh`) toma el puerto de `$PORT`,
arma los caches de Laravel con las variables de runtime y, con `RUN_MIGRATIONS=1`, ejecuta
`migrate --force` + `db:seed` (usuario inicial, solo si no existe).

Requisito: Cloud SQL (MySQL 8). Las imágenes de las fechas están en la BD (`fechas.foto`), así que
**no se necesita bucket**.

### Primer deploy (manual)

```bash
cp env.cloudrun.example.yaml env.cloudrun.yaml   # completar valores (no se versiona)

gcloud run deploy vivesenal \
  --source . \
  --region southamerica-west1 \
  --allow-unauthenticated \
  --env-vars-file env.cloudrun.yaml \
  --add-cloudsql-instances PROYECTO:REGION:INSTANCIA
```

Para migrar los datos actuales a Cloud SQL, importar un dump de la tabla `fechas`
(`mysqldump --hex-blob BD fechas > fechas.sql`) en la base `web_senal`.

### Deploys siguientes

Workflow manual `.github/workflows/deploid_manual.yml`: corre lint, build y tests, y publica con
`gcloud run deploy --source .`. Las variables y la conexión a Cloud SQL se heredan de la revisión
anterior. Requiere `secrets.GCP_SA_KEY` y `vars.GCP_PROJECT_ID`, `vars.GCP_REGION`, `vars.CLOUD_RUN_SERVICE`.

### Dominio

Mapear `www.xn--viveseal-i3a.cl` (y `vivesenal.cl`, que redirige al dominio con ñ vía `public/.htaccess`)
con Cloud Run domain mappings o un Load Balancer.

### Probar el contenedor en local

```bash
docker build -t vivesenal .
docker run --rm -p 8080:8080 --env-file .env -e DB_HOST=host.docker.internal vivesenal
```

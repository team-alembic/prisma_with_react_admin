# Prisma & react-admin

## Prisma Server

* Running Prisma container `docker-compose up -d`
  - PostgresSQL (configured in `docker-compose.yml`)
  - http://localhost:4466/

* Bootstrap Configure Prisma API
  - `prisma init --endpoint http://localhost:4466`

* Deploy Prisma datamodel
  - `prisma deploy`
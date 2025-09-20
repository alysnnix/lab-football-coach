#!/bin/sh
set -e

# Constrói a URL do banco de dados no formato que o sqlx-cli espera,
# usando as variáveis de ambiente individuais.
export DATABASE_URL="postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?sslmode=disable"

echo "Running database migrations..."
# Agora usamos a variável DATABASE_URL que acabamos de criar.
sqlx migrate run --database-url "$DATABASE_URL"

echo "Populating database..."
python3 ./tooling/populateDB.py

echo "Starting server..."
# O comando 'exec "$@"' executa o CMD do Dockerfile ("./main").
exec "$@"
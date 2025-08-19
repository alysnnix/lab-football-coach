#!/bin/bash
# entrypoint.sh
set -e
echo "Waiting for database..."
until pg_isready -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USERNAME"; do
  sleep 1
done

echo "Running migrations..."
sqlx migrate run --database-url "$DSN"

echo "Populating database..."
python3 ./tooling/populateDB.py

exec "$@"

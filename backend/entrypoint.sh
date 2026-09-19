#!/bin/sh
set -e

# Ensure media directory exists
if [ -n "$MEDIA_ROOT" ]; then
    mkdir -p "$MEDIA_ROOT"
fi

# Wait for PostgreSQL to be ready if configured
if [ -n "$POSTGRES_HOST" ]; then
    echo "Waiting for PostgreSQL at $POSTGRES_HOST:${POSTGRES_PORT:-9013}..."
    while ! nc -z "$POSTGRES_HOST" "${POSTGRES_PORT:-9013}"; do
        sleep 1
    done
    echo "PostgreSQL is up and accepting connections."
fi

echo "Applying database migrations..."
python manage.py migrate --noinput

echo "Starting Django server on port 8011..."
exec python manage.py runserver 0.0.0.0:8011

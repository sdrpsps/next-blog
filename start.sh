#!/bin/sh

# Check if POSTGRES_PRISMA_URL is set
if [ -z "$POSTGRES_PRISMA_URL" ]; then
  echo "Error: POSTGRES_PRISMA_URL is not set."
  exit 1
fi

# Start the Next.js server
exec node server.js

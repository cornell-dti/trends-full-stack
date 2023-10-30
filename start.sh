#!/bin/sh

# Start the backend
node /app/backend/dist/server.js &

# Start Nginx
nginx -g "daemon off;"

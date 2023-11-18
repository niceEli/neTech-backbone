#!/bin/bash

# Check if node_modules folder exists
if [ ! -d "/app/node_modules" ]; then
  echo "Running npm install for the first launch..."
  npm install
fi

# Start the application
exec npm start
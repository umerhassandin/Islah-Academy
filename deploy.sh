#!/bin/bash
# Islah Academy Deployment Script for Hostinger VPS

# Exit on error
set -e

APP_NAME="islah-academy"
DEPLOY_DIR="/var/www/$APP_NAME"
# Upload this zip to the server separately (it is not kept in the git repo).
ZIP_FILE="islah-academy-deploy.zip"

echo "🚀 Starting Islah Academy deployment..."

# Check if zip file exists
if [ ! -f "$ZIP_FILE" ]; then
    echo "❌ Error: $ZIP_FILE not found in the current directory."
    exit 1
fi

# Create deployment directory
sudo mkdir -p $DEPLOY_DIR
sudo chown -R $USER:$USER /var/www

# Unzip deployment package
echo "📦 Extracting files..."
unzip -o $ZIP_FILE -d $DEPLOY_DIR

cd $DEPLOY_DIR

# Install dependencies and build app
echo "📥 Installing dependencies..."
npm ci
echo "🏗️ Building app..."
npm run build

# Manage process with PM2
echo "⚙️ Starting application with PM2..."
if pm2 list | grep -q "$APP_NAME"; then
    pm2 restart $APP_NAME --update-env
else
    pm2 start npm --name "$APP_NAME" -- start
fi

# Save PM2 state
pm2 save

echo "✅ Islah Academy is live!"
pm2 status $APP_NAME

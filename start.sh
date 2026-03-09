#!/bin/bash
set -e

echo "📦 Installing dependencies..."
cd server
npm install

echo "🔨 Building TypeScript..."
npm run build

echo "🚀 Starting server..."
npm start

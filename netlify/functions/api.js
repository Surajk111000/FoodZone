// netlify/functions/api.js
// Serverless function to proxy API calls (optional)

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

exports.handler = async (event, context) => {
  const { path, method, body } = event;
  
  // This is a simple example - you can use this for serverless backend
  if (path.startsWith('/.netlify/functions/api')) {
    // Handle your API routes here
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'API endpoint' })
    };
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ error: 'Not found' })
  };
};

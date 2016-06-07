/**
 * app.js
 */

const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');

const app = express();
const port = process.env.PORT || 3000;

// Use this middleware to server up static files built into /public
app.use(serveStatic(path.join(__dirname, 'public')));

// attach to port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

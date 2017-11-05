'use strict';

// Express package
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Static resource
app.use(express.static('./public'));

app.get( '/', function(request, response) {
    response.sendFile('./public/index.html');
});

app.listen(PORT, function() {
    console.log(`Listening on port: ${PORT}`);
});
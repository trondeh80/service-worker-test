const express = require('express');

const app = express();
app.use(express.static('src'));
app.listen(1337, () => console.log('listening on port 1337'));
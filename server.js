const express = require('express');

const app = express();

const dexie = require('dexie');

const port = 3000 || process.env.PORT;

app.use(express.static('public'));


app.listen(port, () => console.log(`listening on port ${port}`));



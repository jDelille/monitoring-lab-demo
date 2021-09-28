const express = require('express');
const rollbar = require('rollbar');
const path = require('path');
//heroku port 
const PORT = process.env.PORT || 5656

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
})





app.listen(PORT, () => console.log(`Avengers... Assemble on port: ${PORT}`));
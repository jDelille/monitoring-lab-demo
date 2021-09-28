const express = require('express');
const path = require('path');

const app = express();

const Rollbar = require('rollbar');
const rollbar = new Rollbar({
    accessToken: '256b8a13776b40178fffb8e1eafbfa7c',
    captureUncaught: true,
    captureUnhandledRejections: true
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
    rollbar.info('HTML was avenged...')
})



//heroku port 
const PORT = process.env.PORT || 5656

app.use(rollbar.errorHandler())

app.listen(PORT, () => console.log(`Avengers... Assemble on port: ${PORT}`));
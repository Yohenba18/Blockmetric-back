const express = require('express')
const app = express();
const ethereumRouter = require('./routes/ethereum')


app.get('/api/v1/ethereum', ethereumRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("server running")
})
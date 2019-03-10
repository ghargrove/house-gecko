
const express = require('express');

const app = express()
const port = 80

const f = require('./index');

// We would have to be able to render the react app & respond here..

app.get('/', f.default)

app.listen(port, () => {
  console.log(`Example listening on port ${port}`)
})

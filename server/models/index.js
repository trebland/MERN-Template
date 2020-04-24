var mongoose = require("mongoose");
const URI = require('../config/index');

mongoose.connect(URI, {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected successfully')
})

db.on('error', err => {
  console.error('connection error:', err)
})


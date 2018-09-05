const express = require('express')
const cors  = require('cors')
const bodyParser = require('body-parser')
const apicache  = require('apicache')
const RssService  = require('./rssService')

let app = express()
let cache = apicache.middleware
app.use(cors())
app.use(bodyParser.json())

app.get('/api/rss', cache('10 minutes'), (req, res, next) => {
  if (!req.query.rss_url) {
    const error = new Error('missing or invalid rss_url')
    error.statusCode = 400
    
    return next(error)
  }

  let service = new RssService()
  service.retrieve(req.query.rss_url)
  .then(data => {
      res.json(data);
  })
  .catch(next)
})

app.use(function (err, req, res, next) {
  console.error(`Error in handling request: ${err.message}`);
  if (!err.statusCode) {
      err.statusCode = 500
  }
  
  res.status(err.statusCode).send({ error: err.message })
})

app.listen(3000, () => console.log('Service listening on port 3000...'))


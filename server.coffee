# init express + app
express = require 'express'
app = express()

# set static folder to serve assets from
app.use(express.static(__dirname + '/public'))

# route all uncaught requests to index
app.get '*', (req, res) ->
  res.sendfile __dirname + '/public/index.html'

port = process.env.PORT || process.argv[2] || 3000
app.listen port

console.log 'Listening on port ' + port + '.'
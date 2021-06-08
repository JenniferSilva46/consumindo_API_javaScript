const db = require('./db.json')
const express = require('express')
const {
  json
} = require('express')
const app = express()
const cors = require('cors');
const port = 3000


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});

function index(req, res) {
  res.send(JSON.stringify(db))

}

function random(req, res) {
  let n = req.params.n
  let list = []
  for (let i = 0; i < n; i++) {
    let r = Math.floor(Math.random() * db.length)
    list.push(db[r])
  }
  return res.send(JSON.stringify(list))
}



app.get('/', index)
app.get('/random/:n', random)

app.listen(port, () => console.log(`Beer server running on port ${port}!`))
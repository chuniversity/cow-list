const express = require('express');
const path = require('path');
const model = require('../database/index')

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.get('/api/cows', (req, res) => {
  model.getAll((err,data) => {
    if(err) {
      res.send(400, err)
    } else {
      res.send(200, data)
    }
  })
})

app.post('/api/cows', (req, res) => {
  console.log(req.body)
  model.create(req.body.name1, req.body.description1, (err, data) => {
    if(err) {
      res.send(400, err)
    } else {
      res.send(200, 'entry completed')
    }
  });
})



app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});

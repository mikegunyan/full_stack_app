const express = require('express');
const app = express();
let Names = require('../database/Names.js');


app.use(express.static(__dirname + '/../public'));

module.exports = app;


app.use(express.json());

app.post('/names', (req, res) => {
  Names.create({
	name: req.body.name,
	id: req.body.id
  })
	.then(() => res.send(201))
	.catch((err) => {
  	console.log(err);
  	res.send(500);
	})
});

app.get('/names', function (req, res) {
  Names.find({})
  .then((data) => res.send(data))
  .catch((err) => res.send(err));
})

app.options('/names', (req, res) => {
  Names.deleteMany({})
  .then(() => res.send(201))
  .catch((err) => res.send(err));
})

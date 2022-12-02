const express = require("express")
const app = express();
const port = 8080;
const knex = require('knex')(require('./knexfile')['development']);

app.use(express.json());


app.get('/', function(req, res) {
    knex
      .select('*')
      .from('thing')
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message: `The data you are looking for could not be found. Please try again`,
          error: err
        })
      );
  });

app.listen(port, () => console.log(`It works on ${port}!`))
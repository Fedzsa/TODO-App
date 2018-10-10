var express = require('express');
var router = express.Router();
var con = require('../db');

/* GET home page. */
router.get('/', (req, res) => {
  con.query('SELECT * FROM message', (err, result) => {
    if(err) throw err;
    res.json(result);
  });
});

router.delete('/:id', (req, res) => {
  var id = req.params.id;

  con.query(`DELETE FROM message WHERE id = ${id}`, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;

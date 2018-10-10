var express = require('express');
var router = express.Router();
var con = require('../db');

router.post('/', (req, res) => {
    var msg = {
        title: req.body.title,
        message: req.body.message
    };

    con.query(`INSERT INTO message (title, message) VALUES ('${msg.title}', '${msg.message}')`, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.route('/:id').get((req, res) => {
    var id = req.params.id;

    con.query(`SELECT * FROM message WHERE id = ${id}`, (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
}).put((req, res) => {
    var msg = {
        id: req.body.id,
        title: req.body.title,
        message: req.body.message
    };

    con.query(`UPDATE message SET title = '${msg.title}', message = '${msg.message}' WHERE id = ${msg.id}`, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = router;

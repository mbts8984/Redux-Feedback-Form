const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


router.post('/', (req, res) => {
    console.log('LOOK HERE', req.body);

    console.log('POST /feedback');
    let query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1,$2,$3,$4);`;
    pool.query(query, [req.body.feelings, req.body.understanding, req.body.support, req.body.comments])
        .then(response => {
            console.log('back from POST with response: ', response);
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error in POST: ', error);
            res.sendStatus(500);
        })
});




module.exports = router;
